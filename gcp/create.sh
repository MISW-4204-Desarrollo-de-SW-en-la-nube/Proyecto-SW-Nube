#!/bin/bash

#valida que se pase el parametro de la contraseña
if [ -z "$1" ]; then
    echo "No se ingreso password"
    exit 1
fi

PROJECT_ID="misw-4204-cloud"
# INSTANCE_NAME="web-server"
# INSTANCE_NAME_BATCH="worker"
# MACHINE_TYPE="e2-small"
# IMAGE="projects/debian-cloud/global/images/debian-11-bullseye-v20240415"
REGION="us-west1"
ZONE="us-west1-b"
# INSTANCE_TYPE="SPOT"
## ==================== INSTANCIA WEB (BACK) ====================
# TAGS DE INSTANCIA WEB (BACK)
# MACHINE_TAG_TEMPLATE="http-server,https-server,lb-health-check,allow-health-check"
# TAGS DE BASE DE DATOS
DB_INSTANCE_NAME="mv2-db"
POSTGRES_VERSION="POSTGRES_15"
DB_PWD=$1
DB_USER="postgres"
DB_EDITION="enterprise"
DATABASE_STORAGE_SIZE="10GB"
DB_NAME="db-test"
# CLOUD STORAGE - TAGS DE CUENTAS DE SERVICIO
BUCKET_NAME="$PROJECT_ID-storage-fpv-bucket"
BUCKET_ROLE_ID="custom.storage.admin"
BUCKET_ROLE_TITLE="Custom Storage Admin"
BUCKET_SA_NAME="storage-admin-sa"
BUCKET_SA_EMAIL="$BUCKET_SA_NAME@$PROJECT_ID.iam.gserviceaccount.com"
# PUBSUB
TOPIC_NAME="$PROJECT_ID-topic-fpv-task"
TOPIC_NAME_SUBSCRIPTION="$TOPIC_NAME-subscription"
FAIL_TOPIC_NAME="$TOPIC_NAME-dead-letter"
## REPOSITORIO DE ARTIFACTOS
WEB_REPOSITORY_NAME="fpv-web-repository"
BATCH_REPOSITORY_NAME="fpv-batch-repository"
## IMAGENES DOCKER
WEB_IMAGE="fastapi-back:latest"
BATCH_IMAGE="worker-fpv:latest"
DOCKER_WEB_IMAGE="nipoanz/$WEB_IMAGE"
DOCKER_BATCH_IMAGE="nipoanz/$BATCH_IMAGE"
## CLOUD RUN APSS
WEB_APP_NAME="web-app"
BATCH_APP_NAME="batch-app"
PORT_WEB="8081"
PORT_BATCH="5555"
## VPC PEERING
VPC_PEERING_NAME="google-managed-services-default"
VPC_CONNECTOR_NAME="fpv-connector"



## VALIDAR QUE EXISTE UN PROYECTO
EXISTING_PROJECT=$(gcloud projects describe $PROJECT_ID 2>&1)
if [[ $EXISTING_PROJECT == *"NOT_FOUND"* ]]; then
    echo "El proyecto no existe"
    exit 1
fi

# CONFIGURAR PROYECTO Y ZONA
gcloud auth list
gcloud config list project
gcloud config set project $PROJECT_ID
gcloud config set core/project $PROJECT_ID
#gcloud compute project-info describe --project $(gcloud config get-value project)
gcloud config set compute/region $REGION
gcloud config set compute/zone $ZONE
echo -e "PROJECT ID: $PROJECT_ID\nZONE: $ZONE"

## ==================== HABILITAR EL API DE VPC ====================

gcloud services enable servicenetworking.googleapis.com compute.googleapis.com vpcaccess.googleapis.com

## ==================== CLOUD STORAGE ====================

# HABILITAR API DE STORAGE
gcloud services enable storage-component.googleapis.com

# CREAR BUCKET
gsutil mb -l $REGION gs://$BUCKET_NAME

# # AGREGAR PERMISOS DE LECTURA A TODOS LOS USUARIOS
gsutil iam ch allUsers:objectViewer gs://$BUCKET_NAME

# ## ==================== PUBSUB ====================

# HABILITAR API DE PUBSUB
gcloud services enable pubsub.googleapis.com

# # CREAR TOPIC
# gcloud pubsub topics create misw-4204-cloud-topic-fpv-task
gcloud pubsub topics create $TOPIC_NAME

# # CREAR DEAD LETTER TOPIC
# gcloud pubsub topics create misw-4204-cloud-topic-fpv-task-dead-letter
gcloud pubsub topics create $FAIL_TOPIC_NAME

# # GET ALL TOPICS LIST
gcloud pubsub topics list

