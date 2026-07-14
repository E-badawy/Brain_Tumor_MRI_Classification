from fastapi import APIRouter, UploadFile, File, HTTPException
from PIL import Image
import io

from app.services.model_service import predict

router = APIRouter(tags=["Prediction"])


@router.post("/predict")
async def predict_image(file: UploadFile = File(...)):

    try:
        image_bytes = await file.read()

        image = Image.open(io.BytesIO(image_bytes))

        return predict(image)

    except Exception as e:
        import traceback

        traceback.print_exc()

        raise HTTPException(
            status_code=400,
            detail=str(e)
        )