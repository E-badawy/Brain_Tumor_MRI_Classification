export default function StatCard({
    title,
    value,
    suffix = "",
    color = "blue"
}) {

    const colors = {
        blue: "text-blue-700",
        green: "text-green-600",
        purple: "text-purple-600",
        red: "text-red-600"
    };

    return (

        <div className="bg-white rounded-2xl shadow-lg p-6">

            <p className="text-gray-500 text-sm">

                {title}

            </p>

            <h2 className={`text-4xl font-bold mt-3 ${colors[color]}`}>

                {value}{suffix}

            </h2>

        </div>

    );

}