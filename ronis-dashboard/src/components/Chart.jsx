import { Bar } from "react-chartjs-2";

export default function Chart({ text, labels, quantities }) {
    const barChartOptions = {
        responsive: true,
        plugins: { legend: { display: false } },
        indexAxis: "y",
        scales: {
            x: { beginAtZero: true, ticks: { color: "#000" } },
            y: { ticks: { color: "#000" } },
        },
        animation: {
            duration: 1500,
            easing: "easeInOutQuad",
        },
    };
    return (
        <div className="bg-[#FCCB77] p-6 rounded-lg shadow-lg border border-[#B97400] max-w-6xl">
            <h2 className="text-center text-black font-bold mb-4 text-2xl">
                {text}
            </h2>
            <Bar
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: "Quantity",
                            data: quantities,
                            backgroundColor: "#FCCB77",
                            borderColor: "#B97400",
                            borderWidth: 2,
                        },
                    ],
                }}
                options={barChartOptions}
            />
        </div>
    );
}
