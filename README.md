# Proyecto Proyecto-SW-Nube - README


Este proyecto utiliza FastAPI como framework para crear una API web. A continuación se detallan los pasos necesarios para configurar el entorno de desarrollo, instalar las dependencias, manejar las variables de entorno y ejecutar el servidor FastAPI.

Este proyecto esta basado en un sistema de gestión de archivos de video (mp4),  que permite a los usuarios subir archivos de video, convertirlos a otros formatos, y descargar los archivos convertidos. Además, se implementa un sistema de autenticación y autorización de usuarios, y un sistema de tareas asíncronas utilizando Celery y Redis.

## Actualización - Entrega 3

se creo el tag
docker tag fastapi-app nipoanz/fastapi-back:latest

# se sube la imagen
docker push nipoanz/fastapi-back:latest
 
# se descarga la imagen
docker pull nipoanz/fastapi-back:latest

#imagen publica
https://hub.docker.com/r/nipoanz/fastapi-back

# se ejecuta la imagen
sudo docker run -d -e DB_URL=$DB_CONNECTION_URL -e SECRET_KEY=supreSecretKey123 -e REDIS_URL=redis://$BATCH_IP:6379 -e DEBUG=False -e BUCKET_NAME=$BUCKET_NAME -p $PORT_WEB:80 -p 6379:6379 --log-driver=gcplogs -v ~/.config:/root/.config nipoanz/fastapi-back:latest

## Actualización - Entrega 2

