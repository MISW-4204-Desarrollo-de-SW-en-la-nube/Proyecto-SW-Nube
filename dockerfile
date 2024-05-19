FROM google/cloud-sdk:474.0.0-alpine

# set work directory
WORKDIR /app

RUN apk add --update py-pip
RUN pip --version

#  Install the required dependencies
RUN pip install --upgrade pip --break-system-packages
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir --upgrade -r requirements.txt --break-system-packages
RUN pip install "hypercorn[trio]" --break-system-packages

# Instalar psycopg2 para interactuar con PostgreSQL
RUN apk add --no-cache postgresql-libs && \
    apk add --no-cache --virtual .build-deps gcc musl-dev postgresql-dev && \
    pip install psycopg2-binary --break-system-packages && \    
    apk --purge del .build-deps

# Copia todo el contenido del directorio actual al contenedor en /app
COPY ./app /app/app
COPY ./public /app/public

# Dar permisos de ejecución a todos los archivos .py
RUN find /app -type f -name "*.py" -exec chmod +x {} +

# Exponer el puerto 8081 en el contenedor
EXPOSE 8081

# CAMBIO DE MOTOR DE ASGI A TRIO - UTILIZADO POR HYPERCORN - SOPORTA HTTP/2
# https://pgjones.gitlab.io/hypercorn/discussion/http2.html?highlight=http2
CMD ["hypercorn", "app.main:app", "--worker-class",  "trio", "--reload", "--bind", "0.0.0.0:8081"]

