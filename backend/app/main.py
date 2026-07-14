import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from app.routes.predict import router as predict_router
from app.routes.health import router as health_router

app = FastAPI(
    title="Brain Tumor MRI Classification API",
    version="1.0.0"
)

os.makedirs("app/static/gradcam", exist_ok=True)

app.mount(
    "/static",
    StaticFiles(directory="app/static"),
    name="static",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://brain-tumor-mri-classification.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health_router)
app.include_router(predict_router)

@app.get("/")
def root():
    return {
        "message": "Brain Tumor MRI Classification API is running."
    }
