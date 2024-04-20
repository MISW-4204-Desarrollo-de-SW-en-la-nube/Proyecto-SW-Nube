#!/bin/bash

export PROJECT_ID="misw-4204-cloud"
export INSTANCE_NAME="mv1-backend"
export INSTANCE_NAME_BATCH="mv3-batch"
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
export NFS_INSTANCE_NAME="mv4-nfs"
export MACHINE_TAG_NFS="nfs-server"

# Eliminar instancia de NFS SERVER
gcloud compute instances delete $NFS_INSTANCE_NAME \
    --project $PROJECT_ID \
    --zone $ZONE \
    --quiet

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
# gcloud compute firewall-rules delete $FIREWALL_RULE_VM1_1 --quiet
# gcloud compute firewall-rules delete $FIREWALL_RULE_VM1_2 --quiet
# gcloud compute firewall-rules delete $FIREWALL_RULE_VM1_3 --quiet
# gcloud compute firewall-rules delete $FIREWALL_RULE_VM2_4 --quiet
# gcloud compute firewall-rules delete $FIREWALL_RULE_VM2_5 --quiet

# # Eliminar base de datos
# gcloud sql databases delete $DB_NAME \
#     --instance=$DB_INSTANCE_NAME --quiet

# # Eliminar instancia de base de datos
# gcloud sql instances delete $DB_INSTANCE_NAME --quiet

# # Eliminar ROLES ASOCIADOS A LA CUENTA DE SERVICIO
# gcloud projects remove-iam-policy-binding $PROJECT_ID \
#     --member=serviceAccount:$DB_VM_EMAIL \
#     --role=roles/cloudsql.client --quiet
# gcloud projects remove-iam-policy-binding $PROJECT_ID \
#     --member=serviceAccount:$DB_VM_EMAIL \
#     --role=roles/storage.objectViewer --quiet


# # Eliminar CUENTA DE SERVICIO QUE PERMITE CONECTAR A LA BASE DE DATOS
# gcloud iam service-accounts delete $DB_VM_EMAIL --quiet