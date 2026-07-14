import { useState } from "react";
import api from "../api/api";
import PredictionCard from "./PredictionCard";

export default function UploadCard() {

    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleUpload = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        setImage(file);
        setPreview(URL.createObjectURL(file));
        setResult(null);

    };

    const loadSampleMRI = async () => {

        try {

            const response = await fetch("/sample/glioma1.jpg");

            const blob = await response.blob();

            const file = new File(
                [blob],
                "glioma1.jpg",
                {
                    type: "image/jpeg"
                }
            );

            setImage(file);
            setPreview(URL.createObjectURL(file));
            setResult(null);

        }

        catch (err) {

            console.error(err);
            alert("Unable to load sample MRI.");

        }

    };

    const handlePredict = async () => {

        if (!image) {
        alert("Please select an MRI image.");
        return;
        }

        const formData = new FormData();
        formData.append("file", image);

        setLoading(true);

        try {

        const response = await api.post(
            "/predict",
            formData
        );

        setResult(response.data);

        }

        catch (err) {

        console.error(err);
        alert("Prediction failed.");

        }

        finally {

        setLoading(false);

     }

    };

    return (

        <div className="bg-white rounded-2xl shadow-xl p-8">

            <h2 className="text-3xl font-bold text-slate-800 mb-6">

                Upload MRI Scan

            </h2>

            <input
                type="file"
                accept="image/*"
                onChange={handleUpload}
                className="block w-full border rounded-lg p-3"
            />

            <div className="flex gap-4 mt-6">

                <button
                    onClick={handlePredict}
                    disabled={loading}
                    className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-xl transition"
                >

                    {loading ? "Analyzing MRI..." : "Analyze MRI"}

                </button>

                <button
                    onClick={loadSampleMRI}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 rounded-xl transition"
                >

                    Try Sample MRI

                </button>

            </div>

            {result && (

                <PredictionCard
                    result={result}
                    preview={preview}
                />

            )}

        </div>

    );

}
