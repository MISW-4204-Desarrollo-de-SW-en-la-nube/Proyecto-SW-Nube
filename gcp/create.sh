#!/bin/bash

#valida que se pase el parametro de la contraseña
if [ -z "$1" ]; then
    echo "No se ingreso password"
    exit 1
fi

export PROJECT_ID="misw-4204-cloud"
export INSTANCE_NAME="web-server"
export INSTANCE_NAME_BATCH="worker"
export MACHINE_TYPE="e2-small"
export DISK_SIZE_MACHINE="10GB"
export IMAGE="projects/debian-cloud/global/images/debian-11-bullseye-v20240415" 
export REGION="us-west1"
export ZONE="us-west1-b"
export MACHINE_TAG="http-server,https-server"
export MACHINE_TAG_BATCH="bath-server"
export INSTANCE_TYPE="SPOT"
export FIREWALL_RULE_VM1_2="allow-perf-port"
export FIREWALL_RULE_VM1_3="allow-nginx-port"
export FIREWALL_RULE_VM2_4="allow-redis-port"
export FIREWALL_RULE_VM2_5="allow-celery-port"
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
# gsutil iam ch allUsers:objectViewer gs://$BUCKET_NAME

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
    --add-permissions storage.buckets.delete,storage.buckets.get,storage.buckets.list,storage.objects.get,storage.objects.list,storage.objects.create,storage.objects.delete,storage.objects.update

# CREAR CUENTA DE SERVICIO PARA PERMISOS DE STORAGE Y SQL
gcloud iam service-accounts create $BUCKET_SA_NAME \
    --description="Service account to access the storage bucket and database from the vm" \
    --display-name="Storage DB VM Admin Service Account"

# ASIGNAR ROL A CUENTA DE SERVICIO
# gcloud projects add-iam-policy-binding $PROJECT_ID \
#     --member=serviceAccount:$BUCKET_SA_EMAIL \
#     --role=projects/$PROJECT_ID/roles/$BUCKET_ROLE_ID
gcloud projects add-iam-policy-binding $PROJECT_ID --member=serviceAccount:$BUCKET_SA_EMAIL --role=roles/cloudsql.client
gcloud projects add-iam-policy-binding $PROJECT_ID --member=serviceAccount:$BUCKET_SA_EMAIL --role=roles/storage.objectViewer

# ## ==================== INSTANCIA DE BASE DE DATOS ====================

# ## CREAR INSTANCIA DE BASE DE DATOS
# gcloud sql instances create $DB_INSTANCE_NAME \
#     --database-version $POSTGRES_VERSION \
#     --root-password $DB_PWD \
#     --edition $DB_EDITION \
#     --zone $ZONE \
#     --storage-size $DATABASE_STORAGE_SIZE \
#     --no-storage-auto-increase \
#     --memory 3.75GB \
#     --cpu 1 \
#     --assign-ip \
#     --zone $ZONE

# ## ==================== BASE DE DATOS ====================

# # CREAR BASE DE DATOS
# gcloud sql databases create $DB_NAME \
#     --instance $DB_INSTANCE_NAME

# # ASIGNAR CONTRASENIA A USUARIO POR DEFECTO
# gcloud sql users set-password postgres \
#     --instance $DB_INSTANCE_NAME \
#     --password $DB_PWD

# ## ==================== CUENTA DE SERVICIO ====================

# # CREAR CUENTA DE SERVICIO PARA CONSUMIR EL SERVICIO DE LA BASE DE DATOS DESDE LA VM
# gcloud iam service-accounts create $DB_VM_SA_NAME \
#     --description="Service account to access the database from the VM" \
#     --display-name="DB VM Service Account"

# # AGREGAR LOS ROLES
# # gcloud projects add-iam-policy-binding  --member=serviceAccount:SERVICE_ACCOUNT_EMAIL --role=ROLE
# gcloud projects add-iam-policy-binding $PROJECT_ID --member=serviceAccount:$DB_VM_EMAIL --role=roles/cloudsql.client
# gcloud projects add-iam-policy-binding $PROJECT_ID --member=serviceAccount:$DB_VM_EMAIL --role=roles/storage.objectViewer

# ## ASOCIAR LA CUENTA DE SERVICIO A LA INSTANCIA DE VM (la instancia tiene que estar apagada - o crearla luego de)
# # gcloud compute instances set-service-account $INSTANCE_NAME \
# #     --service-account=$DB_VM_EMAIL \
# #     --zone=$ZONE

## ==================== INSTANCIA WEB (BACK) ====================

