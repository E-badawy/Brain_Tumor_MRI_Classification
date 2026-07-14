import tensorflow as tf
import numpy as np
import cv2


def make_gradcam_heatmap(img_array, model, last_conv_layer_name="conv2d_8"):

    # Forward pass
    with tf.GradientTape() as tape:

        x = img_array

        last_conv_output = None

        for layer in model.layers:

            x = layer(x)

            if layer.name == last_conv_layer_name:
                last_conv_output = x
                tape.watch(last_conv_output)

        predictions = x

        pred_index = tf.argmax(predictions[0])

        class_score = predictions[:, pred_index]

    grads = tape.gradient(class_score, last_conv_output)

    if grads is None:
        raise ValueError(
            "Gradients could not be computed."
        )

    pooled_grads = tf.reduce_mean(
        grads,
        axis=(0, 1, 2)
    )

    last_conv_output = last_conv_output[0]

    heatmap = tf.reduce_sum(
        last_conv_output * pooled_grads,
        axis=-1
    )

    heatmap = tf.maximum(
        heatmap,
        0
    )

    heatmap /= tf.reduce_max(heatmap) + 1e-8

    return heatmap.numpy()


def overlay_heatmap(image, heatmap, alpha=0.4):

    # Convert PIL image to RGB NumPy array
    image = np.array(image.convert("RGB"))

    # Resize heatmap to match original image
    heatmap = cv2.resize(
        heatmap,
        (image.shape[1], image.shape[0])
    )

    # Normalize and convert to uint8
    heatmap = np.uint8(255 * heatmap)

    # Apply color map (returns BGR)
    heatmap = cv2.applyColorMap(
        heatmap,
        cv2.COLORMAP_JET
    )

    # Convert original image from RGB to BGR
    image_bgr = cv2.cvtColor(
        image,
        cv2.COLOR_RGB2BGR
    )

    # Blend
    overlay = cv2.addWeighted(
        image_bgr,
        1 - alpha,
        heatmap,
        alpha,
        0
    )

    return overlay