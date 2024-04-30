#!/bin/bash

export PROJECT_ID="misw-4204-cloud"
export INSTANCE_NAME="web-server"
export INSTANCE_NAME_BATCH="worker"
export REGION="us-west1"
export ZONE="us-west1-b"
# TAGS DE BASE DE DATOS
export DB_INSTANCE_NAME="mv2-db"
export DB_NAME="db-test"
export FIREWALL_RULE_VM1_1="allow-http-port"
export FIREWALL_RULE_VM1_2="allow-perf-port"
export FIREWALL_RULE_VM1_3="allow-nginx-port"
export FIREWALL_RULE_VM2_4="allow-redis-port"
export FIREWALL_RULE_VM2_5="allow-celery-port"
# TAGS DE CUENTAS DE SERVICIO
export DB_VM_SA_NAME="db-vm-sa"
export DB_VM_DISPLAY_NAME="DB VM Service Account"
export DB_VM_EMAIL="$DB_VM_SA_NAME@$PROJECT_ID.iam.gserviceaccount.com"
# TAGS DEL SERVIDOR NFS
export NFS_INSTANCE_NAME="file-server"
export MACHINE_TAG_NFS="nfs-server"
# CLOUD STORAGE
BUCKET_NAME="misw-4204-storage-fpv-bucket"
BUCKET_ROLE_ID="custom.storage.admin"
BUCKET_ROLE_TITLE="Custom Storage Admin"
BUCKET_SA_NAME="storage-admin-sa"
BUCKET_SA_EMAIL="$BUCKET_SA_NAME@$PROJECT_ID.iam.gserviceaccount.com"


# ELIMINAR BUCKET
gsutil rm -r gs://$BUCKET_NAME

# ELIMINAR ROLES ASOCIADOS A LA CUENTA DE SERVICIO
gcloud projects remove-iam-policy-binding $PROJECT_ID \
    --member=serviceAccount:$BUCKET_SA_EMAIL \
    --role=projects/$PROJECT_ID/roles/$BUCKET_ROLE_ID --quiet

# REMOVER PERMISOS DEL ROL
gcloud iam roles update $BUCKET_ROLE_ID \
        --project $PROJECT_ID \
        --remove-permissions storage.buckets.delete,storage.buckets.get,storage.buckets.list,storage.objects.get,storage.objects.list,storage.objects.create,storage.objects.delete,storage.objects.update

# ELIMINAR ROL PERSONALIZADO
gcloud iam roles delete $BUCKET_ROLE_ID \
    --project $PROJECT_ID --quiet

# ELIMINAR CUENTA DE SERVICIO PARA EL BUCKET
gcloud iam service-accounts delete $BUCKET_SA_EMAIL --quiet



# # Eliminar cuenta de servicio

# # Eliminar instancia de NFS SERVER
# gcloud compute instances delete $NFS_INSTANCE_NAME \
#     --project $PROJECT_ID \
#     --zone $ZONE \
#     --quiet

# # Eliminar instancia de VM - BACKEND
# gcloud compute instances delete $INSTANCE_NAME \
#     --project $PROJECT_ID \
#     --zone $ZONE \
#     --quiet

# # Eliminar instancia de VM - BATCH
# gcloud compute instances delete $INSTANCE_NAME_BATCH \
#     --project $PROJECT_ID \
#     --zone $ZONE \
#     --quiet

# # Eliminar regla de firewall
# gcloud compute firewall-rules delete $FIREWALL_RULE_VM1_1 \
#     --project $PROJECT_ID \
#     --quiet
# gcloud compute firewall-rules delete $FIREWALL_RULE_VM1_2 \
#     --project $PROJECT_ID \
#     --quiet
# gcloud compute firewall-rules delete $FIREWALL_RULE_VM1_3 \
#     --project $PROJECT_ID \
#     --quiet
# gcloud compute firewall-rules delete $FIREWALL_RULE_VM2_4 \
#     --project $PROJECT_ID \
#     --quiet
# gcloud compute firewall-rules delete $FIREWALL_RULE_VM2_5 \
#     --project $PROJECT_ID \
#     --quiet

# # Eliminar base de datos
# gcloud sql databases delete $DB_NAME \
#     --project $PROJECT_ID \
#     --instance=$DB_INSTANCE_NAME \
#     --quiet

# # Eliminar instancia de base de datos
# gcloud sql instances delete $DB_INSTANCE_NAME \
#     --project $PROJECT_ID \
#     --quiet

# # Eliminar ROLES ASOCIADOS A LA CUENTA DE SERVICIO
# gcloud projects remove-iam-policy-binding $PROJECT_ID \
#     --member=serviceAccount:$DB_VM_EMAIL \
#     --role=roles/cloudsql.client --quiet
# gcloud projects remove-iam-policy-binding $PROJECT_ID \
#     --member=serviceAccount:$DB_VM_EMAIL \
#     --role=roles/storage.objectViewer --quiet


# # Eliminar CUENTA DE SERVICIO QUE PERMITE CONECTAR A LA BASE DE DATOS
# gcloud iam service-accounts delete $DB_VM_EMAIL --quiet