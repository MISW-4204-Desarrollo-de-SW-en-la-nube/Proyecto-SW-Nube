# Use the official Python image from the Docker Hub
FROM python:3.11.9-alpine

# set work directory
WORKDIR /app

#  Install the required dependencies
RUN pip install --upgrade pip
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir --upgrade -r requirements.txt

# Instalar psycopg2 para interactuar con PostgreSQL
RUN apk add --no-cache postgresql-libs openjdk11 curl unzip && \
    apk add --no-cache --virtual .build-deps gcc musl-dev postgresql-dev && \
    pip install psycopg2-binary && \    
    apk --purge del .build-deps

# Copia todo el contenido del directorio actual al contenedor en /app
COPY . .

# Dar permisos de ejecución a todos los archivos .py
RUN find /app -type f -name "*.py" -exec chmod +x {} +

# INSTALAR AGENTE DE ESCUCHA
RUN curl -L -o /tmp/ServerAgent-2.2.3.zip https://github.com/undera/perfmon-agent/releases/download/2.2.3/ServerAgent-2.2.3.zip
RUN unzip -q /tmp/ServerAgent-2.2.3.zip  -d /app/server-agent && rm /tmp/ServerAgent-2.2.3.zip
# Ejecutar el agente de escucha internamente en el contenedor - solo pruebas
# ./server-agent/ServerAgent-2.2.3/startAgent.sh --udp-port 0 --tcp-port 4444

# Exponer el puerto 8080 en el contenedor
EXPOSE 8080

# Comando para ejecutar la aplicación FastAPI
# CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8080"]
CMD ["uvicorn", "app.main:app", "--reload", "--workers", "1", "--host", "0.0.0.0", "--port", "8080"]