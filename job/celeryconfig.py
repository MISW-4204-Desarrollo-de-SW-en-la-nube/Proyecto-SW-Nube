import os
from job.beat_conf import beat_conf
# CAMBIAR POR LOCALHOST SI SE EJECUTA EN LOCAL - MANTENER EN REDIS SI SE EJECUTA EN DOCKER (REFERENCIA AL CONTENEDOR DEFINIDO EN DOCKER-COMPOSE)
broker_url=os.getenv("REDIS_URL", "redis://redis:6379") + '/0'
result_backend=os.getenv("REDIS_URL", "redis://redis:6379") + '/0'
task_serializer='json'
result_serializer='json'
enable_utc=True
imports= (
    'job.tasks',
)
broker_connection_retry=True,  # Indicar que se realicen reintentos de conexión
broker_connection_retry_on_startup=True,  # Establecer reintentos de conexión en el inicio
beat_schedule = beat_conf