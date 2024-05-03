# Use the official Python image from the Docker Hub
FROM google/cloud-sdk:474.0.0-alpine
# FROM python:3.11.9-alpine

# set work directory
WORKDIR /app

RUN apk add --update py-pip
RUN pip --version

#  Install the required dependencies
RUN pip install --upgrade pip --break-system-packages
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir --upgrade -r requirements.txt --break-system-packages

# Instalar psycopg2 para interactuar con PostgreSQL
# RUN apk add --no-cache postgresql-libs openjdk11 curl unzip nano nginx supervisor && \
RUN apk add --no-cache postgresql-libs curl unzip nano nginx supervisor && \
    apk add --no-cache --virtual .build-deps gcc musl-dev postgresql-dev && \
    pip install psycopg2-binary --break-system-packages && \    
    apk --purge del .build-deps

# INSTALAR GOOGLE CLOUD SDK
# RUN curl -O https://dl.google.com/dl/cloudsdk/channels/rapid/downloads/google-cloud-cli-471.0.0-linux-x86_64.tar.gz && \
#     tar zxvf google-cloud-cli-471.0.0-linux-x86_64.tar.gz && \
#     ./google-cloud-sdk/install.sh --quiet && \
#     rm google-cloud-cli-471.0.0-linux-x86_64.tar.gz

# CONFIGURAR EL PATH DE GOOGLE CLOUD SDK
# ENV PATH="/app/google-cloud-sdk/bin:$PATH"

# IAGEN DE EJEMPLO
RUN curl https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/800px-Ada_Lovelace_portrait.jpg --output ada.jpg
# VARLIDAR USO DE gsutil subiendo la imagen a un bucket
# RUN gsutil cp ada.jpg gs://bucket-ada-lovelace

# INSTALAR gsutil 
# RUN gcloud components install gsutil --quiet

# Copia todo el contenido del directorio actual al contenedor en /app
COPY ./app /app/app
COPY ./job /app/job
COPY ./public /app/public
# COPIAR LA CONFIGURACIÓN DEL SERVIDOR DE NGINX
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Dar permisos de ejecución a todos los archivos .py
RUN find /app -type f -name "*.py" -exec chmod +x {} +

# Exponer el puerto 8080 en el contenedor
EXPOSE 8080

# Comando para ejecutar la aplicación FastAPI
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
