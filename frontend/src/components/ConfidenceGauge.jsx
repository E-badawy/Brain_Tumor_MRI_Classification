export default function ConfidenceGauge({ confidence }) {

    const radius = 70;
    const stroke = 12;

    const normalizedRadius = radius - stroke * 2;

    const circumference = normalizedRadius * 2 * Math.PI;

    const offset =
        circumference -
        (confidence / 100) * circumference;

    let color = "#2563eb";

    if (confidence >= 90)
        color = "#16a34a";

    else if (confidence >= 70)
        color = "#eab308";

    else
        color = "#dc2626";

    return (

        <div className="flex justify-center my-8">

            <svg
                width="170"
                height="170"
            >

                <circle
                    stroke="#e5e7eb"
                    fill="transparent"
                    strokeWidth={stroke}
                    r={normalizedRadius}
                    cx="85"
                    cy="85"
                />

                <circle
                    stroke={color}
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    r={normalizedRadius}
                    cx="85"
                    cy="85"
                    style={{
                        transition: "stroke-dashoffset 1s ease"
                    }}
                />

                <text
                    x="85"
                    y="80"
                    textAnchor="middle"
                    fontSize="28"
                    fontWeight="bold"
                >

                    {confidence.toFixed(1)}

                </text>

                <text
                    x="85"
                    y="105"
                    textAnchor="middle"
                    fontSize="16"
                    fill="#6b7280"
                >

                    %

                </text>

            </svg>

        </div>

    );

}