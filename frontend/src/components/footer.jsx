import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaBrain
} from "react-icons/fa";

export default function Footer() {

    return (

        <footer className="bg-slate-900 text-gray-300 mt-20">

            <div className="max-w-7xl mx-auto px-8 py-14">

                <div className="grid md:grid-cols-3 gap-10">

                    <div>

                        <div className="flex items-center gap-3">

                            <FaBrain
                                className="text-blue-400"
                                size={30}
                            />

                            <h2 className="text-2xl font-bold text-white">

                                Brain MRI AI

                            </h2>

                        </div>

                        <p className="mt-5 leading-7 text-gray-400">

                            An end-to-end Deep Learning platform for automated
                            Brain Tumor MRI classification using TensorFlow,
                            FastAPI and React.

                        </p>

                    </div>

                    <div>

                        <h3 className="text-white font-bold mb-4">

                            Technologies

                        </h3>

                        <ul className="space-y-2">

                            <li>TensorFlow / Keras</li>

                            <li>FastAPI</li>

                            <li>React + Vite</li>

                            <li>Tailwind CSS</li>

                            <li>Python</li>

                        </ul>

                    </div>

                    <div>

                        <h3 className="text-white font-bold mb-4">

                            Connect

                        </h3>

                        <div className="space-y-4">

                            <div className="flex items-center gap-3">

                                <FaGithub />

                                <span>github.com/e-badawy</span>

                            </div>

                            <div className="flex items-center gap-3">

                                <FaLinkedin />

                                <span>https://linkedin.com/in/elameenabdawy</span>

                            </div>

                            <div className="flex items-center gap-3">

                                <FaEnvelope />

                                <span>Email</span>

                            </div>

                        </div>

                    </div>

                </div>

                <hr className="my-10 border-slate-700" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                    <p>

                        © 2026 Badawi Amin Muhammed

                    </p>

                    <p>

                        Brain MRI Classification • Version 1.0

                    </p>

                </div>

            </div>

        </footer>

    );

}