# from fastapi import FastAPI
# from concurrent.futures import TimeoutError
# from google.cloud import pubsub_v1
# from fastapi.middleware.cors import CORSMiddleware
# import os
# from sqlalchemy import inspect
# # CONFIG
# from job.core.config import settings
# from job.core.logger_config import logger

# from job.db.session import engine
# from job.db.base import Base
# #RUTAS DEL API
# from job.api.routers import tasks
# from job.worker import callbackProcces
# import threading

# # Crea una instancia de FastAPI
# app = FastAPI(
#     title=settings.APP_NAME,
#     version=settings.APP_VERSION,
#     description=settings.APP_DESCRIPTION,
#     debug=settings.DEBUG
# )

# # Configurar CORS
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=settings.ALLOWED_HOSTS or ["*"],
#     allow_credentials=True,
#     allow_methods=["GET", "POST", "OPTIONS"],
#     allow_headers=["*"],
# )

# def start_subscriber():
#     subscription_id = settings.SUBSCRIPTION_ID
#     project_id = settings.PROJECT_ID
#     print("Project ID: " + project_id)
#     print("Subscription ID: " + subscription_id)
#     subscriber = pubsub_v1.SubscriberClient()
#     subscription_path = subscriber.subscription_path(project_id, subscription_id)
#     streaming_pull_future = subscriber.subscribe(subscription_path, callback=callbackProcces)
#     print("Listening for messages on " + subscription_path)
#     # Wrap subscriber in a 'with' block to automatically call close() when done.
#     with subscriber:
#         try:
#             streaming_pull_future.result()
#         except TimeoutError:
#             streaming_pull_future.cancel()
#             streaming_pull_future.cancel()
#         except KeyboardInterrupt:
#             streaming_pull_future.cancel()
#             streaming_pull_future.cancel()


# # Conexión a la base de datos
# @app.on_event("startup")
# async def startup():
#     # Ejemplo de uso del logger
#     logger.info('Levantando la aplicación en el puerto 5555')
#     logger.info('Estado debug: ' + str(settings.DEBUG))
#     inspector = inspect(engine)
#     existing_tables = inspector.get_table_names()
#     if not existing_tables:
#         Base.metadata.create_all(bind=engine)
#     else:
#         logger.info('Las tablas ya existen en la base de datos.')
        
#     subscriber_thread = threading.Thread(target=start_subscriber)
#     subscriber_thread.start()
#     logger.info("Pub/Sub subscriber started")


# # # desconexión de la base de datos  
# @app.on_event("shutdown")
# async def shutdown():
#     logger.info('Apagando la aplicación')
#     # Eliminar carpetas
#     if os.path.exists(settings.PUBLIC_DIR_PROCESSED):
#         os.rmdir(settings.PUBLIC_DIR_PROCESSED)
#     if os.path.exists(settings.PUBLIC_DIR_NOT_PROCESSED):
#         os.rmdir(settings.PUBLIC_DIR_NOT_PROCESSED)
    

# # Health Check
# @app.get("/")
# def read_root():
#     return {"hello": "world"}


# app.include_router(tasks.router)
