import { Link } from "react-router-dom";
import { FaBrain } from "react-icons/fa6";
import { MdMedicalServices } from "react-icons/md";
import { BsRobot } from "react-icons/bs";

import StatCard from "../components/StatCard";

export default function Home() {

    return (

        <div className="min-h-screen bg-slate-100">

            <section className="max-w-7xl mx-auto px-8 py-20">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div>

                        <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">

                            <FaBrain className="mr-2" />

                            AI Medical Imaging

                        </div>

                        <h1 className="text-6xl font-extrabold text-slate-800 leading-tight">

                            Brain Tumor MRI

                            <span className="text-blue-700">

                                {" "}Classification

                            </span>

                        </h1>

                        <p className="mt-8 text-xl text-slate-600 leading-relaxed">

                            An end-to-end Deep Learning application capable of
                            classifying Brain MRI scans into four clinically
                            relevant categories using Convolutional Neural
                            Networks (CNNs).

                        </p>

                        <Link
                            to="/predict"
                            className="inline-block mt-10 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition duration-300"
                        >

                            Start Prediction

                        </Link>

                    </div>

                    <div className="grid gap-6">

                        <div className="bg-white rounded-2xl shadow-xl p-8">

                            <FaBrain
                                size={45}
                                className="text-blue-700"
                            />

                            <h2 className="mt-4 text-2xl font-bold">

                                CNN Powered

                            </h2>

                            <p className="mt-2 text-slate-600">

                                A custom-built Convolutional Neural Network
                                trained on Brain MRI images.

                            </p>

                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8">

                            <MdMedicalServices
                                size={45}
                                className="text-green-600"
                            />

                            <h2 className="mt-4 text-2xl font-bold">

                                Medical AI

                            </h2>

                            <p className="mt-2 text-slate-600">

                                Classifies Glioma, Meningioma, Pituitary Tumor
                                and No Tumor MRI scans.

                            </p>

                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8">

                            <BsRobot
                                size={45}
                                className="text-purple-600"
                            />

                            <h2 className="mt-4 text-2xl font-bold">

                                Fast Prediction

                            </h2>

                            <p className="mt-2 text-slate-600">

                                Upload an MRI image and receive AI predictions
                                within seconds.

                            </p>

                        </div>

                    </div>

                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-20">

                    <StatCard
                        title="Tumor Classes"
                        value={4}
                        color="blue"
                    />

                    <StatCard
                        title="MRI Images"
                        value={7200}
                        color="green"
                    />

                    <StatCard
                        title="Test Accuracy"
                        value={77.0}
                        suffix="%"
                        color="purple"
                    />

                </div>

            </section>

        </div>

    );

}