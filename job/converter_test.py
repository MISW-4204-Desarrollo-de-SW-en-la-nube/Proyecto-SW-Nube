from sqlalchemy import create_engine, text, update
from dotenv import load_dotenv
import subprocess
import os

load_dotenv()


def conectar_bd():
    motor = os.getenv("DB_URL", "postgresql://fpv_user_dev:pfv_user_pwd@postgres:5432/fpv_db_dev")
    print("motor: ", motor)
    try:
        engine = create_engine(motor)
        print("Conexión exitosa a la base de datos PostgreSQL.")
        return engine
    except Exception as e:
        print("Error al conectarse a la base de datos PostgreSQL:", e)
        return None



def ejecutar_script_sh(id):
    engine = conectar_bd()
    if engine is not None:
        # Realizar consultas, operaciones, etc. aquí
        connection = engine.connect()
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

            # Ejemplo de uso
            public_folder = "https://storage.googleapis.com/"
            bucket_name = os.getenv("BUCKET_NAME")
            print("bucket_name: ", bucket_name)
            #OBTENER RUTA PARA DESCARGAR EL VIDEO
            file_video_path = video_url.replace(public_folder, 'gs://')
            file_video_processed_path = processed_url.replace(public_folder, 'gs://')
            public_bucket = f"https://storage.googleapis.com/{bucket_name}/"
            print("file_video_path: ", file_video_path)

            video_url_relative  = video_url.replace(public_bucket, "").replace("\\", "/")
            processed_url_relative  = processed_url.replace(public_bucket, "").replace("\\", "/")
            print("video_url_relative: ", video_url_relative)
            print("processed_url_relative: ", processed_url_relative)
            # Construir la ruta local de los archivos
            video_url_local = "." + os.path.join(os.path.dirname(os.path.realpath(__file__)), video_url_relative)
            processed_url_local = "." + os.path.join(os.path.dirname(os.path.realpath(__file__)), processed_url_relative)
            print("video_url_local: ", video_url_local)
            print("processed_url_local: ", processed_url_local)

            # DESCARGAR VIDEO DEL BUCKET
            # gsutil cp -r gs://YOUR-BUCKET-NAME/ada.jpg .
            subprocess.run(['gsutil', 'cp', '-r', file_video_path, video_url_local], check=True)

            ruta_script_sh = os.path.join(os.path.dirname(os.path.realpath(__file__)), "process.sh")
            video_logo = os.path.join(os.path.dirname(os.path.realpath(__file__)), "imagen_video.mp4")
            comando = ["sh", ruta_script_sh, video_url_local, processed_url_local, video_logo]
            subprocess.run(comando, check=True)
            # SUBIR VIDEO PROCESADO
            command = ["gsutil", "cp", processed_url_local, file_video_processed_path]
            subprocess.run(command, check=True)

            update_stmt = text("UPDATE tasks SET status='processed' WHERE id = :id").bindparams(id=id)
            connection.execute(update_stmt)
            connection.commit()


        connection.close()
        engine.dispose()
    

