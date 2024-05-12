from fastapi import FastAPI
from concurrent.futures import TimeoutError
from google.cloud import pubsub_v1
from fastapi.middleware.cors import CORSMiddleware
import os
# CONFIG
from job.core.config import settings
from job.core.logger_config import logger
from job.worker import callbackProcces
import threading

# Crea una instancia de FastAPI
app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description=settings.APP_DESCRIPTION,
    debug=settings.DEBUG
)

# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_HOSTS or ["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

def start_subscriber():
    subscription_id = settings.SUBSCRIPTION_ID
    project_id = settings.PROJECT_ID
    logger.info(f"Project ID: {project_id} \n")
    logger.info(f"Subscription ID: {subscription_id} \n")
    subscriber = pubsub_v1.SubscriberClient()
    subscription_path = subscriber.subscription_path(project_id, subscription_id)
    streaming_pull_future = subscriber.subscribe(subscription_path, callback=callbackProcces)
    logger.info(f"Listening for messages on {subscription_path}..\n")
    # Wrap subscriber in a 'with' block to automatically call close() when done.
    with subscriber:
        try:
            streaming_pull_future.result()
        except TimeoutError:
            streaming_pull_future.cancel()
            streaming_pull_future.result()


# Conexión a la base de datos
@app.on_event("startup")
async def startup():
    # Ejemplo de uso del logger
    logger.info('Levantando la aplicación en el puerto 5555')
    logger.info('Estado debug: ' + str(settings.DEBUG))
    
    subscriber_thread = threading.Thread(target=start_subscriber)
    subscriber_thread.start()
    logger.info("Pub/Sub subscriber started")
        

# Health Check
@app.get("/")
def read_root():
    return {"hello": "world"}