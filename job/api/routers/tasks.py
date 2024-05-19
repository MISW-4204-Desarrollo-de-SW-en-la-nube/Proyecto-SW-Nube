from fastapi import APIRouter
from job.api.endpoints import tasks

router = APIRouter()

router.include_router(tasks.router, prefix="/api/tasks", tags=["Tasks"], responses={404: {"description": "Not found"}})