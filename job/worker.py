from concurrent.futures import TimeoutError
from google.cloud import pubsub_v1
from job.core.logger_config import logger
from job.video_transform import transform_video


def callbackProcces(message: pubsub_v1.subscriber.message.Message) -> None:
    try:
        task_id  = message.data.decode('utf-8')
        logger.info(f"Received TaskId: {task_id} \n")
        
        # validar si es un numero
        if not task_id.isdigit():
            logger.error(f'Error: The message content  {task_id} is not a number.')
            message.ack()
            return
        logger.info(f"This procces has {message.delivery_attempt} attempts. Since 3 attempts")
        if not process_message(task_id):
            if message.delivery_attempt < 3:
                logger.info(f'Retrying processing of message {task_id}...')
                message.nack()
            else:
                logger.error(f'Error: The message {task_id} has exceeded the maximum number of attempts.')
                message.ack()

    except Exception as e:
        logger.error(f'Error al procesar mensaje: {e}')

def process_message(task_id: str) -> bool:
    try:
        logger.info(f"Init process for task_id: {task_id}")
        transform_video(task_id)
        logger.info(f'Process for task_id {task_id} has been completed successfully. \n')
        return True
    except Exception as e:
        logger.error(f'Error: The process for task_id {task_id} has failed.')
        return False

