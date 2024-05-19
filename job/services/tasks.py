# from fastapi import UploadFile
from sqlalchemy.orm import Session
# from datetime import datetime
# import asyncio
# import shutil
# import subprocess
# import os

from job.models import Task
from job.core.logger_config import logger
from job.core.config import settings


def convert_file_by_id(db: Session, task_id: int) -> None:
    task = db.query(Task).filter(Task.id == task_id, Task.status == 'uploaded').first()
    if task:
        logger.info('Tarea encontrada')
        # result = TaskDownloadResponse(
        #         id=task.id,
        #         timeStamp=task.timeStamp.strftime('%Y-%m-%d %H:%M:%S'),
        #         fileName=task.originalFileName,
        #         video_processed_url=task.video_processed_url if task.status == 'processed' else '',
        #         status=task.status
        #     )
    else:
        logger.error('Tarea no encontrada')
#     return None

# def delete_task_by_id(db: Session, task_id: int, user_id: int) -> bool:
#     task = db.query(Task).filter(Task.id == task_id, Task.owner_id == user_id).first()
#     if task:
#         # ELIMINAR ARCHIVO DE VIDEO SI ESTA DISPONIBLE
#         if task.status == 'processed':
#             if task.video_url:
#                 logger.info('Eliminando archivo de video sin procesar')
#                 file_video_path = task.video_url.replace('https://storage.googleapis.com/', 'gs://')
#                 logger.info('Eliminando archivo de video sin procesar -> ' + file_video_path)
#                 command = ['gsutil', 'rm', file_video_path]
#                 subprocess.run(command, check=True)
               
#             if task.video_processed_url:
#                 #valida si el archivo existe
#                 logger.info('Eliminando archivo de video procesado')
#                 file_processed_video_path = task.video_processed_url.replace('https://storage.googleapis.com/', 'gs://')
#                 logger.info('Eliminando archivo de video procesado -> ' + file_processed_video_path)
#                 command = ['gsutil', 'rm', file_processed_video_path]
#                 subprocess.run(command, check=True)

#             db.delete(task)
#             db.commit()
#             return True
#     return False
  

