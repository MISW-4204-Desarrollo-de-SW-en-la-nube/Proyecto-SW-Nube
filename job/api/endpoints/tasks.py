from fastapi import APIRouter, Request, HTTPException, Depends
from sqlalchemy.orm import Session
import base64

from job.core.logger_config import logger
from job.db.session import get_db
from job.services.tasks import convert_file_by_id


router = APIRouter()

@router.post("/")
async def get_task(request: Request, db: Session = Depends(get_db)) -> None:
    try:
        envelope = await request.json()
        print("Task With data: " + str(envelope))
        message_data = envelope["message"]["data"]
        decoded_message = base64.b64decode(message_data).decode('utf-8')
        task_id = int(decoded_message)
        print("Processing task ID: " + str(task_id))
        convert_file_by_id(db, task_id)
    except Exception as e:
        print('Error al obtener tarea')
        print(e)
        raise HTTPException(500, detail="Error al obtener una tarea")
