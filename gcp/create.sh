#!/bin/bash

#valida que se pase el parametro de la contraseña
if [ -z "$1" ]; then
    echo "No se ingreso password"
    exit 1
fi

export PROJECT_ID="misw-4204-cloud"
# INSTANCE_NAME="web-server"
INSTANCE_NAME_BATCH="worker"
MACHINE_TYPE="e2-small"
IMAGE="projects/debian-cloud/global/images/debian-11-bullseye-v20240415"
REGION="us-west1"
ZONE="us-west1-b"
MACHINE_TAG="http-server,https-server"
MACHINE_TAG_BATCH="bath-server"
INSTANCE_TYPE="SPOT"
# TEMPLATE - INSTANCIA WEB (BACK)
INSTANCE_NAME_TEMPLATE="web-server-template"
# FIREWALL - TEMPLATE
PORT_WEB="8080"
TARGET_FIREWALL_RULE_TEMPLATE="allow-health-check"
FIREWALL_RULE_TEMPLATE="fw-allow-health-check"
# CHECK-IN - TEMPLATE
HEALTH_CHECK_VM="http-check-vm"
# INSTANCES GROUP
INSTANCE_WEB_SERVER_GROUP="web-server-instance-group"
ZONE_INSTANCE_GROUP="us-west1-c"
# IP FIJA DEL BALANCEADOR DE CARGA
LB_IP_NAME="lb-ipv4-1"
# HEALTH CHECK - LB
HEALTH_CHECK_LB="http-lb-check"
# BACKEND SERVICE
BACKEND_SERVICE_NAME="web-backend-service"
BACKEND_NAME_PORT="http"
# URL PROXY
URL_MAP_NAME="web-server-map-http"
# TARGET PROXY
TARGET_PROXY_NAME="http-server-lb-proxy"
# FORWARDING RULE
FORWARDING_RULE_NAME="http-server-forward-rule"
## ==================== INSTANCIA WEB (BACK) ====================
# TAGS DE INSTANCIA WEB (BACK)
MACHINE_TAG_TEMPLATE="http-server,https-server,lb-health-check,allow-health-check"
# REGLAS DE FIREWALL
# FIREWALL_RULE_VM1_1="allow-fastapi-port"
# FIREWALL_RULE_VM1_2="allow-perf-port"
# FIREWALL_RULE_VM1_3="allow-nginx-port"
FIREWALL_RULE_VM2_4="allow-redis-port"
FIREWALL_RULE_VM2_5="allow-celery-port"
# TAGS DE BASE DE DATOS
DB_INSTANCE_NAME="mv2-db"
POSTGRES_VERSION="POSTGRES_15"
DB_PWD=$1
DB_EDITION="enterprise"
DATABASE_STORAGE_SIZE="10GB"
DB_NAME="db-test"
# CLOUD STORAGE - TAGS DE CUENTAS DE SERVICIO
BUCKET_NAME="misw-4204-storage-fpv-bucket"
BUCKET_ROLE_ID="custom.storage.admin"
BUCKET_ROLE_TITLE="Custom Storage Admin"
BUCKET_SA_NAME="storage-admin-sa"
BUCKET_SA_EMAIL="$BUCKET_SA_NAME@$PROJECT_ID.iam.gserviceaccount.com"

# CONFIGURAR PROYECTO Y ZONA
gcloud auth list
gcloud config list project
gcloud config set project $PROJECT_ID
#gcloud compute project-info describe --project $(gcloud config get-value project)
gcloud config set compute/region $REGION
gcloud config set compute/zone $ZONE
echo -e "PROJECT ID: $PROJECT_ID\nZONE: $ZONE"

## ==================== CLOUD STORAGE ====================

# CREAR BUCKET
gsutil mb -l $REGION gs://$BUCKET_NAME

# # AGREGAR PERMISOS DE LECTURA A TODOS LOS USUARIOS
gsutil iam ch allUsers:objectViewer gs://$BUCKET_NAME

# ## ==================== CUENTA DE SERVICIO ====================

