from sqlalchemy.orm import Session
import subprocess
import os

from job.core.config import settings
from job.models.task import Task

def convert_file_by_id(db: Session, task_id: int):
    task = db.query(Task).filter(Task.id == task_id, Task.status == 'uploaded').first()
    if task:
        print('Tarea encontrada')

        original_file_name = task.originalFileName
        video_url = task.video_url
        processed_url = task.video_processed_url
        print("video_url: " + video_url)
        print("original_file_name: " + original_file_name)
        print("processed_url: " + processed_url)

        # processed_video_path = "/app/public/processed/"
        # if not os.path.exists(processed_video_path):
        #     os.makedirs(processed_video_path)
        # download_video_path = "/app/public/uploaded/"
        # if not os.path.exists(download_video_path):
        #     os.makedirs(download_video_path)

        # # Ejemplo de uso
        # public_folder = "https://storage.googleapis.com/"
        # bucket_name = settings.BUCKET_NAME
        # print("bucket_name: "+ bucket_name)

        # # DESCARGAR VIDEO DEL BUCKET
        # video_url = video_url.replace(public_folder, 'gs://')
        
        # video_url_local = os.path.join(download_video_path, original_file_name)
        # processed_url_local = os.path.join(processed_video_path, original_file_name)
        # print("video_url: " + video_url)
        # print("video_url_local: " + video_url_local)
        # print("processed_url_local: " + processed_url_local)
        # subprocess.run(['gsutil', 'cp', '-r', video_url, download_video_path], check=True)
        
        # #CONVERTIR VIDEO
        # file_process_path = "/app/job/"
        # ruta_script_sh = os.path.join(file_process_path, "process.sh")
        # video_logo = os.path.join(file_process_path, "imagen_video.mp4")
        # comando = ["sh", ruta_script_sh, video_url_local, processed_url_local, video_logo]
        # subprocess.run(comando, check=True)

        # # SUBIR VIDEO PROCESADO
        # processed_url = processed_url.replace(public_folder, 'gs://')
        # command = ["gsutil", "cp", processed_url_local, processed_url]
        # subprocess.run(command, check=True)


        # # ELIMINAR ARCHIVO DE VIDEO SIN PROCESAR
        # print("Eliminando archivo de video sin procesar")
        # os.remove(video_url_local)

        # # ELIMINAR ARCHIVO DE VIDEO PROCESADO
        # print("Eliminando archivo de video procesado")
        # os.remove(processed_url_local)  
        
        # #ACTUALIZAR STATUS DE LA TAREA
        # task.status = 'processed'
        # db.session.add(task)
        # db.commit()
    else:
        print('Tarea no encontrada')