# # CREATE SUBSCRIPTION
# gcloud pubsub subscriptions create misw-4204-cloud-topic-fpv-task-subscription --topic misw-4204-cloud-topic-fpv-task  --max-delivery-attempts 5 --dead-letter-topic misw-4204-cloud-topic-fpv-task-dead-letter
gcloud pubsub subscriptions create $TOPIC_NAME_SUBSCRIPTION \
    --topic $TOPIC_NAME \
    --max-delivery-attempts 5 \
    --dead-letter-topic $FAIL_TOPIC_NAME


# # GET ALL SUBSCRIPTIONS LIST
gcloud pubsub subscriptions list

# # PUBLISH MESSAGE
# gcloud pubsub topics publish misw-4204-cloud-topic-fpv-task --message "Hello, World!" 
# gcloud pubsub topics publish $TOPIC_NAME --message "Hello, World!"

# #GET SUBSCRIPTION MESSAGES
# gcloud pubsub subscriptions pull misw-4204-cloud-topic-fpv-task-subscription --auto-ack
#gcloud pubsub subscriptions pull $TOPIC_NAME_SUBSCRIPTION --auto-ack

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
gcloud projects add-iam-policy-binding $PROJECT_ID --member=serviceAccount:$BUCKET_SA_EMAIL --role=roles/pubsub.admin

# ## ==================== CREAR RANDO IP PARA LA INSTANCIA ====================


gcloud compute addresses create $VPC_PEERING_NAME \
    --global \
    --purpose=VPC_PEERING \
    --prefix-length 16 \
    --description "peering range for Google" \
    --network default

gcloud services vpc-peerings connect --service=servicenetworking.googleapis.com \
    --ranges $VPC_PEERING_NAME \
    --network default \
    --project $PROJECT_ID

# ## ==================== INSTANCIA DE BASE DE DATOS ====================

# HABILITAR API DE SQL
gcloud services enable sql-component.googleapis.com

## CREAR INSTANCIA DE BASE DE DATOS
gcloud sql instances create $DB_INSTANCE_NAME \
    --database-version $POSTGRES_VERSION \
    --root-password $DB_PWD \
    --edition $DB_EDITION \
    --region $REGION \
    --storage-size $DATABASE_STORAGE_SIZE \
    --enable-private-service-connec \
    --no-storage-auto-increase \
    --memory 3.75GB \
    --cpu 1 \
    --no-assign-ip \
    --network default

## SOLO CONEXIONES SEGURAS
# gcloud sql instances patch $DB_INSTANCE_NAME --require-ssl

## Crear el conector de VPC

gcloud compute networks vpc-access connectors create $VPC_CONNECTOR_NAME \
    --region $REGION \
    --range $VPC_PEERING_NAME \
    --network default \
    --range "10.8.0.0"

# ## ==================== BASE DE DATOS ====================

# CREAR BASE DE DATOS
gcloud sql databases create $DB_NAME \
    --instance $DB_INSTANCE_NAME

# ASIGNAR CONTRASENIA A USUARIO POR DEFECTO
gcloud sql users set-password $DB_USER \
    --instance $DB_INSTANCE_NAME \
    --password $DB_PWD

# OBTENER IP DE LA BASE DE DATOS
# DB_IP=$(gcloud sql instances describe $DB_INSTANCE_NAME --format='value(ipAddresses.ipAddress)' | cut -d';' -f1)

# OBTENER EL API PRIVADA DE LA BASE DE DATOS
# DB_CONNECTION_NAME=$(gcloud sql instances describe $DB_INSTANCE_NAME --format='value(connectionName)')

DB_CONNECTION_URL="postgresql://$DB_USER:$DB_PWD@127.0.0.1:5432/$DB_NAME"
echo "DB CONNECTION URL: $DB_CONNECTION_URL"

## ==================== CONEXIONES DE BASE DE DATOS ====================

CONECTION_NAME=$(gcloud sql instances describe $DB_INSTANCE_NAME --format='value(connectionName)')
echo "CONNECTION NAME: $CONECTION_NAME"

## ==================== AUTORIZAR CONEXIONES A BASE DE DATOS ====================

# SE DEJA ABIERTO PARA PRUEBAS
# gcloud sql instances patch $DB_INSTANCE_NAME \
#     --authorized-networks="0.0.0.0/0" \
#     --quiet

# gcloud sql instances patch mv2-db --authorized-networks=$(curl ifconfig.me.)  --quiet

# # HACER PRUEBA DE CONEXION DE BASE DE DATOS DESDE LA INSTANCIA POR SSH
# # sudo apt-get install postgresql-client -y
# # psql --host=35.197.11.11 --port=5432 --username=postgres --password --dbname=db-test


## ======================  HABILITAR SERVICIO DE ARTIFACT ===================

gcloud services enable artifactregistry.googleapis.com  run.googleapis.com

## ======================  CREAR REPOSITORIO ===================

gcloud artifacts repositories create $WEB_REPOSITORY_NAME \
    --project $PROJECT_ID \
    --repository-format docker \
    --location $REGION \
    --description "Repositorio de artefactos para la aplicacion web"