EXISTING_ROLE=$(gcloud iam roles describe custom.storage.admin --project $PROJECT_ID 2>&1)
echo $EXISTING_ROLE

if [[ $EXISTING_ROLE == *"NOT_FOUND"* ]]; then
    # CREAR EL ROL PERSONALIZADO
    gcloud iam roles create $BUCKET_ROLE_ID \
    --project $PROJECT_ID \
    --title "$BUCKET_ROLE_TITLE" \
    --description "Custom role for storage administration"
else
    # El rol existe, verificamos si está en estado eliminado
    DELETED=$(echo "$EXISTING_ROLE" | grep -c "deleted: true")
    if [ $DELETED -eq 1 ]; then
        gcloud iam roles undelete $BUCKET_ROLE_ID \
            --project $PROJECT_ID
    fi
fi

gcloud iam roles update $BUCKET_ROLE_ID \
    --project $PROJECT_ID \
    --add-permissions storage.buckets.create,storage.buckets.update,storage.buckets.delete,storage.buckets.get,storage.buckets.list,storage.objects.get,storage.objects.list,storage.objects.create,storage.objects.delete,storage.objects.update

# CREAR CUENTA DE SERVICIO PARA PERMISOS DE STORAGE Y SQL
gcloud iam service-accounts create $BUCKET_SA_NAME \
    --description="Service account to access the storage bucket and database from the vm" \
    --display-name="Storage DB VM Admin Service Account"

# ASIGNAR ROL A CUENTA DE SERVICIO
gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member=serviceAccount:$BUCKET_SA_EMAIL \
    --role=projects/$PROJECT_ID/roles/$BUCKET_ROLE_ID
gcloud projects add-iam-policy-binding $PROJECT_ID --member=serviceAccount:$BUCKET_SA_EMAIL --role=roles/cloudsql.client
gcloud projects add-iam-policy-binding $PROJECT_ID --member=serviceAccount:$BUCKET_SA_EMAIL --role=roles/storage.objectViewer
gcloud projects add-iam-policy-binding $PROJECT_ID --member=serviceAccount:$BUCKET_SA_EMAIL --role=roles/storage.admin
gcloud projects add-iam-policy-binding $PROJECT_ID --member=serviceAccount:$BUCKET_SA_EMAIL --role=roles/logging.admin
gcloud projects add-iam-policy-binding $PROJECT_ID --member=serviceAccount:$BUCKET_SA_EMAIL --role=roles/cloudsql.editor

# ## ==================== INSTANCIA DE BASE DE DATOS ====================

## CREAR INSTANCIA DE BASE DE DATOS
gcloud sql instances create $DB_INSTANCE_NAME \
    --database-version $POSTGRES_VERSION \
    --root-password $DB_PWD \
    --edition $DB_EDITION \
    --zone $ZONE \
    --storage-size $DATABASE_STORAGE_SIZE \
    --no-storage-auto-increase \
    --memory 3.75GB \
    --cpu 1 \
    --assign-ip

# ## ==================== BASE DE DATOS ====================

# CREAR BASE DE DATOS
gcloud sql databases create $DB_NAME \
    --instance $DB_INSTANCE_NAME

# ASIGNAR CONTRASENIA A USUARIO POR DEFECTO
gcloud sql users set-password postgres \
    --instance $DB_INSTANCE_NAME \
    --password $DB_PWD

# OBTENER IP DE LA BASE DE DATOS
DB_IP=$(gcloud sql instances describe $DB_INSTANCE_NAME --format='value(ipAddresses.ipAddress)' | cut -d';' -f1)

DB_CONNECTION_URL="postgresql://postgres:$DB_PWD@$DB_IP:5432/$DB_NAME"
echo "DB CONNECTION URL: $DB_CONNECTION_URL"

## ==================== AUTORIZAR CONEXIONES A BASE DE DATOS ====================

# SE DEJA ABIERTO PARA PRUEBAS
gcloud sql instances patch $DB_INSTANCE_NAME \
    --authorized-networks="0.0.0.0/0" \
    --quiet
# gcloud sql instances patch mv2-db --authorized-networks=$(curl ifconfig.me.)  --quiet

