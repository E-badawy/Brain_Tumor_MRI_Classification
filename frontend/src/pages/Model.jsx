export default function Model() {

    const metrics = [
        {
            title: "Test Accuracy",
            value: "77.0%"
        },
        {
            title: "Tumor Classes",
            value: "4"
        },
        {
            title: "MRI Images",
            value: "7,200"
        },
        {
            title: "Framework",
            value: "TensorFlow"
        }
    ];

    const report = [
        {
            cls: "Glioma",
            precision: "0.76",
            recall: "0.72",
            f1: "0.74"
        },
        {
            cls: "Meningioma",
            precision: "0.80",
            recall: "0.39",
            f1: "0.52"
        },
        {
            cls: "No Tumor",
            precision: "0.71",
            recall: "1.00",
            f1: "0.83"
        },
        {
            cls: "Pituitary",
            precision: "0.83",
            recall: "0.98",
            f1: "0.90"
        }
    ];

    const technologies = [
        "TensorFlow / Keras",
        "FastAPI",
        "React",
        "Tailwind CSS",
        "NumPy",
        "OpenCV",
        "Scikit-learn",
        "Matplotlib",
        "Python"
    ];

    return (

        <div className="min-h-screen bg-slate-100">

            <div className="max-w-7xl mx-auto px-8 py-14">

                <h1 className="text-5xl font-bold text-slate-800">

                    CNN Model Performance

                </h1>

                <p className="mt-4 text-lg text-slate-600">

                    Performance evaluation of the Brain Tumor MRI Classification
                    model developed using TensorFlow and deployed with FastAPI
                    and React.

                </p>

                <div className="grid md:grid-cols-4 gap-6 mt-12">

                    {metrics.map((item) => (

                        <div
                            key={item.title}
                            className="bg-white rounded-2xl shadow-lg p-6"
                        >

                            <p className="text-gray-500">

                                {item.title}

                            </p>

                            <h2 className="text-3xl font-bold text-blue-700 mt-3">

                                {item.value}

                            </h2>

                        </div>

                    ))}

                </div>

                <section className="mt-14">

                    <h2 className="text-3xl font-bold mb-6">

                        CNN Architecture

                    </h2>

                    <img
                        src="/images/cnn_architecture.png"
                        alt="CNN Architecture"
                        className="rounded-2xl shadow-xl w-full bg-white p-4"
                    />

                    <div className="mt-6 bg-white rounded-2xl shadow-md p-6">

                    <h3 className="text-xl font-semibold mb-3">

                    Interpretation

                    </h3>

                        <p className="text-slate-600 leading-8">

                            The proposed Convolutional Neural Network (CNN) consists of three
                            convolutional blocks, each followed by Batch Normalization and
                             MaxPooling layers for hierarchical feature extraction. Instead of a
                             traditional Flatten layer, the architecture employs
                             GlobalAveragePooling2D to significantly reduce the number of trainable
                             parameters while minimizing overfitting. The extracted feature vectors
                             are passed through fully connected layers with Dropout regularization
                             before the final Softmax layer performs multi-class classification into
                             four brain MRI categories.

                         </p>

                </div>

                </section>

                <section className="mt-16">

                    <h2 className="text-3xl font-bold mb-6">

                        Training Curves

                    </h2>

                    <img
                        src="/images/training_curves.png"
                        alt="Training Curves"
                        className="rounded-2xl shadow-xl w-full bg-white p-4"
                    />

                    <div className="mt-6 bg-white rounded-2xl shadow-md p-6">

                    <h3 className="text-xl font-semibold mb-3">

                      Interpretation

                    </h3>

                    <p className="text-slate-600 leading-8">

                    The training accuracy increased steadily throughout the learning
                    process, while the training loss consistently decreased, indicating
                    successful optimization of the CNN. Validation accuracy improved during
                    the early epochs before stabilizing around the best performance,
                    accompanied by fluctuations in the validation loss. These oscillations
                    suggest mild overfitting, which is common in medical imaging datasets
                    with limited diversity. The use of Batch Normalization, Dropout,
                    learning-rate scheduling, and Early Stopping helped control
                    overfitting while preserving the model's ability to generalize to
                    unseen MRI scans.

                    </p>

                </div>



                </section>

                <section className="mt-16">

                    <h2 className="text-3xl font-bold mb-6">

                        Confusion Matrix

                    </h2>

                    <img
                        src="/images/confusion_matrix.png"
                        alt="Confusion Matrix"
                        className="rounded-2xl shadow-xl w-full bg-white p-4"
                    />

                </section>

                <section className="mt-16">

                    <h2 className="text-3xl font-bold mb-6">

                        Classification Report

                    </h2>

                    <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">

                        <table className="w-full">

                            <thead className="bg-blue-700 text-white">

                                <tr>

                                    <th className="p-4 text-left">

                                        Class

                                    </th>

                                    <th className="p-4">

                                        Precision

                                    </th>

                                    <th className="p-4">

                                        Recall

                                    </th>

                                    <th className="p-4">

                                        F1-Score

                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {report.map((row) => (

                                    <tr
                                        key={row.cls}
                                        className="border-b"
                                    >

                                        <td className="p-4 font-semibold">

                                            {row.cls}

                                        </td>

                                        <td className="text-center">

                                            {row.precision}

                                        </td>

                                        <td className="text-center">

                                            {row.recall}

                                        </td>

                                        <td className="text-center">

                                            {row.f1}

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </section>

                <section className="mt-16">

                    <h2 className="text-3xl font-bold mb-6">

                        Technologies Used

                    </h2>

                    <div className="grid md:grid-cols-3 gap-4">

                        {technologies.map((tech) => (

                            <div
                                key={tech}
                                className="bg-white rounded-xl shadow-md p-5 font-medium"
                            >

                                {tech}

                            </div>

                        ))}

                    </div>

                </section>

            </div>

        </div>

    );

}