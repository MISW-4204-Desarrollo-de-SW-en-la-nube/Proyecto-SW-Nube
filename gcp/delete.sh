#!/bin/bash

export PROJECT_ID="misw-4204-cloud"
# export INSTANCE_NAME="web-server"
INSTANCE_NAME_BATCH="worker"
REGION="us-west1"
ZONE="us-west1-b"
# TAGS DE BASE DE DATOS
DB_INSTANCE_NAME="mv2-db"
DB_NAME="db-test"
# FIREWALL_RULE_VM1_1="allow-fastapi-port"
# FIREWALL_RULE_VM1_2="allow-perf-port"
# FIREWALL_RULE_VM1_3="allow-nginx-port"
FIREWALL_RULE_VM2_4="allow-redis-port"
FIREWALL_RULE_VM2_5="allow-celery-port"
# CLOUD STORAGE - TAGS DE CUENTAS DE SERVICIO
BUCKET_NAME="misw-4204-storage-fpv-bucket"
BUCKET_ROLE_ID="custom.storage.admin"
BUCKET_SA_NAME="storage-admin-sa"
BUCKET_SA_EMAIL="$BUCKET_SA_NAME@$PROJECT_ID.iam.gserviceaccount.com"
# TEMPLATE - INSTANCIA WEB (BACK)
INSTANCE_NAME_TEMPLATE="web-server-template"
FIREWALL_RULE_TEMPLATE="fw-allow-health-check"
HEALTH_CHECK_VM="http-check-vm"
INSTANCE_WEB_SERVER_GROUP="web-server-instance-group"
ZONE_INSTANCE_GROUP="us-west1-c"
LB_IP_NAME="lb-ipv4-1"
HEALTH_CHECK_LB="http-lb-check"
BACKEND_SERVICE_NAME="web-backend-service"
URL_MAP_NAME="web-server-map-http"
TARGET_PROXY_NAME="http-server-lb-proxy"
FORWARDING_RULE_NAME="http-server-forward-rule"

# ELIMINAR BUCKET
gsutil rm -r gs://$BUCKET_NAME

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


# REMOVER PERMISOS DEL ROL
gcloud iam roles update $BUCKET_ROLE_ID \
        --project $PROJECT_ID \
        --remove-permissions storage.buckets.delete,storage.buckets.get,storage.buckets.list,storage.objects.get,storage.objects.list,storage.objects.create,storage.objects.delete,storage.objects.update

# ELIMINAR ROL PERSONALIZADO
gcloud iam roles delete $BUCKET_ROLE_ID \
    --project $PROJECT_ID --quiet


# ELIMINAR CUENTA DE SERVICIO PARA EL BUCKET
gcloud iam service-accounts delete $BUCKET_SA_EMAIL --quiet

# Eliminar instancia de VM - BACKEND
# gcloud compute instances delete $INSTANCE_NAME \
#     --project $PROJECT_ID \
#     --zone $ZONE \
#     --quiet

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
    --instance-group-zone $ZONE_INSTANCE_GROUP \
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
    --zone $ZONE_INSTANCE_GROUP \
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

# # Eliminar instancia de VM - BATCH
gcloud compute instances delete $INSTANCE_NAME_BATCH \
    --project $PROJECT_ID \
    --zone $ZONE \
    --quiet

# Eliminar regla de firewall
# gcloud compute firewall-rules delete $FIREWALL_RULE_VM1_1 \
#     --project $PROJECT_ID \
#     --quiet
# gcloud compute firewall-rules delete $FIREWALL_RULE_VM1_2 \
#     --project $PROJECT_ID \
#     --quiet
# gcloud compute firewall-rules delete $FIREWALL_RULE_VM1_3 \
#     --project $PROJECT_ID \
#     --quiet
gcloud compute firewall-rules delete $FIREWALL_RULE_VM2_4 \
    --project $PROJECT_ID \
    --quiet
gcloud compute firewall-rules delete $FIREWALL_RULE_VM2_5 \
    --project $PROJECT_ID \
    --quiet

# Eliminar base de datos
gcloud sql databases delete $DB_NAME \
    --project $PROJECT_ID \
    --instance=$DB_INSTANCE_NAME \
    --quiet

# Eliminar instancia de base de datos
gcloud sql instances delete $DB_INSTANCE_NAME \
    --project $PROJECT_ID \
    --quiet
