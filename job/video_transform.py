import sqlalchemy
from sqlalchemy import text, update, create_engine
from dotenv import load_dotenv
import subprocess
import os

load_dotenv()

def connect_unix_socket():
    """Initializes a Unix socket connection pool for a Cloud SQL instance of Postgres."""
    db_host = os.getenv("INSTANCE_HOST")
    # db_host = settings.INSTANCE_HOST  # e.g. '127.0.0.1' ('172.17.0.1' if deployed to GAE Flex)
    db_user = os.getenv("DB_USER")
    # db_user = settings.DB_USER  # e.g. 'my-database-user'
    db_pass = os.getenv("DB_PASS")
    # db_pass = settings.DB_PASS  # e.g. 'my-database-password'
    db_name = os.getenv("DB_NAME")
    # db_name = settings.DB_NAME  # e.g. 'my-database-name'
    db_port = os.getenv("DB_PORT")
    # db_port = settings.DB_PORT  # e.g. 5432
    print("db_host: " + db_host)
    print("db_user: " + db_user)
    print("db_pass: " + db_pass)
    print("db_name: " + db_name)
    print("db_port: " + db_port)

    try:
        pool = create_engine(
            sqlalchemy.engine.url.URL.create(
                drivername="postgresql+pg8000",
                username=db_user,
                password=db_pass,
                host=db_host,
                port=db_port,
                database=db_name,
            ),
        )
        print("Conexión exitosa a la base de datos PostgreSQL.")
        return pool
    except Exception as e:
        print("Error al conectarse a la base de datos PostgreSQL:", e)
        return None

# def conectar_bd():
#     motor = os.getenv("DB_URL", "postgresql://fpv_user_dev:pfv_user_pwd@postgres:5432/fpv_db_dev")
#     print("motor: " + motor)
    
#         engine = create_engine(motor)
        
#         return engine
#     except Exception as e:
#         print("Error al conectarse a la base de datos PostgreSQL:", e)
#         return None

def transform_video(id: str):
    try:
        engine = connect_unix_socket()
        if engine is not None:
            # Realizar consultas, operaciones, etc. aquí
            connection = engine.connect()
            print("Querying for task with id: " + str(id))
            stmt = text("SELECT * FROM tasks WHERE id = :id AND status='uploaded'").bindparams(id=id)
            result = connection.execute(stmt)
            row = result.first()

            if row is not None:
                original_file_name = row[1]
                video_url = row[4] 
                processed_url = row[5]
                print("video_url: " + video_url)
                print("original_file_name: " + original_file_name)
                print("processed_url: " + processed_url)

                processed_video_path = "/app/public/processed/"
                if not os.path.exists(processed_video_path):
                    os.makedirs(processed_video_path)
                download_video_path = "/app/public/uploaded/"
                if not os.path.exists(download_video_path):
                    os.makedirs(download_video_path)

                # Ejemplo de uso
                public_folder = "https://storage.googleapis.com/"
                bucket_name = os.getenv("BUCKET_NAME")
                print("bucket_name: "+ bucket_name)

                # DESCARGAR VIDEO DEL BUCKET
                video_url = video_url.replace(public_folder, 'gs://')
                
                video_url_local = os.path.join(download_video_path, original_file_name)
                processed_url_local = os.path.join(processed_video_path, original_file_name)
                print("video_url: " + video_url)
                print("video_url_local: " + video_url_local)
                print("processed_url_local: " + processed_url_local)
                subprocess.run(['gsutil', 'cp', '-r', video_url, download_video_path], check=True)
                
                #CONVERTIR VIDEO
                ruta_script_sh = os.path.join(os.path.dirname(os.path.realpath(__file__)), "process.sh")
                video_logo = os.path.join(os.path.dirname(os.path.realpath(__file__)), "imagen_video.mp4")
                comando = ["sh", ruta_script_sh, video_url_local, processed_url_local, video_logo]
                subprocess.run(comando, check=True)

                # SUBIR VIDEO PROCESADO
                processed_url = processed_url.replace(public_folder, 'gs://')
                command = ["gsutil", "cp", processed_url_local, processed_url]
                subprocess.run(command, check=True)


                # ELIMINAR ARCHIVO DE VIDEO SIN PROCESAR
                print("Eliminando archivo de video sin procesar")
                os.remove(download_video_path + original_file_name)

                # ELIMINAR ARCHIVO DE VIDEO PROCESADO
                print("Eliminando archivo de video procesado")
                os.remove(processed_url_local)

                update_stmt = text("UPDATE tasks SET status='processed' WHERE id = :id").bindparams(id=id)
                connection.execute(update_stmt)
                connection.commit()


            connection.close()
            engine.dispose()
    except Exception as e:
        print("Error al transformar video:", e)
        raise e

