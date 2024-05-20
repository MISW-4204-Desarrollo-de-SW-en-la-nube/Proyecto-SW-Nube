# Copyright 2019 Google, LLC.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# [START cloudrun_pubsub_server]

# import flast module
from flask import Flask, request
import base64
from job.video_transform import transform_video


# instance of flask application
app = Flask(__name__)

# [END cloudrun_pubsub_server]

# [START cloudrun_pubsub_handler]
@app.route("/", methods=["POST"])
def index():
    """Receive and parse Pub/Sub messages."""
    envelope = request.get_json()
    if not envelope:
        msg = "no Pub/Sub message received"
        print(f"error: {msg}")
        return f"Bad Request: {msg}", 400
    #print(f"envelope: {envelope}")
    
    if not isinstance(envelope, dict) or "message" not in envelope:
        msg = "invalid Pub/Sub message format"
        print(f"error: {msg}")
        return f"Bad Request: {msg}", 400

    pubsub_message = envelope["message"]
    print(f"pubsub_message: {pubsub_message}")

    taskId = ""
    if isinstance(pubsub_message, dict) and "data" in pubsub_message:
        taskId = base64.b64decode(pubsub_message["data"]).decode("utf-8").strip()

    print(f"Processing task id: {taskId}")

    # Call the video transformation function
    if taskId != "":
        transform_video(taskId)

    return ("", 204)

# [END cloudrun_pubsub_handler]



if __name__ == '__main__':  
   app.run("main:app")