
from fastapi import UploadFile
from sqlalchemy.orm import Session
from datetime import datetime
from typing import List, Optional
import asyncio
import shutil
import subprocess
import os
import uuid
import io

from app.models import Task
from app.core.logger_config import logger
from app.schemas.task import TaskResponse, TaskCreate, TasksResponse, TaskDownloadResponse
from app.core.config import settings

def get_all_tasks_users(db: Session, max: Optional[int] = None, order: Optional[int] = 0) -> TasksResponse:
    try:
        tasks_query = db.query(Task)
        
        # Aplicar  ordenamiento
        if order == 1:
            logger.info('Se obtendrán las tareas ordenadas de forma descendente')
            tasks_query = tasks_query.order_by(Task.id.desc())
        else:
            logger.info('Se obtendrán las tareas ordenadas de forma ascendente')
            tasks_query = tasks_query.order_by(Task.id.asc())

        # Aplicar límite
        if max is not None:
            logger.info('Se obtendrán las primeras ' + str(max) + ' tareas')
            tasks_query = tasks_query.limit(max)
        
        tasks = tasks_query.all()

        task_responses = [TaskResponse(
            id=task.id,
            fileName=task.originalFileName,
            status=task.status
        ) for task in tasks]
        logger.info('Todas las tareas obtenidas: ' + str(len(task_responses)))
        return TasksResponse(result=task_responses)
    except Exception as e:
        logger.error('Error al obtener las tareas')
        logger.error(e)
        raise e



def get_all_tasks_by_user(db: Session, user: int, max: Optional[int] = None, order: Optional[int] = 0) -> TasksResponse:
    try:
        tasks_query = db.query(Task).filter(Task.owner_id == user)
        
        # Aplicar  ordenamiento
        if order == 1:
            logger.info('Se obtendrán las tareas ordenadas de forma descendente')
            tasks_query = tasks_query.order_by(Task.id.desc())
        else:
            logger.info('Se obtendrán las tareas ordenadas de forma ascendente')
            tasks_query = tasks_query.order_by(Task.id.asc())

        # Aplicar límite
        if max is not None:
            logger.info('Se obtendrán las primeras ' + str(max) + ' tareas')
            tasks_query = tasks_query.limit(max)
        
        tasks = tasks_query.all()

        task_responses = [TaskResponse(
            id=task.id,
            fileName=task.originalFileName,
            status=task.status
        ) for task in tasks]
        logger.info('Tareas obtenidas: ' + str(len(task_responses)))
        return TasksResponse(result=task_responses)
    except Exception as e:
        logger.error('Error al obtener las tareas')
        logger.error(e)
        raise e



def get_task_by_id(db: Session, task_id: int, user_id: int) -> TaskDownloadResponse:
    task = db.query(Task).filter(Task.id == task_id, Task.owner_id == user_id).first()
    if task:
        return TaskDownloadResponse(
                id=task.id,
                timeStamp=task.timeStamp.strftime('%Y-%m-%d %H:%M:%S'),
                fileName=task.originalFileName,
                video_processed_url=task.video_processed_url if task.status == 'processed' else '',
                status=task.status
            )
    return None

def delete_task_by_id(db: Session, task_id: int, user_id: int) -> bool:
    task = db.query(Task).filter(Task.id == task_id, Task.owner_id == user_id).first()
    if task:
        # ELIMINAR ARCHIVO DE VIDEO SI ESTA DISPONIBLE
        if task.status == 'processed':
            if task.video_url:
                logger.info('Eliminando archivo de video sin procesar')
                file_video_path = task.video_url.replace('https://storage.googleapis.com/', 'gs://')
                logger.info('Eliminando archivo de video sin procesar -> ' + file_video_path)
                command = ['gsutil', 'rm', file_video_path]
                subprocess.run(command, check=True)
               
            if task.video_processed_url:
                #valida si el archivo existe
                logger.info('Eliminando archivo de video procesado')
                file_processed_video_path = task.video_processed_url.replace('https://storage.googleapis.com/', 'gs://')
                logger.info('Eliminando archivo de video procesado -> ' + file_processed_video_path)
                command = ['gsutil', 'rm', file_processed_video_path]
                subprocess.run(command, check=True)

            db.delete(task)
            db.commit()
            return True
    return False
  
