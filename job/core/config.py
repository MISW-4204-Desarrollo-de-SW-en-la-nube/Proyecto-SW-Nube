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
    "http://localhost:5555",
    "*"
]

class Settings(BaseSettings):
    APP_NAME: str = "IDRL-APP"
    APP_VERSION: str = "1.1.0"
    APP_DESCRIPTION: str = description
    DEBUG: bool = None
    DB_URL: str = None
    ALLOWED_HOSTS: list = origins
    SUBSCRIPTION_ID: str = None
    PROJECT_ID: str = None
    
    
    class Config:
        env_file = "../.env"
 
settings = Settings()