# # HACER PRUEBA DE CONEXION DE BASE DE DATOS DESDE LA INSTANCIA POR SSH
# # sudo apt-get install postgresql-client -y
# # psql --host=35.197.11.11 --port=5432 --username=postgres --password --dbname=db-test

## ==================== INSTANCIA BATCH ====================

echo "========================================================"
echo "========================================================"
DOCKER_COMMAND_BATCH="sudo docker run -d -e DB_URL=$DB_CONNECTION_URL -e REDIS_URL=redis://redis:6379 -e BUCKET_NAME=$BUCKET_NAME -p 5556:5555 --network fpv-network --log-driver=gcplogs -v ~/.config:/root/.config workertres"
echo "$DOCKER_COMMAND_BATCH"
echo "========================================================"
echo "========================================================"

# CREAR INSTANCIA DE VM - PROCESOS DE BATCH
gcloud compute instances create $INSTANCE_NAME_BATCH \
    --project $PROJECT_ID \
    --machine-type $MACHINE_TYPE \
    --image $IMAGE \
    --zone $ZONE \
    --service-account $BUCKET_SA_EMAIL \
    --provisioning-model $INSTANCE_TYPE \
    --scopes=https://www.googleapis.com/auth/service.management.readonly,https://www.googleapis.com/auth/logging.write,https://www.googleapis.com/auth/monitoring.write,https://www.googleapis.com/auth/servicecontrol,https://www.googleapis.com/auth/devstorage.full_control,https://www.googleapis.com/auth/trace.append \
    --metadata=startup-script="#! /bin/bash
    sudo apt update && sudo apt install -y docker.io git
    sudo curl -L https://github.com/docker/compose/releases/download/1.25.3/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    git clone https://github.com/MISW-4204-Desarrollo-de-SW-en-la-nube/Proyecto-SW-Nube.git  nube
    sudo chmod -R 777 /nube
    cd nube
    sudo docker network create fpv-network
    sudo docker run -d --name redis -p 6379:6379  --network fpv-network redis:latest
    sudo docker build -t workertres -f /nube/dockerfile-worker /nube/.
    $DOCKER_COMMAND_BATCH
    "

# # ANIADIR TAGS A LA INSTANCIA
gcloud compute instances add-tags $INSTANCE_NAME_BATCH --tags $MACHINE_TAG_BATCH

# # CREAR REGLA DE FIREWALL- REDIS
gcloud compute firewall-rules create $FIREWALL_RULE_VM2_4 \
    --direction=INGRESS \
    --priority=1000 \
    --network=default \
    --action=ALLOW \
    --rules=tcp:6379  \
    --source-ranges=0.0.0.0/0 \
    --target-tags=bath-server

# # CREAR REGLA DE FIREWALL- CELEERY
gcloud compute firewall-rules create $FIREWALL_RULE_VM2_5 \
    --direction=INGRESS \
    --priority=1000 \
    --network=default \
    --action=ALLOW \
    --rules=tcp:5556  \
    --source-ranges=0.0.0.0/0 \
    --target-tags=bath-server

BATCH_IP=$(gcloud compute instances list --filter=name:$INSTANCE_NAME_BATCH --format='value(EXTERNAL_IP)')
echo "BATCH IP: $BATCH_IP"

## ==================== INSTANCIA WEB (BACK) ====================

echo "========================================================"
echo "========================================================"
DOCKER_COMMAND_WEB="docker run -d -e DB_URL=$DB_CONNECTION_URL -e SECRET_KEY=supreSecretKey123 -e REDIS_URL=redis://$BATCH_IP:6379 -e DEBUG=False -e BUCKET_NAME=$BUCKET_NAME -p $PORT_WEB:80 -p 6379:6379 --log-driver=gcplogs -v ~/.config:/root/.config -v /public:/app/public nipoanz/fastapi-back:latest"
echo "$DOCKER_COMMAND_WEB"
echo "========================================================"
echo "========================================================"


