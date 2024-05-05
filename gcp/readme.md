## Desplegar en GCP

En esta carpeta se encuentran dos scripts para desplegar la aplicación en Google Cloud Platform (GCP) y otro para eliminar los recursos creados.

### Implementación

Descargue sobre el cli de GCP los scripts de despliegue `create.sh` y `delete.sh`, hagalo usando CURL

```bash
sudo curl -L -o create.sh https://raw.githubusercontent.com/MISW-4204-Desarrollo-de-SW-en-la-nube/Proyecto-SW-Nube/main/gcp/create.sh
sudo curl -L -o delete.sh https://raw.githubusercontent.com/MISW-4204-Desarrollo-de-SW-en-la-nube/Proyecto-SW-Nube/main/gcp/delete.sh
```



### Despliegue

Para desplegar la aplicación en GCP, se debe ejecutar el script `create.sh`. Este script se encarga de crear varias instancia VM, y base de datos PostgreSQL en Cloud SQL.

```bash
sh create.sh <PASSWORD_DB>
```
 > **Nota:** El script `create.sh` requiere de un argumento que es la contraseña de la base de datos y del usuario root de la base de datos.

 > Importante: Si lo va a desplegar en su nuve de GCP, debe tener en cuenta que en el script `create.sh` debe modificar las variables de:
> - `PROJECT_ID` -> Asignele el ID de su proyecto en GCP.
> - `BUCKET_NAME` -> Asignele el nombre del bucket que va a crear en GCP, tenga en cuenta que este servicio es global, por lo que el nombre del bucket debe ser único en todo GCP.
 

Para eliminar la infraestructura creada, ejecutar el script `delete.sh`. No requiere argumentos.

```bash
sh delete.sh
```

## Posterior a la creación de la infraestructura

Una vez creada la infraestructura, ingrese por ssh a cada una de las instancias creadas y ejecute el comando de acuerdo a la responsabilidad de cada instancia.

 - **Instancia 1:** mv1-backend -> Corrre el backend de la aplicación.

```bash
cd ../../nube
```

  Modifique el docker-compose.yml para cambiar las variables de entorno del servicio `fastapiback`, y modifique las variables de:

  - `DB_URL` -> Asignele la dirección IP privada de la instancia mv2 y la contraseña de la base de datos.
  - `BASE_URL` -> Asignele la dirección IP Pública de la instancia en de esa misma maquina.

```bash
sudo nano docker-compose.yml
docker-compose up --build fastapi nginx -d
```

 - **Instancia 2:** mv3-batch -> Corre el procesamiento de los videos.

```bash
cd ../../nube
docker-compose up --build redis workertres -d
```

 > **Nota:** La instancia mv2 corresponde a la instancia de la base de datos, no requiere ejecutar ningún comando.

