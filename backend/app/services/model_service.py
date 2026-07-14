import tensorflow as tf
import numpy as np
from PIL import Image
from app.services.gradcam_service import (
    make_gradcam_heatmap,
    overlay_heatmap,
)

import uuid
import os
import cv2

from app.config import MODEL_PATH, GRADCAM_FOLDER

model = tf.keras.models.load_model(MODEL_PATH)

CLASS_NAMES = [
    "Glioma Tumor",
    "Meningioma Tumor",
    "No Tumor",
    "Pituitary Tumor"
]


def preprocess_image(image: Image.Image):
    image = image.convert("RGB")
    image = image.resize((224, 224))

    image = np.array(image, dtype=np.float32) / 255.0

    image = np.expand_dims(image, axis=0)

    return image


def predict(image: Image.Image):

    processed = preprocess_image(image)

    predictions = model.predict(processed, verbose=0)[0]

    predicted_index = np.argmax(predictions)

    confidence = round(float(predictions[predicted_index]) * 100, 2)

    probabilities = {
        CLASS_NAMES[i]: round(float(predictions[i]) * 100, 2)
        for i in range(len(CLASS_NAMES))
    }

    # Generate Grad-CAM
    heatmap = make_gradcam_heatmap(
        processed,
        model,
        "conv2d_8",
    )

    overlay = overlay_heatmap(
        image,
        heatmap,
    )

    filename = f"{uuid.uuid4().hex}.jpg"

    save_path = os.path.join(
        GRADCAM_FOLDER,
        filename,
    )

    cv2.imwrite(
        save_path,
        overlay,
    )
    BACKEND_URL = "https://brain-tumor-mri-classification-k8sx.onrender.com"

return {
    "prediction": CLASS_NAMES[predicted_index],
    "confidence": confidence,
    "probabilities": probabilities,
    "gradcam": f"{BACKEND_URL}/static/gradcam/{filename}",
}
