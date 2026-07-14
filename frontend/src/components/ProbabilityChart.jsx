export default function ProbabilityChart({ probabilities }) {

    if (!probabilities) return null;

    return (

        <div className="mt-8">

            <h3 className="text-lg font-bold mb-4">

                Class Probabilities

            </h3>

            {

                Object.entries(probabilities).map(

                    ([label, value]) => (

                        <div
                            key={label}
                            className="mb-5"
                        >

                            <div className="flex justify-between mb-1">

                                <span className="font-medium">

                                    {label}

                                </span>

                                <span>

                                    {value.toFixed(2)}%

                                </span>

                            </div>

                            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">

                                <div
                                    className="bg-blue-600 h-4 rounded-full transition-all duration-1000"
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

    );

}