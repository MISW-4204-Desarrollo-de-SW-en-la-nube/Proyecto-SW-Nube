#!/bin/bash

#valida que se pase el parametro de la contraseña
if [ -z "$1" ]; then
    echo "No se ingreso password"
    exit 1
fi

export PROJECT_ID="misw-4204-cloud"
INSTANCE_NAME="web-server"
INSTANCE_NAME_BATCH="worker"
MACHINE_TYPE="e2-small"
DISK_SIZE_MACHINE="10GB"
IMAGE="projects/debian-cloud/global/images/debian-11-bullseye-v20240415" 
REGION="us-west1"
ZONE="us-west1-b"
MACHINE_TAG="http-server,https-server"
MACHINE_TAG_BATCH="bath-server"
INSTANCE_TYPE="SPOT"
# REGLAS DE FIREWALL
FIREWALL_RULE_VM1_1="allow-fastapi-port"
FIREWALL_RULE_VM1_2="allow-perf-port"
FIREWALL_RULE_VM1_3="allow-nginx-port"
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

EXISTING_ROLE=$(gcloud iam roles describe custom.storage.admin --project misw-4204-cloud 2>&1)
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
# gcloud projects add-iam-policy-binding $PROJECT_ID --member=serviceAccount:$BUCKET_SA_EMAIL --role=roles/storage.admin

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
    --assign-ip \
    --zone $ZONE

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

## ==================== INSTANCIA WEB (BACK) ====================

DB_CONNECTION_URL="postgresql://postgres:$DB_PWD@$DB_IP:5432/$DB_NAME"
echo "DB CONNECTION URL: $DB_CONNECTION_URL"

# CREAR INSTANCIA DE VM - BACK PRINCIPAL
gcloud compute instances create $INSTANCE_NAME \
    --project $PROJECT_ID \
    --machine-type $MACHINE_TYPE \
    --boot-disk-size $DISK_SIZE_MACHINE \
    --image $IMAGE \
    --zone $ZONE \
    --service-account $BUCKET_SA_EMAIL \
    --provisioning-model $INSTANCE_TYPE \
    --scopes=https://www.googleapis.com/auth/service.management.readonly,https://www.googleapis.com/auth/logging.write,https://www.googleapis.com/auth/monitoring.write,https://www.googleapis.com/auth/servicecontrol,https://www.googleapis.com/auth/devstorage.read_write,https://www.googleapis.com/auth/trace.append \
    --metadata=startup-script="#! /bin/bash
    sudo apt update && sudo apt install -y docker.io git python3 default-jre unzip
    sudo git clone https://github.com/MISW-4204-Desarrollo-de-SW-en-la-nube/Proyecto-SW-Nube.git nube
    sudo chmod -R 777 /nube
    cd nube
    sudo git checkout sem5
    sudo docker build -t fastapi-app /nube/.
    sudo docker run -d -e DB_URL=$DB_CONNECTION_URL -e SECRET_KEY=supreSecretKey123 -e BASE_URL=http://localhost:8080 -e REDIS_URL=redis://redis:6379 -e DEBUG=False -p 3500:8080 -p 6379:6379 -v ~/.config:/root/.config fastapi-app 
    sudo curl -L -o /tmp/ServerAgent-2.2.3.zip https://github.com/undera/perfmon-agent/releases/download/2.2.3/ServerAgent-2.2.3.zip
    sudo unzip -q /tmp/ServerAgent-2.2.3.zip  -d /server-agent && rm /tmp/ServerAgent-2.2.3.zip
    sudo sh /server-agent/ServerAgent-2.2.3/startAgent.sh --udp-port 0 --tcp-port 4444 &
    "

# NO SE USA DOCKER COMPOSE EN ESTA INSTANCIA
# sudo curl -L https://github.com/docker/compose/releases/download/1.25.3/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
# sudo chmod +x /usr/local/bin/docker-compose
# se saca el agente
# *EL simbolo & al final del comando permite que el proceso se ejecute en segundo plano
# Validar con (ps aux | grep '[s]erver-agent') que el servicio está ejecutandose
# TODO: INICIAR DOCKER SIN DOCKER-COMPOSE (YA NO NECESITA VOLUMENES) (SE DEBEN PASAR LAS VARIABLES DE CONFIGURACION DE ENV)
# sudo docker run -d -p 3500:3500 --name fastapi
# TODO: ANIADIR MONITOR DE GCP.
# TODO: CAMBIAR LA IP DEL CONTENDEOR POR EL DEL BALANCEADOR

# AÑADIR TAGS A LA INSTANCIA
gcloud compute instances add-tags $INSTANCE_NAME --tags $MACHINE_TAG

# CREAR REGLA DE FIREWALL - PERFORMANCE
gcloud compute firewall-rules create $FIREWALL_RULE_VM1_1 \
    --direction=INGRESS \
    --priority=1000 \
    --network=default \
    --action=ALLOW \
    --rules=tcp:3500  \
    --source-ranges=0.0.0.0/0 \
    --target-tags=http-server

# CREAR REGLA DE FIREWALL - PERFORMANCE
gcloud compute firewall-rules create $FIREWALL_RULE_VM1_2 \
    --direction=INGRESS \
    --priority=1000 \
    --network=default \
    --action=ALLOW \
    --rules=tcp:4444  \
    --source-ranges=0.0.0.0/0 \
    --target-tags=http-server

# CREAR REGLA DE FIREWALL- NGINX
gcloud compute firewall-rules create $FIREWALL_RULE_VM1_3 \
    --direction=INGRESS \
    --priority=1000 \
    --network=default \
    --action=ALLOW \
    --rules=tcp:8080  \
    --source-ranges=0.0.0.0/0 \
    --target-tags=http-server

## ==================== INSTANCIA BATCH ====================

# CREAR INSTANCIA DE VM - PROCESOS DE BATCH
gcloud compute instances create $INSTANCE_NAME_BATCH \
    --project $PROJECT_ID \
    --machine-type $MACHINE_TYPE \
    --boot-disk-size $DISK_SIZE_MACHINE \
    --image $IMAGE \
    --zone $ZONE \
    --service-account $BUCKET_SA_EMAIL \
    --provisioning-model $INSTANCE_TYPE \
    --metadata=startup-script="#! /bin/bash
    sudo apt update && sudo apt install -y docker.io git python3 nfs-common
    sudo curl -L https://github.com/docker/compose/releases/download/1.25.3/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    git clone https://github.com/MISW-4204-Desarrollo-de-SW-en-la-nube/Proyecto-SW-Nube.git  nube
    cd nube
    sudo chmod -R 777 /nube
    sudo docker-compose build redis workertres
    "

# # ANIADIR TAGS A LA INSTANCIA
gcloud compute instances add-tags $INSTANCE_NAME_BATCH \
 --tags $MACHINE_TAG_BATCH

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

# # Autorizar la vm en las redes de la base de datos
gcloud sql instances patch $DB_INSTANCE_NAME \
    --authorized-networks=$(gcloud compute instances list --filter=name:$INSTANCE_NAME_BATCH --format='value(EXTERNAL_IP)'),$(gcloud compute instances list --filter=name:$INSTANCE_NAME --format='value(EXTERNAL_IP)') \
    --quiet

# # HACER PRUEBA DE CONEXION DE BASE DE DATOS DESDE LA INSTANCIA POR SSH
# # sudo apt-get install postgresql-client -y
# # psql --host=35.197.11.11 --port=5432 --username=postgres --password --dbname=db-test