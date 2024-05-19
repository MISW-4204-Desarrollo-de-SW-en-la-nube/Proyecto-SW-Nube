from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello World"}

@app.get("/items/{item_id}/{q}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}


## Se ejecuta con: 
# hypercorn hyper.main:app --worker-class trio --reload --bind 0.0.0.0:8081
#  curl -i --http2-prior-knowledge http://localhost:8081