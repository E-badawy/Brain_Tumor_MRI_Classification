export default function ImagePreview({ preview }) {

    return (

        <div className="bg-white rounded-2xl shadow-xl p-6 h-full">

            <h2 className="text-xl font-bold mb-4">

                MRI Preview

            </h2>

            {preview ? (

                <img
                    src={preview}
                    alt="MRI Preview"
                    className="w-full h-80 object-contain rounded-xl border"
                />

            ) : (

                <div className="flex items-center justify-center h-80 border-2 border-dashed rounded-xl text-gray-400">

                    No image selected

                </div>

            )}

        </div>

    );

}