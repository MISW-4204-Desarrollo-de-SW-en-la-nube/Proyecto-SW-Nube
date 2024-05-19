import sqlalchemy
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.core.config import settings

# motor de base de datos
# engine = create_engine(settings.DB_URL)

def connect_unix_socket():
    """Initializes a Unix socket connection pool for a Cloud SQL instance of Postgres."""
    db_host = settings.INSTANCE_HOST  # e.g. '127.0.0.1' ('172.17.0.1' if deployed to GAE Flex)
    db_user = settings.DB_USER  # e.g. 'my-database-user'
    db_pass = settings.DB_PASS  # e.g. 'my-database-password'
    db_name = settings.DB_NAME  # e.g. 'my-database-name'
    db_port = settings.DB_PORT  # e.g. 5432
    # unix_socket_path = settings.INSTANCE_UNIX_SOCKET  # e.g. '/cloudsql'

    pool = create_engine(
        # Equivalent URL:
        # postgresql+pg8000://<db_user>:<db_pass>@<db_host>:<db_port>/<db_name>
        sqlalchemy.engine.url.URL.create(
            drivername="postgresql+pg8000",
            username=db_user,
            password=db_pass,
            host=db_host,
            port=db_port,
            database=db_name,
        ),
    )
    return pool

engine = connect_unix_socket()

# clase SessionLocal para manejar las sesiones de base de datos
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
