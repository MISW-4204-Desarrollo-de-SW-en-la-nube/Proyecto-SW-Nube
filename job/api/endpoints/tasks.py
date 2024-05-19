from fastapi import APIRouter, Request, HTTPException, Depends
from sqlalchemy.orm import Session

from job.core.logger_config import logger
from job.db.session import get_db
from job.services.tasks import convert_file_by_id


router = APIRouter()

@router.post("/")
async def get_task(request: Request, db: Session = Depends(get_db)):
    errorExeption = {
        "status_code": 500,
        "detail": "Error al obtener una tarea"
    }
    try:
        envelope = await request.json()
        message_data = envelope["message"]["data"]
        print(f"Message data: {message_data}")
        decoded_message = message_data.decode("utf-8")
        task_id = int(decoded_message)
        logger.info(f"Processing task ID: {task_id}")
        task = convert_file_by_id(db, task_id)
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
