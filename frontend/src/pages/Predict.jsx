import UploadCard from "../components/UploadCard";
import { FaBrain } from "react-icons/fa6";

export default function Predict() {

    return (

        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-100 to-indigo-100">

            <div className="max-w-7xl mx-auto px-8 py-16">

                <div className="mb-12">

                    <div className="inline-flex items-center gap-3 bg-white shadow-md rounded-full px-5 py-2">

                        <FaBrain
                            className="text-blue-700"
                            size={24}
                        />

                        <span className="font-semibold text-blue-700">

                            AI Medical Imaging

                        </span>

                    </div>

                    <h1 className="mt-6 text-5xl font-extrabold text-slate-800">

                        Brain MRI Analysis

                    </h1>

                    <p className="mt-4 text-lg text-slate-600 max-w-3xl">

                        Upload a Brain MRI image and receive an AI-powered
                        prediction using a Convolutional Neural Network trained
                        to classify four clinically relevant categories.

                    </p>

                </div>

                <UploadCard />

            </div>

        </div>

    );

}