# CORRER DOCKER - COMANDO EJEMPLO
# docker run  -e DB_URL=postgresql://postgres:password@34.127.86.181:5432/db-test -e SECRET_KEY=supreSecretKey123 -e REDIS_URL=redis://redis:6379 -e DEBUG=False -e BUCKET_NAME=misw-4204-storage-fpv-bucket -p 8080:80 -p 6379:6379 --log-driver=gcplogs -v ~/.config:/root/.config fastapi-app
# *EL simbolo & al final del comando permite que el proceso se ejecute en segundo plano
# Validar con (ps aux | grep '[s]erver-agent') que el servicio está ejecutandose

## ==================== TEMPLATE - INSTANCIA WEB (BACK) ====================

gcloud compute instance-templates create $INSTANCE_NAME_TEMPLATE \
    --project $PROJECT_ID \
    --region $REGION \
    --network default \
    --subnet default \
    --instance-template-region $REGION \
    --machine-type $MACHINE_TYPE \
    --boot-disk-type pd-balanced \
    --no-restart-on-failure \
    --image $IMAGE \
    --service-account $BUCKET_SA_EMAIL \
    --provisioning-model $INSTANCE_TYPE \
    --tags $MACHINE_TAG_TEMPLATE \
    --scopes https://www.googleapis.com/auth/sqlservice.admin,https://www.googleapis.com/auth/service.management.readonly,https://www.googleapis.com/auth/logging.write,https://www.googleapis.com/auth/monitoring.write,https://www.googleapis.com/auth/servicecontrol,https://www.googleapis.com/auth/devstorage.full_control,https://www.googleapis.com/auth/trace.append \
    --metadata=startup-script="#! /bin/bash
    sudo apt update && sudo apt install -y docker.io
    sudo curl -L https://github.com/docker/compose/releases/download/1.25.3/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    sudo docker pull nipoanz/fastapi-back
    sudo mkdir /public
    sudo chmod -R 777 public/
    $DOCKER_COMMAND_WEB
    "



# # CREAR INSTANCIA DE VM - BACK PRINCIPAL
# gcloud compute instances create $INSTANCE_NAME \
#     --project $PROJECT_ID \
#     --machine-type $MACHINE_TYPE \
#     --boot-disk-size $DISK_SIZE_MACHINE \
#     --image $IMAGE \
#     --zone $ZONE \
#     --service-account $DB_VM_EMAIL \
#     --provisioning-model $INSTANCE_TYPE \
#     --metadata=startup-script="#! /bin/bash
#     sudo apt update && sudo apt install -y docker.io git python3 default-jre unzip nfs-common
#     sudo curl -L https://github.com/docker/compose/releases/download/1.25.3/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
#     sudo chmod +x /usr/local/bin/docker-compose
#     git clone https://github.com/MISW-4204-Desarrollo-de-SW-en-la-nube/Proyecto-SW-Nube.git nube
#     cd nube
#     sudo chmod -R 777 /nube
#     sudo docker-compose build fastapiback nginx
#     sudo curl -L -o /tmp/ServerAgent-2.2.3.zip https://github.com/undera/perfmon-agent/releases/download/2.2.3/ServerAgent-2.2.3.zip
#     sudo unzip -q /tmp/ServerAgent-2.2.3.zip  -d /server-agent && rm /tmp/ServerAgent-2.2.3.zip
#     sudo mount -t nfs $NFS_INSTANCE_INT_IP:/nube/public /nube/public
#     "


## ======================= FIREWALL =================================


gcloud compute firewall-rules create $FIREWALL_RULE_TEMPLATE \
  --network default \
  --action allow \
  --direction ingress \
  --source-ranges 0.0.0.0/0 \
  --target-tags $TARGET_FIREWALL_RULE_TEMPLATE \
  --rules tcp:$PORT_WEB


## ==================== HEALTH CHECK ==============================

gcloud compute health-checks create http $HEALTH_CHECK_VM \
    --region $REGION \
    --description "Checks HTTP service on port 8080" \
    --enable-logging \
    --check-interval 30s \
    --healthy-threshold 2 \
    --unhealthy-threshold 3 \
    --request-path "/" \
    --timeout 10s \
    --port $PORT_WEB


