
# CONFIGURAR EL ID DEL PROYECTO

gcloud config set core/project  misw-4204-cloud

## HABILITART EL API DE ARTIFACTS - CLOUD RUN 
gcloud services enable artifactregistry.googleapis.com  run.googleapis.com

## VIDEO
## https://www.youtube.com/watch?v=b-rg71O3ZwU&ab_channel=ContainerBytes
## GUIA 2 - Crear Artefactos
## https://medium.com/@abhinav.90444/title-pushing-artifacts-to-artifact-registry-a-step-by-step-guide-97f825242cfc
## GUIA 3 - Desplegar con Cloud Run
## https://medium.com/python-in-plain-english/deploy-your-apis-effortlessly-with-fastapi-docker-and-google-cloud-run-5c02c58dcb82
## GUIA 4 - Desplegar Cloud Run con code Build
## https://medium.com/google-cloud/deploying-containers-to-cloud-run-in-5mins-b03f1d8d4a64

## CREAR UN REPOSITORIO

gcloud artifacts repositories create hello \
    --project misw-4204-cloud \
    --repository-format docker \
    --location us-west1 \
    --description "Primer test"  

## JALAR LA IMAGEN DE DOCKER A USAR

docker pull nipoanz/fastapi-back:latest 


## ETIQUETAR LA IMAGEN

docker tag nipoanz/fastapi-back:latest us-west1-docker.pkg.dev/misw-4204-cloud/hello/fastapi-back:latest

## AUTENTICAR CON EL REPOSITORIO

gcloud auth configure-docker us-west1-docker.pkg.dev

## SUBIR LA IMAGEN

docker push us-west1-docker.pkg.dev/misw-4204-cloud/hello/fastapi-back:latest
# docker push $GCR_MULTI_REGION/$GCP_PROJECT_ID/$DOCKER_IMAGE_NAME

## CLOUD RUN

# con codigo fuente
# gcloud run deploy lab-cloud-run  --ingress all --region us-west1 --set-env-vars="var=value,var2=value2" --port 8080 --platform managed  --source . --allow-unauthenticated

# Con Container Registry
gcloud run deploy lab-cloud-run --image us-west1-docker.pkg.dev/misw-4204-cloud/hello/fastapi-back:latest  --ingress all --port 8080 --region us-west1 --platform managed --allow-unauthenticated 

## DESCRIBIR EL SERVICIO

gcloud run services describe lab-cloud-run1 --region us-west1


## OBTENER LA IP DEL SERVICIO

gcloud run services describe lab-cloud-run1 --region us-west1 --format='value(status.url)'


## Eliminar el servicio

gcloud run services delete lab-cloud-run --project misw-4204-cloud --region us-west1 --quiet


## Eliminar la imagen proveniente de Docker

docker rmi nipoanz/fastapi-back

## Eliminar la imagen proveniente de GCR

docker rmi us-west1-docker.pkg.dev/misw-4204-cloud/hello/fastapi-back:latest

## ! Eliminar la imagen almacenada en GCR
# gcloud container images delete us-west1-docker.pkg.dev/misw-4204-cloud/hello/fastapi-back:latest --force-delete-tags --quiet

## Eliminar el package

gcloud artifacts packages delete fastapi-back --repository hello --location us-west1 --project misw-4204-cloud --quiet

## ELIMINAR EL REPOSITORIO

gcloud artifacts repositories delete hello --project misw-4204-cloud --location us-west1 --quiet
