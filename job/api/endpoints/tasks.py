from fastapi import APIRouter, Request, HTTPException, Depends
from sqlalchemy.orm import Session
import base64

from job.core.logger_config import logger
from job.db.session import get_db
from job.services.tasks import convert_file_by_id


router = APIRouter()

@router.post("/")
async def get_task(request: Request, db: Session = Depends(get_db)) -> None:
    errorExeption = {
        "status_code": 500,
        "detail": "Error al obtener una tarea"
    }
    try:
        envelope = await request.json()
        logger.info(f"Task With data: {envelope}")
        message_data = envelope["message"]["data"]
        decoded_message = base64.b64decode(message_data).decode('utf-8')
        task_id = int(decoded_message)
        logger.info(f"Processing task ID: {task_id}")
        convert_file_by_id(db, task_id)
    except Exception as e:
        logger.error('Error al obtener tarea')
        logger.error(e)
        raise HTTPException(errorExeption["status_code"], detail=errorExeption["detail"])
