import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FaCloudUploadAlt } from "react-icons/fa";

export default function UploadZone({ onFileSelect }) {

    const onDrop = useCallback((acceptedFiles) => {

        if (acceptedFiles.length > 0) {
            onFileSelect(acceptedFiles[0]);
        }

    }, [onFileSelect]);

    const {
        getRootProps,
        getInputProps,
        isDragActive
    } = useDropzone({

        onDrop,

        accept: {
            "image/*": []
        },

        multiple: false

    });

    return (

        <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-all
                ${
                    isDragActive
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-300 bg-white hover:border-blue-500"
                }`}
        >

            <input {...getInputProps()} />

            <FaCloudUploadAlt
                className="mx-auto text-blue-600 mb-4"
                size={60}
            />

            <h2 className="text-xl font-bold">

                Drag & Drop MRI Image

            </h2>

            <p className="text-gray-500 mt-2">

                or click to browse

            </p>

        </div>

    );

}