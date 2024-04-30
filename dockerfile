# Use the official Python image from the Docker Hub
FROM python:3.11.9-alpine

# set work directory
WORKDIR /app

#  Install the required dependencies
RUN pip install --upgrade pip
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir --upgrade -r requirements.txt

# Instalar psycopg2 para interactuar con PostgreSQL
RUN apk add --no-cache postgresql-libs openjdk11 curl unzip nginx supervisor && \
    apk add --no-cache --virtual .build-deps gcc musl-dev postgresql-dev && \
    pip install psycopg2-binary && \    
    apk --purge del .build-deps

# INSTALAR GOOGLE CLOUD SDK
RUN curl -O https://dl.google.com/dl/cloudsdk/channels/rapid/downloads/google-cloud-cli-471.0.0-linux-x86_64.tar.gz && \
    tar zxvf google-cloud-cli-471.0.0-linux-x86_64.tar.gz && \
    ./google-cloud-sdk/install.sh --quiet && \
    rm google-cloud-cli-471.0.0-linux-x86_64.tar.gz

# CONFIGURAR EL PATH DE GOOGLE CLOUD SDK
ENV PATH $PATH:/app/google-cloud-sdk/bin

# INSTALAR gsutil 
RUN gcloud components install gsutil --quiet

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
# CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8080"]
# CMD ["uvicorn", "app.main:app", "--reload", "--workers", "1", "--host", "0.0.0.0", "--port", "8080"]
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
