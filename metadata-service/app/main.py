from fastapi import FastAPI
from app.routes.tmdb_routes import router

app = FastAPI(title="Metadata Service")

app.include_router(router)


@app.get("/")
def root():
    return {"message": "Metadata service running"}