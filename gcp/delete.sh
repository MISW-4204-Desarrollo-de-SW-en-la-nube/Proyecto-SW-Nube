#!/bin/bash

PROJECT_ID="misw-4204-cloud"
REGION="us-west1"
ZONE="us-west1-b"
# TAGS DE BASE DE DATOS
DB_INSTANCE_NAME="mv2-db"
DB_NAME="db-test"
# CLOUD STORAGE - TAGS DE CUENTAS DE SERVICIO
BUCKET_NAME="$PROJECT_ID-storage-fpv-bucket"
BUCKET_ROLE_ID="custom.storage.admin"
BUCKET_SA_NAME="storage-admin-sa"
BUCKET_SA_EMAIL="$BUCKET_SA_NAME@$PROJECT_ID.iam.gserviceaccount.com"
# TEMPLATE - INSTANCIA BATCH
INSTANCE_NAME_BATCH_TEMPLATE="batch-server-template"
FIREWALL_RULE_BATCH_TEMPLATE="fw-allow-health-check-batch"
HEALTH_CHECK_VM_BATCH="http-check-vm-batch"
INSTANCE_BATCH_SERVER_GROUP="batch-server-instance-group"

# TEMPLATE - INSTANCIA WEB (BACK)
INSTANCE_NAME_TEMPLATE="web-server-template"
FIREWALL_RULE_TEMPLATE="fw-allow-health-check"
HEALTH_CHECK_VM="http-check-vm"
INSTANCE_WEB_SERVER_GROUP="web-server-instance-group"
LB_IP_NAME="lb-ipv4-1"
HEALTH_CHECK_LB="http-lb-check"
BACKEND_SERVICE_NAME="web-backend-service"
URL_MAP_NAME="web-server-map-http"
TARGET_PROXY_NAME="http-server-lb-proxy"
FORWARDING_RULE_NAME="http-server-forward-rule"
# PUBSUB
TOPIC_NAME="$PROJECT_ID-topic-fpv-task"
TOPIC_NAME_SUBSCRIPTION="$TOPIC_NAME-subscription"
FAIL_TOPIC_NAME="$TOPIC_NAME-dead-letter"

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

# EKIMINAR REGLAS DEL FIREWALL
gcloud compute forwarding-rules delete $FORWARDING_RULE_NAME \
    --project $PROJECT_ID \
    --global \
    --quiet

# ELIMINAR TARGET PROXY
gcloud compute target-http-proxies delete $TARGET_PROXY_NAME \
    --project $PROJECT_ID \
    --quiet

# ELIMINAR URL MAP
gcloud compute url-maps delete $URL_MAP_NAME \
    --project $PROJECT_ID \
    --quiet

# REMOVER SERVICIO BACKEND
gcloud compute backend-services remove-backend $BACKEND_SERVICE_NAME \
    --project $PROJECT_ID \
    --instance-group $INSTANCE_WEB_SERVER_GROUP \
    --instance-group-region $REGION \
    --global \
    --quiet


# ELIMINAR SERVICIO BACK
gcloud compute backend-services delete $BACKEND_SERVICE_NAME \
    --project $PROJECT_ID \
    --global \
    --quiet

# ELIMINAR HEALTH CHECK
gcloud compute health-checks delete $HEALTH_CHECK_LB \
    --project $PROJECT_ID \
    --quiet

# ELIMINAR IP DEL LB
gcloud compute addresses delete $LB_IP_NAME \
    --project $PROJECT_ID \
    --global \
    --quiet

# ELIMINAR INSTANCIA DE GRUPO
gcloud compute instance-groups managed delete $INSTANCE_WEB_SERVER_GROUP \
    --project $PROJECT_ID \
    --region $REGION \
    --quiet

# ELIMINAR HEALTH CHECK DE VM
gcloud compute health-checks delete $HEALTH_CHECK_VM \
    --project $PROJECT_ID \
    --region $REGION \
    --quiet

# ELIMINAR REGLA DE FIREWALL
gcloud compute firewall-rules delete $FIREWALL_RULE_TEMPLATE \
    --project $PROJECT_ID \
    --quiet

# ELIMINAR INSTANCIA DE GRUPO
gcloud compute instance-templates delete $INSTANCE_NAME_TEMPLATE \
    --project $PROJECT_ID \
    --region $REGION \
    --quiet

## =======================================================
## =======================================================
## =======================================================
## =======================================================
## ==================== INSTANCIA BATCH ====================

# ELIMINAR INSTANCIA DE GRUPO
gcloud compute instance-groups managed delete $INSTANCE_BATCH_SERVER_GROUP \
    --project $PROJECT_ID \
    --region $REGION \
    --quiet

# REMOVER SERVICIO BACKEND
gcloud compute backend-services remove-backend $BACKEND_SERVICE_NAME \
    --project $PROJECT_ID \
    --instance-group $INSTANCE_WEB_SERVER_GROUP \
    --instance-group-region $REGION \
    --global \
    --quiet

# ELIMINAR INSTANCIA DE GRUPO
gcloud compute instance-templates delete $INSTANCE_NAME_BATCH_TEMPLATE \
    --project $PROJECT_ID \
    --region $REGION \
    --quiet

# ELIMINAR REGLA DE FIREWALL
gcloud compute firewall-rules delete $FIREWALL_RULE_BATCH_TEMPLATE \
    --project $PROJECT_ID \
    --quiet

# ELIMINAR HEALTH CHECK DE VM
gcloud compute health-checks delete $HEALTH_CHECK_VM_BATCH \
    --project $PROJECT_ID \
    --region $REGION \
    --quiet

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