Para poder desplegar este proyecto es necesario que siga los pasos del readme ubicado en la carpeta [`gcp`](https://github.com/MISW-4204-Desarrollo-de-SW-en-la-nube/Proyecto-SW-Nube/tree/main/gcp), ya que para esta entrega es necesario el uso de la nube de Google para migrar la solución.

Importante que revise la wiki de este proyecto para poder realizar la correcta configuración y despliegue del mismo.


Solución desplegada y actualizada.
![image](https://github.com/MISW-4204-Desarrollo-de-SW-en-la-nube/Proyecto-SW-Nube/assets/142164473/30fc87a0-4671-4d1d-a090-e8c5555c5ab4)






---
## Instalación y Configuración Rápida

> !Importante esta configuración solo será posible si el despliegue del proyecto es en local y utilizan el archivo de `old-yml` como archivo de definición de servicios de docker

Siga los siguientes pasos para instalar y configurar el proyecto rápidamente en una máquina Windows:

 > Si usted está utilizando un sistema operativo basado en MacOS, puede que tenga problemas con la instalación de las dependencias, por lo que se recomienda ver el siguiente Discusion de StackOverflow: [Discusión](https://stackoverflow.com/questions/66888087/cannot-install-psycopg2-with-pip3-on-m1-mac), esto dado que psycopg2 no es compatible con MacOS, por lo que se recomienda instalar la libreria `psycopg2-binary` en su lugar.

 > Se asume que ud ya tiene instalado y corriendo docker en su máquina. además este tutorial se basa en u sistema operativo Windows, por lo que los comandos pueden variar dependiendo del sistema operativo que esté utilizando.

<br>

### 1. **Clone el repositorio usando https:**

```bash
git clone https://github.com/MISW-4204-Desarrollo-de-SW-en-la-nube/Proyecto-SW-Nube.git
cd .\Proyecto-SW-Nube\
```
<br>

### 2. **Crea un archivo .env en el directorio raíz del proyecto y define las variables de entorno necesarias:**

```bash
DB_URL="postgresql://fpv_user_dev:pfv_user_pwd@localhost:5080/fpv_db_dev"
SECRET_KEY="supreSecretKey123."
DEBUG=True
```
<br>

### 3. **Ejecuta el siguiente comando para construir las imágenes de Docker y ejecutar los contenedores:**

```bash
docker-compose build
```

<br>

### 4. **Ejecuta el siguiente comando para iniciar todos los contenedores de Docker-Compose:**

```bash
docker-compose up -d
```
 > El comando `docker-compose up -d` ejecuta los contenedores en segundo plano, si desea ver los logs de los contenedores, ejecute el comando `docker-compose logs -f`.

<br>

### 5. **Accede a la documentación de la API:**

Abra el siguiente link: [DOCUMENTACIÓN](https://documenter.getpostman.com/view/10832015/2sA3Bj7DMh#b5624372-4c4a-45eb-bcad-9e0948f1efe0)

<br>

### 6. **Ingresar a los registros de los contenendores:**

```bash
docker-compose logs -f
```
<br>

### 7. **Detener los contenedores de Docker:**

```bash
docker-compose down
```


> Adicionalmente, si desea eliminar los volúmenes asociados a los contenedores, ejecute el comando `docker-compose down -v`. 
> También puede ver el siguiente video para ver como instalar el proyecto:
>
>  [![](https://github.com/MISW-4204-Desarrollo-de-SW-en-la-nube/Proyecto-SW-Nube/assets/142164473/b5d81b32-f095-4bc6-abb8-9a2ba702de12)](https://youtu.be/6ZJAS_i0okg)

----
## Estructura del proyecto

Este proyecto se divide en varios módulos, definidos y configurados gracias a docker-compose.yml, a continuación se detallan los módulos y su funcionalidad:

 > Definimos los servicios con el nombre declarado en el archivo docker-compose.yml.

1. **fastapiback**: Contiene el código fuente de la API web, desarrollada con FastAPI. Este módulo se ejecuta en un contenedor de Docker y se comunica con la base de datos PostgreSQL y el servidor Redis.
2. **postgres**: Contiene la base de datos PostgreSQL, que almacena la información de los usuarios y los archivos de video.
3. **nginx**: Contiene el servidor Nginx, que se utiliza como proxy inverso para redirigir las solicitudes a la API web.
4. **redis**: Contiene el servidor Redis, que se utiliza para almacenar las tareas asíncronas de Celery.
5. **workertres**: Contiene el servicio de Celery, que se encarga de ejecutar las tareas asíncronas de conversión de archivos de video.

 > Opcionalmente, puede ejecutar el servicio de pgadmin para visualizar y gestionar la base de datos de PostgreSQL


La siguiente imagen describe la arquitectura del proyecto:

<br>
<br>
<div align="center">
  <img src="./assets/diagrama.png" alt="diagrama" width="80%"/>
</div>
<br>
<br>



----
## Configuración local del Proyecto

Crea un entorno virtual para el proyecto:

```bash
python -m venv venv
```

Activa el entorno virtual:

```bash
# En Linux/MacOS
source venv/bin/activate
```
    
```bash
# En Windows
.\venv\Scripts\activate
```

### Instalación de Dependencias

Instala las dependencias del proyecto:

```bash
pip install -r requirements.txt
```

Las dependencias necesarias para este proyecto son:
- bcrypt
- celery
- colorlog
- fastapi
- gevent
- pydantic
- uvicorn
- sqlalchemy
- asyncpg
- pyjwt
- redis
- python-dotenv
- python-multipart


Las versiones pueden variar dependiendo del sistema operativo y/o la versión de Python que estés utilizando, etc.

### Manejo de Variables de Entorno

1. Crea un archivo .env en el directorio raíz del proyecto.
2. Define las variables de entorno necesarias en el archivo .env, como la cadena de conexión a la base de datos y la configuración de JWT.


Ejemplo de archivo .env:

```bash
DATABASE_URL=postgresql://usuario:contraseña@localhost:8050/nombre_bd
SECRET_KEY=supersecreta
DEBUG=True
```

Si la aplicación está desplegada en un entorno de producción, asegúrate de cambiar el valor de DEBUG a False.

 > Asegurese de que la url de la base de datos sea correcta, en este caso  en el archivo docker-compose.yml se define el puerto 8050 para la base de datos, por lo que la url de la base de datos debe ser `postgresql://usuario:contraseña@localhost:8050/nombre_bd`.

### Iniciar el Servidor FastAPI

Para iniciar el servidor FastAPI, ejecuta el siguiente comando:

```bash
uvicorn src.main:app --reload --workers 1 --host 0.0.0.0 --port 8080
```

Este servidor se basa en unicorn, un servidor ASGI de Python, y es ejecutado como ambiente productivo. No necesita configuracón adicional.

### Documentación de la API - Swagger UI

Accede a la API autogenerada de Swagger en http://localhost:8080/docs (o en el puerto que esté corriendo el proyecto) en el navegador  de su preferencia.

Tenga en cuenta que esta es una documentación interactiva de la API, generada automáticamente por FastAPI. Puede probar los endpoints directamente desde la interfaz de usuario de Swagger UI. o se recomientda revisar la generada por el equipo en el siguiente link: [DOCUMENTACIÓN](https://documenter.getpostman.com/view/10832015/2sA3Bj7DMh#b5624372-4c4a-45eb-bcad-9e0948f1efe0)


### Ejecutar Docker

Para ejecutar solo el contenedor del backend de este proyecto en Docker, sigue los siguientes pasos:

1. Construye la imagen de Docker:

```bash
docker build -t fastapi-app .
```

2. Ejecuta el contenedor de Docker:

```bash
docker run -e DB_URL=postgresql://fpv_user_dev:pfv_user_pwd@localhost:5080/fpv_db_dev -e SECRET_KEY=supreSecretKey123 -e DEBUG=False -p 3000:8080  fastapi-app
```
 
 > Ejecutar solo este contenedor genera un error, ya que este proyecto necesita una base de datos PostgreSQL, además de un servidor de redis para la cola de tareas y el servicio del proceso batch, por lo que se recomienda ejecutar el archivo docker-compose.yml.

 > Si todo sale bien, y ejecuto el mismo comando anterior, deberia ver este error en la consola: `ERROR: Application startup failed. Exiting.`, indicandole que no se ha poddo contectar con la base de datos, para esto necesitamos ejecutar el archivo docker-compose.yml. ya que nos permite tener una red de contenedores y servicios que se comunican entre si. Si ya tiene el contenedor de postgresql podrá hacer uso básico de la API, pero no podrá hacer uso de los servicios de Celery.


#### Docker-Compose

### Ejecutar Servicios

Para ejecutar el servicio de Celery, sigue los siguientes pasos:

1. Ejecuta el siguiente comando para iniciar el servicio de redis:

```bash	
docker-compose up -d redis
```

2. Ejecuta el siguiente comando para construir la imagen de Docker del servicio de Celery:

```bash
docker build -t worker-api -f dockerfileWorker .     
```

3. Ejecuta el siguiente comando para iniciar el servicio de Celery:

```bash
docker-compose up -d workertres
```

### Ingresar a un contenedor por SH

Para ingresar a un contenedor por SH, sigue los siguientes pasos:

1. Ejecuta el siguiente comando para listar los contenedores que estan corriendo:

```bash
docker ps
```

2. Ejecuta el siguiente comando para ingresar a un contenedor por SH:
```bash
docker exec -it <id_del_contenedor> bash     
```	

### Ejecutar Docker Compose

  > Importante: Asegúrate de tener las siguientes carpetas en el directorio raíz del proyecto: `pgadmin-data`, `redis_data`, `pgadmin_data`. Estas carpetas son necesarias para almacenar los datos `Volumenes` de PostgreSQL, Redis y PgAdmin, respectivamente que son manejados por docker para persistir la información.


Para ejecutar el proyecto con Docker Compose, sigue los siguientes pasos:

1. Construye las imágenes de Docker:

```bash
docker-compose build
```

2. Ejecuta los contenedores de Docker en segundo plano:

```bash
docker-compose up  -d
```

3. Detener los contenedores de Docker:

```bash
docker-compose down
```

4. Eliminal los contenedores de Docker:

```bash
docker-compose down -v
```

  > Nota: Si necesita limpiar el proyecto con los datos que se generan en los volúmenes, elimine las carpetas mencionadas anteriormente y ejecute el comando `docker-compose down -v` para eliminar los contenedores y los volúmenes asociados.

  > Si solo necesita levantar un servicio, y está seguro de que los otros servicios no están corriendo, puede ejecutar el siguiente comando: `docker-compose up <nombre del servicio>`

## Celery

Para ejecutar el servicio de Celery, sigue los siguientes pasos:

1. Ejecuta el siguiente comando para iniciar el servicio de redis:

```bash
docker-compose up -d redis
```

2. Ejecuta el siguiente comando para iniciar el servicio de Celery:

```bash
celery -A job.celery_app worker -1 info -P gevent
```

 > El  registro de logs se establece a `info`, pero puede cambiarlo a `debug` para obtener más información. Ademas para poder imprimir los logs generados por `loger` o `print` es necesario agregar el parametro `-P gevent` para que los logs se impriman en la consola. Tenga en cuenta que es necesario instalar la libreria `gevent` para poder utilizar este parametro: `pip install gevent`.

 3. Ejecuta el siguiente comando para iniciar el servicio de Celery que ejecuta los procesos batch:

```bash
celery -A job.celery_app beat --loglevel INFO
```
 
 > En el archivo `job.beat_conf` se definen las tareas que se ejecutan en el servicio de Celery, para este proceso se define un proceso batch que se ejecuta cada 5 minutos, yhace un proceso de conversión de conversión de archivos ubicados en el proyecto, modifique el valor de la variable `schedule` en el archivo `job.beat_conf`.


# ffmpeg

ffmpeg es una herramienta de línea de comandos que se utiliza para convertir archivos de audio y video de un formato a otro. En este proyecto se utiliza para convertir archivos de audio de formato mp3 a wav.

 - Convertir una imagen a video, ejecte el siguiente comando:

```bash
ffmpeg -loop 1 -i imagen.png -vf "scale=640:360:force_original_aspect_ratio=decrease,pad=640:360:(ow-iw)/2:(oh-ih)/2" -t 1 imagen_video.mp4
``` 

> En este comando se convierte una imagen a un video, el parametro `-loop 1` indica que la imagen se repite una vez, el parametro `-i imagen.png` indica la imagen que se va a convertir, el parametro `-vf "scale=640:360:force_original_aspect_ratio=decrease,pad=640:360:(ow-iw)/2:(oh-ih)/2"` indica el tamaño del video, el parametro `-t 1` indica la duración del video, y el parametro `imagen_video.mp4` indica el nombre del video que se va a generar.

 - Recortar y redimensionar un video, ejecte el siguiente comando:

```bash
ffmpeg -i input_video.mp4 -ss 0 -t 18 -vf "scale=640:360:force_original_aspect_ratio=decrease,pad=640:360:(ow-iw)/2:(oh-ih)/2" output_video.mp4
```	

> En este comando se recorta y redimensiona un video, el parametro `-i input_video.mp4` indica el video que se va a convertir, el parametro `-ss 0` indica el tiempo de inicio del video, el parametro `-t 18` indica la duración del video, el parametro `-vf "scale=640:360:force_original_aspect_ratio=decrease,pad=640:360:(ow-iw)/2:(oh-ih)/2"` indica el tamaño del video, y el parametro `output_video.mp4` indica el nombre del video que se va a generar.

  - Concatenar varios videos, ejecte el siguiente comando:

```bash
ffmpeg -i imagen_video.mp4 -i output_video.mp4 -i imagen_video.mp4  -filter_complex "[0:v][1:v][2:v]concat=n=3:v=1:a=0[outv]" -map "[outv]" output.mp4 
```

> En este comando se concatenan varios videos, el parametro `-i imagen_video.mp4 -i output_video.mp4 -i imagen_video.mp4` indica los videos que se van a concatenar, el parametro `-filter_complex "[0:v][1:v][2:v]concat=n=3:v=1:a=0[outv]"` indica la concatenación de los videos, y el parametro `-map "[outv]" output.mp4` indica el nombre del video que se va a generar.
Repositorio para proyecto de Desarrollo de software en la nube


## IP de contenedores

Se debe de listar todos los contenedores que estan corriendo para poder obtener la IP de los contenedores, y con el id se puede filtrar la información para obtener la IP de un contenedor en especifico.


```bash
docker ps
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' <id_contenedor>   
```
