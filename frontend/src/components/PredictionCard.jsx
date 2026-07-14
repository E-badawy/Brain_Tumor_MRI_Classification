import {
    Brain,
    Activity,
    ShieldCheck,
    AlertTriangle,
    CheckCircle2
} from "lucide-react";

function Gauge({ value }) {

    const radius = 70;
    const stroke = 10;

    const normalizedRadius = radius - stroke * 2;

    const circumference = normalizedRadius * 2 * Math.PI;

    const offset =
        circumference -
        (value / 100) * circumference;

    return (

        <div className="flex justify-center">

            <svg
                height={radius * 2}
                width={radius * 2}
                className="-rotate-90"
            >

                <circle
                    stroke="#E5E7EB"
                    fill="transparent"
                    strokeWidth={stroke}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />

                <circle
                    stroke="#2563EB"
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeLinecap="round"
                    strokeDasharray={`${circumference} ${circumference}`}
                    strokeDashoffset={offset}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />

            </svg>

            <div className="absolute mt-12 text-center">

                <h2 className="text-3xl font-bold text-blue-700">

                    {value.toFixed(1)}%

                </h2>

                <p className="text-sm text-gray-500">

                    Confidence

                </p>

            </div>

        </div>

    );

}

function Badge({ prediction }) {

    let bg = "bg-blue-100 text-blue-700";
    let icon = <Brain size={18} />;

    if (prediction.includes("No")) {

        bg = "bg-green-100 text-green-700";
        icon = <CheckCircle2 size={18} />;

    }

    else if (prediction.includes("Glioma")) {

        bg = "bg-red-100 text-red-700";
        icon = <AlertTriangle size={18} />;

    }

    else if (prediction.includes("Meningioma")) {

        bg = "bg-yellow-100 text-yellow-700";
        icon = <ShieldCheck size={18} />;

    }

    else if (prediction.includes("Pituitary")) {

        bg = "bg-purple-100 text-purple-700";
        icon = <Activity size={18} />;

    }

    return (

        <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold ${bg}`}
        >

            {icon}

            {prediction}

        </div>

    );

}

function StatCard({
    title,
    value,
    icon
}) {

    return (

        <div className="bg-white rounded-2xl shadow-lg p-6 border">

            <div className="flex justify-between items-center">

                <div>

                    <p className="text-gray-500">

                        {title}

                    </p>

                    <h3 className="text-2xl font-bold mt-2">

                        {value}

                    </h3>

                </div>

                <div className="text-blue-700">

                    {icon}

                </div>

            </div>

        </div>

    );

}

export default function PredictionCard({

    result,
    preview

}) {

    if (!result) return null;

    return (

        <div className="mt-10 space-y-8">

            <div className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-3xl shadow-2xl text-white p-10">

                <h1 className="text-4xl font-bold">

                    Brain MRI Analysis

                </h1>

                <p className="mt-3 text-blue-100">

                    Deep Learning Classification Result

                </p>

            </div>

            <div className="grid lg:grid-cols-2 gap-8">

                <div className="bg-white rounded-3xl shadow-xl p-8">

                    <div className="flex justify-center">

                        <Badge prediction={result.prediction} />

                    </div>

                    <div className="mt-10 relative flex justify-center">

                        <Gauge
                            value={result.confidence}
                        />

                    </div>

                </div>

                <div className="grid grid-cols-2 gap-5">

                    <StatCard
                        title="Prediction"
                        value={result.prediction}
                        icon={<Brain size={28} />}
                    />

                    <StatCard
                        title="Confidence"
                        value={`${result.confidence}%`}
                        icon={<Activity size={28} />}
                    />

                    <StatCard
                        title="Classes"
                        value="4"
                        icon={<ShieldCheck size={28} />}
                    />

                    <StatCard
                        title="Model"
                        value="CNN"
                        icon={<Brain size={28} />}
                    />

                </div>

            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">

                <h2 className="text-2xl font-bold mb-8">

                    Prediction Probabilities

                </h2>

                {

                    Object.entries(result.probabilities).map(

                        ([label, value]) => (

                            <div
                                key={label}
                                className="mb-6"
                            >

                                <div className="flex justify-between mb-2">

                                    <span className="font-medium">

                                        {label}

                                    </span>

                                    <span className="font-bold">

                                        {value}%

                                    </span>

                                </div>

                                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">

                                    <div
                                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-700"
                                        style={{
                                            width: `${value}%`
                                        }}
                                    />

                                </div>

                            </div>

                        )

                    )

                }

            </div>
              <div className="bg-white rounded-3xl shadow-xl p-8">

                <h2 className="text-2xl font-bold mb-8">

                    Explainable AI (Grad-CAM)

                </h2>

                <div className="grid lg:grid-cols-2 gap-8">

                    <div>

                        <h3 className="text-lg font-semibold mb-4">

                            Original MRI

                        </h3>

                        <div className="rounded-2xl overflow-hidden border shadow">

                            <img
                                src={preview}
                                alt="Original MRI"
                                className="w-full object-cover"
                            />

                        </div>

                    </div>

                    <div>

                        <h3 className="text-lg font-semibold mb-4">

                            Grad-CAM Heatmap

                        </h3>

                        <div className="rounded-2xl overflow-hidden border shadow">

                            <img
                                src={`http://127.0.0.1:8000${result.gradcam}`}
                                alt="Grad-CAM"
                                className="w-full object-cover"
                            />

                        </div>

                    </div>

                </div>

                <div className="mt-8 p-6 rounded-2xl bg-blue-50 border border-blue-200">

                    <h3 className="text-lg font-bold text-blue-700 mb-3">

                        Clinical Interpretation

                    </h3>

                    <p className="text-gray-700 leading-7">

                        The Grad-CAM visualization highlights the image regions
                        that contributed most strongly to the CNN's prediction.
                        Warmer colors (red and yellow) indicate higher influence,
                        while cooler colors (blue) indicate lower influence.
                        This visualization provides model explainability and
                        should be interpreted as an aid to clinical assessment
                        rather than a definitive localization of pathology.

                    </p>

                </div>

            </div>

            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 text-center text-white shadow-2xl">

                <Brain
                    size={44}
                    className="mx-auto mb-4 text-cyan-400"
                />

                <h2 className="text-2xl font-bold">

                    Brain Tumor MRI Classification System

                </h2>

                <p className="mt-3 text-slate-300">

                    CNN • TensorFlow • FastAPI • React • Grad-CAM

                </p>

                <p className="mt-2 text-sm text-slate-400">

                    This application is intended for research and educational
                    purposes and is not a substitute for professional medical
                    diagnosis.

                </p>

            </div>

        </div>

    );

}