def save_file(file: UploadFile) -> str:
    try:
        if file.content_type != 'video/mp4':
            raise ValueError('El archivo no es un video')
        # CREAR DIRECTORIO SI NO EXISTE
        if not os.path.exists(settings.PUBLIC_DIR_NOT_PROCESSED):
            os.makedirs(settings.PUBLIC_DIR_NOT_PROCESSED)

        #logger.info(f'File name: {file.filename}')
        unique_id = uuid.uuid4()
        new_file_name = f"{unique_id}_{file.filename.replace(' ', '_')}"

        file_path = "./" + os.path.join(settings.PUBLIC_DIR_NOT_PROCESSED, new_file_name)
        logger.info("Save file on: " + file_path)
        with open(file_path, 'wb') as f:
            f.write(file.file.read())
        return file_path
    except Exception as e:
        logger.error('Error al guardar el archivo')
        logger.error(e)
        raise e


async def create_task_by_user(db: Session, user: int, filePath: str, fileName: str) -> None:
    try:
        logger.info(f'File name: {fileName}')

        # GENERAR UN IDENTIFICADOR UNICO DEL ARCHIVO SIN PROCESAR
        new_file_name = f"{uuid.uuid4()}_{fileName.replace(' ', '_')}"
        logger.info(f"New File Name: {new_file_name}")

        # Subir los datos al bucket de Cloud Storage
        if upload_file_to_bucket(filePath, settings.BUCKET_NAME, new_file_name, settings.PUBLIC_DIR_NOT_PROCESSED):
            logger.info(f'Archivo subido a Cloud Storage')
            video_url = get_video_url(settings.BUCKET_NAME, settings.PUBLIC_DIR_NOT_PROCESSED, new_file_name)
            logger.info(f'Video URL: {video_url}')
            video_processed_url = get_video_url(settings.BUCKET_NAME, settings.PUBLIC_DIR_PROCESSED, new_file_name)
            logger.info(f'Video Processed URL: {video_processed_url}')
            new_task = Task(
                originalFileName=fileName,
                fileName=new_file_name,
                video_url=video_url,
                video_processed_url=video_processed_url,
                owner_id=user
            )
            db.add(new_task)
            db.commit()
            logger.info(f'Task Created: {new_task.id}')
            publish_message(new_task.id)
        
    except Exception as e:
        logger.error(f'Error al crear tarea')
        logger.error(e)
        os.remove(filePath)
        db.rollback()


def upload_file_to_bucket(file: str, bucket_name: str, destination_path: str, folder_path: str) -> bool:
    try:
        logger.info("Subiendo archivo a Cloud Storage")
        uploadCmd = ["gsutil", "cp", file, f"gs://{bucket_name}/{folder_path}/{destination_path}"]
        logger.info(uploadCmd)
        subprocess.run(uploadCmd, check=True)

        logger.info('Quitar el acceo publico al archivo subido')
        uploadCmd = ["gsutil", "acl", "ch", "-d", "AllUsers", f"gs://{bucket_name}/{folder_path}/{destination_path}"]
        logger.info(uploadCmd)
        subprocess.run(uploadCmd, check=True)
        #ELIMINAR EL ARCHIVO TEMPORAL
        os.remove(file)
        return True
    except subprocess.CalledProcessError as e:
        logger.error('Error al subir archivo a Cloud Storage')
        logger.error(e)
        return False

def get_video_url(bucket_name: str, folder_path: str, file_name: str) -> str:
    return f"https://storage.googleapis.com/{bucket_name}/{folder_path}/{file_name}"



def publish_message(task_id: int) -> None:
    try:
        logger.info('Publicando mensaje...')
        command = ['gcloud', 'pubsub', 'topics', 'publish', settings.TOPIC_NAME, '--message', str(task_id)]
        logger.info(command)
        subprocess.run(command, check=True)
    except subprocess.CalledProcessError as e:
        logger.error('Error al publicar mensaje')
        logger.error(e)
