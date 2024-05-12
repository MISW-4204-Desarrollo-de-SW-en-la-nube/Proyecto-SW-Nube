from sqlalchemy import create_engine, text, update
from dotenv import load_dotenv
import subprocess
import os

load_dotenv()

def conectar_bd():
    motor = os.getenv("DB_URL", "postgresql://fpv_user_dev:pfv_user_pwd@postgres:5432/fpv_db_dev")
    print("motor: " + motor)
    try:
        engine = create_engine(motor)
        print("Conexión exitosa a la base de datos PostgreSQL.")
        return engine
    except Exception as e:
        print("Error al conectarse a la base de datos PostgreSQL:", e)
        return None

def transform_video(id: str):
    try:
        engine = conectar_bd()
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

                output_dir = "/app/public/processed/"
                if not os.path.exists(output_dir):
                    os.makedirs(output_dir)

                # Ejemplo de uso
                public_folder = "https://storage.googleapis.com/"
                bucket_name = os.getenv("BUCKET_NAME")
                print("bucket_name: "+ bucket_name)

                # DESCARGAR VIDEO DEL BUCKET
                video_url = video_url.replace(public_folder, 'gs://')
                download_video_path = "/app/public/uploaded/"
                video_url_local = os.path.join(download_video_path, original_file_name)
                processed_video_path = "/app/public/processed/"
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