# ## ==================== INSTANCES GROUP ====================

gcloud beta compute instance-groups managed create $INSTANCE_WEB_SERVER_GROUP \
    --project $PROJECT_ID \
    --base-instance-name $INSTANCE_WEB_SERVER_GROUP \
    --description "Instance group for web server" \
    --template projects/$PROJECT_ID/regions/$REGION/instanceTemplates/$INSTANCE_NAME_TEMPLATE \
    --size 1 \
    --zone $ZONE_INSTANCE_GROUP \
    --default-action-on-vm-failure repair \
    --health-check projects/$PROJECT_ID/regions/$REGION/healthChecks/$HEALTH_CHECK_VM \
    --initial-delay 100 \
    --no-force-update-on-repair \
    --standby-policy-mode scale-out-pool \
    --standby-policy-initial-delay 50 \
    --list-managed-instances-results PAGELESS

## POLITICA DE ESCALADO AUTOMATICO

gcloud beta compute instance-groups managed set-autoscaling $INSTANCE_WEB_SERVER_GROUP \
    --project $PROJECT_ID \
    --zone $ZONE_INSTANCE_GROUP \
    --description "Autoscaling policy for web server" \
    --mode on \
    --min-num-replicas 1 \
    --max-num-replicas 3 \
    --scale-based-on-cpu \
    --target-cpu-utilization 0.75 \
    --cool-down-period 45

# ==================== IP FIJA PARA BALANCEADOR DE CARGA ====================

gcloud compute addresses create $LB_IP_NAME \
  --ip-version IPV4 \
  --global

# ==================== HEALTH CHECK ====================

gcloud compute health-checks create http $HEALTH_CHECK_LB \
    --description "Checks LB health on port 80" \
    --enable-logging \
    --check-interval 30s \
    --healthy-threshold 2 \
    --unhealthy-threshold 3 \
    --timeout 20s \
    --port $PORT_WEB

# ## ==================== BACKEND SERVICE - AUTOSCALING POLICY ====================

gcloud compute backend-services create $BACKEND_SERVICE_NAME \
    --description "Backend service for web server" \
    --protocol HTTP \
    --port-name $BACKEND_NAME_PORT \
    --enable-logging \
    --health-checks $HEALTH_CHECK_LB \
    --timeout 30s \
    --global


gcloud compute instance-groups managed set-named-ports $INSTANCE_WEB_SERVER_GROUP \
    --named-ports "$BACKEND_NAME_PORT:$PORT_WEB" \
    --zone $ZONE_INSTANCE_GROUP

# =================== ADD INSTANCES TO BACKEND SERVICE ====================

gcloud compute backend-services add-backend $BACKEND_SERVICE_NAME \
    --description "Backend service for web server" \
    --instance-group $INSTANCE_WEB_SERVER_GROUP \
    --instance-group-zone $ZONE_INSTANCE_GROUP \
    --balancing-mode UTILIZATION \
    --max-utilization 0.75 \
    --global

# SE ESPERA 1 MIN
sleep 60

# ## ==================== URL MAP - PROXY ====================

gcloud compute url-maps create $URL_MAP_NAME \
    --description "URL map for web server" \
    --default-service $BACKEND_SERVICE_NAME \
    --global

# gcloud compute url-maps create web-map-http \
#     --description "URL map for web server" \
#     --default-service web-backend-service \
#     --global

gcloud compute target-http-proxies create $TARGET_PROXY_NAME \
    --url-map $URL_MAP_NAME

# gcloud compute target-http-proxies create http-lb-proxy \
#     --url-map web-map-http

gcloud compute forwarding-rules create $FORWARDING_RULE_NAME \
   --address $LB_IP_NAME \
   --global \
   --target-http-proxy $TARGET_PROXY_NAME \
   --ports $PORT_WEB

# ================ MENSAJE DE CONEXION AL BALANCEADOR DE CARGA ================

LB_IP=$(gcloud compute addresses describe lb-ipv4-1 \
  --format "get(address)" \
  --global)
echo "Connect to IP: http://$LB_IP:$PORT_WEB"