# gcloud artifacts repositories create $BATCH_REPOSITORY_NAME \
#     --project $PROJECT_ID \
#     --repository-format docker \
#     --location $REGION \
#     --description "Repositorio de artefactos para la aplicacion batch"

## ======================  JALAR LA IMAGEN DE DOCKER A USAR ===================

docker pull $DOCKER_WEB_IMAGE

# docker push $DOCKER_BATCH_IMAGE

## ======================  ETIQUETAR LA IMAGEN ===================

docker tag $DOCKER_WEB_IMAGE $REGION-docker.pkg.dev/$PROJECT_ID/$WEB_REPOSITORY_NAME/$WEB_IMAGE

# docker tag $DOCKER_BATCH_IMAGE $REGION-docker.pkg.dev/$PROJECT_ID/$BATCH_REPOSITORY_NAME/$BATCH_IMAGE

## ======================  AUTENTICAR CON EL REPOSITORIO ===================

gcloud auth configure-docker $REGION-docker.pkg.dev --quiet

## ======================  SUBIR LA IMAGEN ===================

docker push $REGION-docker.pkg.dev/$PROJECT_ID/$WEB_REPOSITORY_NAME/$WEB_IMAGE

# docker push $REGION-docker.pkg.dev/$PROJECT_ID/$BATCH_REPOSITORY_NAME/$BATCH_IMAGE

## ======================  CLOUD RUN ===================

INSTANCE_UNIX_SOCKET="/cloudsql/$CONECTION_NAME"
echo "INSTANCE UNIX SOCKET: $INSTANCE_UNIX_SOCKET"
echo "Instance db user: $DB_USER"
echo "Instance db password: $DB_PWD"
echo "Instance db name: $DB_NAME"

gcloud run deploy $WEB_APP_NAME \
    --project $PROJECT_ID \
    --image $REGION-docker.pkg.dev/$PROJECT_ID/$WEB_REPOSITORY_NAME/$WEB_IMAGE  \
    --ingress all \
    --port $PORT_WEB \
    --region $REGION \
    --platform managed \
    --set-env-vars "INSTANCE_HOST=" \
    --set-env-vars "DB_USER=$DB_USER" \
    --set-env-vars "DB_PASS=$DB_PWD" \
    --set-env-vars "DB_NAME=$DB_NAME" \
    --set-env-vars "DB_PORT=5432" \
    --set-env-vars "INSTANCE_CONNECTION_NAME=$CONECTION_NAME" \
    --set-env-vars "SECRET_KEY=supreSecretKey123" \
    --set-env-vars "DEBUG=False" \
    --set-env-vars "BUCKET_NAME=$BUCKET_NAME" \
    --set-env-vars "TOPIC_NAME=$TOPIC_NAME" \
    --service-account $BUCKET_SA_EMAIL \
    --tag http-web-server \
    --description "Servicios api rest - capa web" \
    --cpu 2 \
    --memory 3.75Gi \
    --add-cloudsql-instances $CONECTION_NAME \
    --vpc-egress=all-traffic \
    --vpc-connector $VPC_CONNECTOR_NAME \
    --allow-unauthenticated 


# gcloud run deploy $BATCH_APP_NAME \
#     --image $REGION-docker.pkg.dev/$PROJECT_ID/$BATCH_REPOSITORY_NAME/$BATCH_IMAGE  \
#     --ingress all \
#     --port $PORT_BATCH \
#     --region us-west1 \
#     --platform managed \
#     --set-env-vars "DEBUG=False" \
#     --set-env-vars "DB_URL=$DB_CONNECTION_URL" \
#     --set-env-vars "BUCKET_NAME=$BUCKET_NAME" \
#     --set-env-vars "SUBSCRIPTION_ID=$TOPIC_NAME_SUBSCRIPTION" \
#     --set-env-vars "PROJECT_ID=$PROJECT_ID" \
#     --service-account $BUCKET_SA_EMAIL \
#     --tag http-batch-server \
#     --description "Servicio de procesamiento de tareas en segundo plano - capa batch" \
#     --add-cloudsql-instances $DB_INSTANCE_NAME \
#     --allow-unauthenticated

## ======================  DESCRIBIR EL SERVICIO ===================

# gcloud run services describe $WEB_APP_NAME --region $REGION
# gcloud run services describe $BATCH_APP_NAME --region $REGION

## ======================  OBTENER LA IP DEL SERVICIO ===================

WEB_APP_URL=$(gcloud run services describe $WEB_APP_NAME --region $REGION --format='value(status.url)')
# BATCH_APP_URL=$(gcloud run services describe $BATCH_APP_NAME --region $REGION --format='value(status.url)')

echo "WEB APP URL: $WEB_APP_URL"
# echo "BATCH APP URL: $BATCH_APP_URL"
