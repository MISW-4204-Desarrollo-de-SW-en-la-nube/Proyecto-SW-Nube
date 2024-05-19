from pydantic.v1 import BaseSettings, Field
from dotenv import load_dotenv

load_dotenv()

description = """
# International FPV Drone Racing League - App. 🚀

Proyecto de la materia Desarrollo de software en la nube - Equipo #N.

## Integrantes del equipo

| Nombre                              | Correo                             |
| ----------------------------------- | ---------------------------------- |
| Paula Alejandra Bohorquez Alfonso   | p.bohorqueza@uniandes.edu.co       |
| Oscar Andrés García                 | oa.garcia2@uniandes.edu.co         |
| Felipe Valencia                     | jf.valencia23@uniandes.edu.co      |
| Nicolás Potier Anzola               | n.potier@uniandes.edu.co           |
	

## Users
"""

origins = [
    "http://localhost",
    "http://localhost:8081",
    "*"
]

class Settings(BaseSettings):
    APP_NAME: str = "IDRL-APP"
    APP_VERSION: str = "1.1.0"
    APP_DESCRIPTION: str = description
    DEBUG: bool = None
    INSTANCE_HOST: str = None
    DB_USER: str = None
    DB_PASS: str = None
    DB_NAME: str = None
    DB_PORT: str = None
    # INSTANCE_UNIX_SOCKET: str = None
    SECRET_KEY: str = None
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 180
    ALLOWED_HOSTS: list = origins
    PUBLIC_DIR_NOT_PROCESSED: str = "public/uploaded"
    PUBLIC_DIR_PROCESSED: str = "public/processed"
    PUBLIC_DIR: str = "public"
    BUCKET_NAME: str = None
    TOPIC_NAME: str = None
    
    
    class Config:
        env_file = "../.env"
 
settings = Settings()