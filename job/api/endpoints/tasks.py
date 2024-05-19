from fastapi import APIRouter, HTTPException, Depends, UploadFile, File, BackgroundTasks
from datetime import datetime, timedelta
from sqlalchemy.orm import Session

from job.core.logger_config import logger
from job.db.session import get_db
from job.services.tasks import convert_file_by_id


router = APIRouter()

@router.get("/{id_task}")
async def get_task(id_task: int, db: Session = Depends(get_db)):
    errorExeption = {
        "status_code": 500,
        "detail": "Error al obtener una tarea"
    }
    try:
        logger.info('Obteniendo tarea')
        task = convert_file_by_id(db, id_task)
        if task is None:
            logger.error('Tarea no encontrada')
            errorExeption["status_code"] = 404
            errorExeption["detail"] = "Tarea no encontrada"
            raise ValueError('Tarea no encontrada')
        return task
    except Exception as e:
        logger.error('Error al obtener tarea')
        logger.error(e)
        raise HTTPException(errorExeption["status_code"], detail=errorExeption["detail"])
