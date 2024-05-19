#!/bin/bash

PROJECT_ID="misw-4204-cloud"
REGION="us-west1"
# ZONE="us-west1-b"
# TAGS DE BASE DE DATOS
DB_INSTANCE_NAME="mv2-db"
DB_NAME="db-test"
# CLOUD STORAGE - TAGS DE CUENTAS DE SERVICIO
BUCKET_NAME="$PROJECT_ID-storage-fpv-bucket"
BUCKET_ROLE_ID="custom.storage.admin"
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
## VPC PEERING
VPC_PEERING_NAME="google-managed-services-default"
VPC_CONNECTOR_NAME="fpv-connector"


## =======================================================
## =================== CLOUD RUN =========================
## =======================================================

gcloud run services delete $WEB_APP_NAME \
    --project $PROJECT_ID \
    --region $REGION \
    --quiet

# gcloud run services delete $BATCH_APP_NAME \
#     --project $PROJECT_ID \
#     --region $REGION \
#     --quiet

#Eliminar imagenes de docker

docker rmi $DOCKER_WEB_IMAGE

# docker rmi $DOCKER_BATCH_IMAGE

#Eliminar imagenes de GCR

docker rmi $REGION-docker.pkg.dev/$PROJECT_ID/$WEB_REPOSITORY_NAME/$WEB_IMAGE

# docker rmi $REGION-docker.pkg.dev/$PROJECT_ID/$BATCH_REPOSITORY_NAME/$BATCH_IMAGE

#Eliminar repositorios de artefactos
gcloud artifacts repositories delete $WEB_REPOSITORY_NAME \
    --project $PROJECT_ID \
    --location $REGION \
    --quiet

# gcloud artifacts repositories delete $BATCH_REPOSITORY_NAME \
#     --project $PROJECT_ID \
#     --location $REGION \
#     --quiet

## =======================================================
## =================== VPC PEERING =======================
## =======================================================

# ELIMINAR CONECTOR DE VPC
gcloud compute networks vpc-access connectors delete $VPC_CONNECTOR_NAME \
    --region $REGION \
    --quiet

cloud compute addresses delete $VPC_PEERING_NAME \
    --region $REGION \
    --quiet


## =======================================================
## ====================== BUCKET =========================
## =======================================================

# ELIMINAR BUCKET
gsutil rm -r gs://$BUCKET_NAME

# DELETE SUBSCRIPTION
# gcloud pubsub subscriptions delete misw-4204-cloud-topic-fpv-task-subscription --project  misw-4204-cloud --quiet
gcloud pubsub subscriptions delete $TOPIC_NAME_SUBSCRIPTION \
    --project $PROJECT_ID \
    --quiet

# ELIMINAR PUBSUB TOPIC
# gcloud pubsub topics delete misw-4204-cloud-topic-fpv-task --project misw-4204-cloud --quiet
gcloud pubsub topics delete $TOPIC_NAME --project $PROJECT_ID --quiet

# ELIMINAR PUBSUB ERROR TOPIC
# gcloud pubsub topics delete misw-4204-cloud-topic-fpv-task-dead-letter --project misw-4204-cloud --quiet
gcloud pubsub topics delete $FAIL_TOPIC_NAME --project $PROJECT_ID --quiet

# ELIMINAR ROLES ASOCIADOS A LA CUENTA DE SERVICIO
gcloud projects remove-iam-policy-binding $PROJECT_ID \
    --member=serviceAccount:$BUCKET_SA_EMAIL \
    --role=projects/$PROJECT_ID/roles/$BUCKET_ROLE_ID --quiet
# Eliminar ROLES ASOCIADOS A LA CUENTA DE SERVICIO
gcloud projects remove-iam-policy-binding $PROJECT_ID \
    --member=serviceAccount:$BUCKET_SA_EMAIL \
    --role=roles/cloudsql.client --quiet
gcloud projects remove-iam-policy-binding $PROJECT_ID \
    --member=serviceAccount:$BUCKET_SA_EMAIL \
    --role=roles/storage.objectViewer --quiet
gcloud projects remove-iam-policy-binding $PROJECT_ID \
    --member=serviceAccount:$BUCKET_SA_EMAIL \
    --role=roles/storage.admin --quiet
gcloud projects remove-iam-policy-binding $PROJECT_ID \
    --member=serviceAccount:$BUCKET_SA_EMAIL \
    --role=roles/logging.admin --quiet
gcloud projects remove-iam-policy-binding $PROJECT_ID \
    --member=serviceAccount:$BUCKET_SA_EMAIL \
    --role=roles/cloudsql.editor --quiet
gcloud projects remove-iam-policy-binding $PROJECT_ID \
    --member=serviceAccount:$BUCKET_SA_EMAIL \
    --role=roles/pubsub.admin --quiet

# REMOVER PERMISOS DEL ROL
gcloud iam roles update $BUCKET_ROLE_ID \
        --project $PROJECT_ID \
        --remove-permissions storage.buckets.delete,storage.buckets.get,storage.buckets.list,storage.objects.get,storage.objects.list,storage.objects.create,storage.objects.delete,storage.objects.update

# ELIMINAR ROL PERSONALIZADO
gcloud iam roles delete $BUCKET_ROLE_ID \
    --project $PROJECT_ID --quiet


# ELIMINAR CUENTA DE SERVICIO PARA EL BUCKET
gcloud iam service-accounts delete $BUCKET_SA_EMAIL --quiet

 
 
## =======================================================
## =======================================================
## =======================================================
## ==================== BASE DE DATOS ====================

# Eliminar base de datos
gcloud sql databases delete $DB_NAME \
    --project $PROJECT_ID \
    --instance=$DB_INSTANCE_NAME \
    --quiet

# Eliminar instancia de base de datos
gcloud sql instances delete $DB_INSTANCE_NAME \
    --project $PROJECT_ID \
    --quiet