# CREAR INSTANCIA DE VM - BACK PRINCIPAL
gcloud compute instances create $INSTANCE_NAME \
    --project $PROJECT_ID \
    --machine-type $MACHINE_TYPE \
    --boot-disk-size $DISK_SIZE_MACHINE \
    --image $IMAGE \
    --zone $ZONE \
    --service-account $BUCKET_SA_EMAIL \
    --provisioning-model $INSTANCE_TYPE \
    --metadata=startup-script="#! /bin/bash
    sudo apt update && sudo apt install -y docker.io git python3 default-jre unzip
    sudo curl -L https://github.com/docker/compose/releases/download/1.25.3/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    git clone https://github.com/MISW-4204-Desarrollo-de-SW-en-la-nube/Proyecto-SW-Nube.git nube
    cd nube
    sudo chmod -R 777 /nube
    sudo docker-compose build fastapiback nginx
    sudo curl -L -o /tmp/ServerAgent-2.2.3.zip https://github.com/undera/perfmon-agent/releases/download/2.2.3/ServerAgent-2.2.3.zip
    sudo unzip -q /tmp/ServerAgent-2.2.3.zip  -d /server-agent && rm /tmp/ServerAgent-2.2.3.zip
    "
# TODO:  INICIALIZAR EL AGENTE DE PERFOMANCE
# sudo /server-agent/startAgent.sh
# TODO: INICIAR DOCKER SIN DOCKER-COMPOSE (YA NO NECESITA VOLUMENES) (SE DEBEN PASAR LAS VARIABLES DE CONFIGURACION DE ENV)
# sudo docker run -d -p 3500:3500 --name fastapi
# TODO: ANIADIR MONITOR DE GCP

# AÑADIR TAGS A LA INSTANCIA
gcloud compute instances add-tags $INSTANCE_NAME --tags $MACHINE_TAG

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

# # CREAR INSTANCIA DE VM - PROCESOS DE BATCH
# gcloud compute instances create $INSTANCE_NAME_BATCH \
#     --project $PROJECT_ID \
#     --machine-type $MACHINE_TYPE \
#     --boot-disk-size $DISK_SIZE_MACHINE \
#     --image $IMAGE \
#     --zone $ZONE \
#     --service-account $DB_VM_EMAIL \
#     --provisioning-model $INSTANCE_TYPE \
#     --metadata=startup-script="#! /bin/bash
#     sudo apt update && sudo apt install -y docker.io git python3 nfs-common
#     sudo curl -L https://github.com/docker/compose/releases/download/1.25.3/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
#     sudo chmod +x /usr/local/bin/docker-compose
#     git clone https://github.com/MISW-4204-Desarrollo-de-SW-en-la-nube/Proyecto-SW-Nube.git  nube
#     cd nube
#     sudo chmod -R 777 /nube
#     sudo docker-compose build redis workertres
#     "

# # AÑADIR TAGS A LA INSTANCIA
# gcloud compute instances add-tags $INSTANCE_NAME_BATCH \
#  --tags $MACHINE_TAG_BATCH

# # CREAR REGLA DE FIREWALL- REDIS
# gcloud compute firewall-rules create $FIREWALL_RULE_VM2_4 \
#     --direction=INGRESS \
#     --priority=1000 \
#     --network=default \
#     --action=ALLOW \
#     --rules=tcp:6379  \
#     --source-ranges=0.0.0.0/0 \
#     --target-tags=bath-server

# # CREAR REGLA DE FIREWALL- CELEERY
# gcloud compute firewall-rules create $FIREWALL_RULE_VM2_5 \
#     --direction=INGRESS \
#     --priority=1000 \
#     --network=default \
#     --action=ALLOW \
#     --rules=tcp:5556  \
#     --source-ranges=0.0.0.0/0 \
#     --target-tags=bath-server

# # Autorizar la vm en las redes de la base de datos
# gcloud sql instances patch $DB_INSTANCE_NAME \
#     --authorized-networks=$(gcloud compute instances list --filter=name:$INSTANCE_NAME_BATCH --format='value(EXTERNAL_IP)'),$(gcloud compute instances list --filter=name:$INSTANCE_NAME --format='value(EXTERNAL_IP)') \
#     --quiet
# # HACER PRUEBA DE CONEXION DE BASE DE DATOS DESDE LA INSTANCIA POR SSH
# # sudo apt-get install postgresql-client -y
# # psql --host=35.197.11.11 --port=5432 --username=postgres --password --dbname=db-test