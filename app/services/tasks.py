
import subprocess
import os
import uuid
import io
from fastapi import UploadFile
from sqlalchemy.orm import Session
from datetime import datetime
from typing import List, Optional

from app.models import Task
from app.core.logger_config import logger
from app.schemas.task import TaskResponse, TaskCreate, TasksResponse, TaskDownloadResponse
from app.core.config import settings
from job.tasks import process_video


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
        logger.info(f'File name: {file.filename}')
        unique_id = uuid.uuid4()
        new_file_name = f"{unique_id}_{file.filename.replace(' ', '_')}"
        filePath = f"public/uploaded/{new_file_name}"
        with open(filePath, 'wb') as buffer:
            shutil.copyfileobj(file.file, buffer)
        return filePath
    except Exception as e:
        logger.error('Error al guardar el archivo')
        logger.error(e)
        raise e

async def create_task_by_user(db: Session, user: int, file: UploadFile) -> None:
    try:
        #VALIDAR QUE SEA UN VIDEO
        if not validate_content_type(file.content_type):
            return False
        logger.info(f'File name: {file.filename}')

        # GENERAR UN IDENTIFICADOR UNICO DEL ARCHIVO SIN PROCESAR
        unique_id = uuid.uuid4()
        new_file_name = f"{unique_id}_{file.filename.replace(' ', '_')}"

        # Subir los datos al bucket de Cloud Storage
        if upload_file_to_bucket(file, settings.BUCKET_NAME, new_file_name, settings.PUBLIC_DIR_NOT_PROCESSED):
            video_url = get_video_url(settings.BUCKET_NAME, settings.PUBLIC_DIR_NOT_PROCESSED, new_file_name)
            video_processed_url = get_video_url(settings.BUCKET_NAME, settings.PUBLIC_DIR_PROCESSED, new_file_name)
            new_task = Task(
                originalFileName=file.filename,
                fileName=new_file_name,
                video_url=video_url,
                video_processed_url=video_processed_url,
                owner_id=user
            )
            db.add(new_task)
            db.commit()
            logger.info(f'Tarea creada con id -> {new_task.id}')
            process_video.delay(new_task.id)
    except Exception as e:
        logger.error(f'Error al crear tarea')
        logger.error(e)
        db.rollback()


def validate_content_type(content_type: str) -> bool:
    return True if content_type == 'video/mp4' else False

def upload_file_to_bucket(file: UploadFile, bucket_name: str, destination_path: str, folder_path: str) -> bool:
    try:
        file_bytes = file.file.read()
        logger.info("Subiendo archivo a Cloud Storage")
        logger.info(f"gsutil cp - gs://{bucket_name}/{folder_path}/{destination_path}")

        process = subprocess.Popen(['gsutil', 'cp', '-', f'gs://{bucket_name}/{folder_path}/{destination_path}'],
                                   stdin=subprocess.PIPE, stderr=subprocess.PIPE, stdout=subprocess.PIPE)
        stdout, stderr = process.communicate(input=file_bytes)
        
        # Permisos de lectura para todos los usuarios
        #logger.info('Quitar el acceo publico al archivo subido')
        #logger.info(f"gsutil acl ch -d AllUsers gs://{bucket_name}/{folder_path}/{destination_path}")
        #command = f"gsutil acl ch -d AllUsers gs://{bucket_name}/{folder_path}/{destination_path}"
        #subprocess.run(command, shell=True, check=True)
        return True
    except subprocess.CalledProcessError as e:
        logger.error('Error al subir archivo a Cloud Storage')
        logger.error(e)
        return False

def get_video_url(bucket_name: str, folder_path: str, file_name: str) -> str:
    return f"https://storage.googleapis.com/{bucket_name}/{folder_path}/{file_name}"
