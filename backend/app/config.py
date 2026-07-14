from pathlib import Path

from dotenv import load_dotenv
import os

load_dotenv()

BASE_DIR = Path(__file__).resolve().parent.parent

MODEL_PATH = os.getenv(
    "MODEL_PATH",
    "app/trained_models/brain_tumor_cnn.keras",
)

GRADCAM_FOLDER = os.getenv(
    "GRADCAM_FOLDER",
    "app/static/gradcam",
)