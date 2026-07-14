import {
    FaBrain,
    FaReact,
    FaPython,
    FaGithub
} from "react-icons/fa";

import {
    SiTensorflow,
    SiFastapi,
    SiTailwindcss
} from "react-icons/si";

export default function About() {

    const technologies = [

        {
            name: "TensorFlow / Keras",
            icon: <SiTensorflow className="text-orange-500 text-4xl" />
        },

        {
            name: "FastAPI",
            icon: <SiFastapi className="text-green-600 text-4xl" />
        },

        {
            name: "React",
            icon: <FaReact className="text-sky-500 text-4xl" />
        },

        {
            name: "Tailwind CSS",
            icon: <SiTailwindcss className="text-cyan-500 text-4xl" />
        },

        {
            name: "Python",
            icon: <FaPython className="text-yellow-500 text-4xl" />
        }

    ];

    return (

        <div className="min-h-screen bg-slate-100">

            <div className="max-w-7xl mx-auto px-8 py-16">

                <div className="text-center">

                    <FaBrain
                        className="mx-auto text-blue-700"
                        size={70}
                    />

                    <h1 className="mt-6 text-5xl font-bold text-slate-800">

                        About This Project

                    </h1>

                    <p className="mt-6 text-lg text-slate-600 max-w-4xl mx-auto leading-8">

                        This project presents an end-to-end Artificial
                        Intelligence solution for automated Brain Tumor MRI
                        classification using Deep Learning. A custom
                        Convolutional Neural Network (CNN) was developed to
                        classify MRI scans into four clinically relevant
                        categories: Glioma Tumor, Meningioma Tumor, Pituitary
                        Tumor, and No Tumor. The objective is to demonstrate
                        how modern AI techniques can support medical image
                        analysis by providing rapid, consistent, and reliable
                        preliminary predictions.

                    </p>

                </div>

                <section className="mt-16">

                    <h2 className="text-3xl font-bold mb-6">

                        Project Workflow

                    </h2>

                    <div className="bg-white rounded-2xl shadow-lg p-8">

                        <p className="leading-8 text-slate-600">

                            MRI Image →
                            Image Preprocessing →
                            CNN Feature Extraction →
                            Deep Learning Classification →
                            Probability Estimation →
                            Prediction Visualization →
                            AI-assisted Clinical Decision Support

                        </p>

                    </div>

                </section>

                <section className="mt-16">

                    <h2 className="text-3xl font-bold mb-8">

                        Technology Stack

                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">

                        {

                            technologies.map((tech) => (

                                <div
                                    key={tech.name}
                                    className="bg-white rounded-2xl shadow-lg p-8 text-center"
                                >

                                    {tech.icon}

                                    <h3 className="mt-4 text-xl font-semibold">

                                        {tech.name}

                                    </h3>

                                </div>

                            ))

                        }

                    </div>

                </section>

                <section className="mt-16 grid lg:grid-cols-2 gap-8">

                    <div className="bg-white rounded-2xl shadow-lg p-8">

                        <h2 className="text-2xl font-bold mb-4">

                            Current Limitations

                        </h2>

                        <ul className="space-y-3 text-slate-600 list-disc ml-6">

                            <li>Single MRI image prediction only.</li>

                            <li>No Grad-CAM explainability yet.</li>

                            <li>Research prototype only.</li>

                            <li>Not intended for clinical diagnosis.</li>

                        </ul>

                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8">

                        <h2 className="text-2xl font-bold mb-4">

                            Future Improvements

                        </h2>

                        <ul className="space-y-3 text-slate-600 list-disc ml-6">

                            <li>Grad-CAM explainability.</li>

                            <li>Transfer Learning models.</li>

                            <li>Cloud deployment.</li>

                            <li>User authentication.</li>

                            <li>Prediction history.</li>

                            <li>Clinical reporting.</li>

                        </ul>

                    </div>

                </section>

                <section className="mt-16">

                    <div className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-3xl text-white p-10 text-center">

                        <h2 className="text-3xl font-bold">

                            Developed by

                        </h2>

                        <p className="mt-4 text-xl">

                            Badawi Aminu Muhammed

                        </p>

                        <p className="mt-3 opacity-90">

                            AI / Machine Learning Engineer • Data Scientist • Research Analyst

                        </p>

                        <div className="mt-8 flex justify-center">

                            <FaGithub size={36} />

                        </div>

                    </div>

                </section>

            </div>

        </div>

    );

}