import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Line, Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

export default function Dashboard() {
    const [startDate, setStartDate] = useState(new Date("2024-04-27"));
    const [endDate, setEndDate] = useState(new Date("2024-05-16"));

    // Fixed sales data for the line chart
    const salesData = [300, 450, 350, 500, 320, 400];
    const chartData = {
        labels: ["April", "May", "June", "July", "August", "September"],
        datasets: [
            {
                label: "Sales",
                data: salesData,
                borderColor: "#000",
                backgroundColor: "#FCCB77",
                pointBackgroundColor: "#000",
                borderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 7,
            },
        ],
    };
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: { display: true, text: "Sales", color: "#000", font: { size: 18 } },
        },
        scales: {
            x: { ticks: { color: "#000" } },
            y: { beginAtZero: true, ticks: { color: "#000" } },
        },
        animation: {
            duration: 1000, // Animation duration in milliseconds
            easing: "easeOutBounce", // Easing function for the animation
        },
    };

    const topItems = [
        { name: "Mac & Cheese", quantity: 612 },
        { name: "Grilled Cheese", quantity: 514 },
        { name: "Mac & Cheese", quantity: 612 },
        { name: "Grilled Cheese", quantity: 514 },
        { name: "Mac & Cheese", quantity: 612 },
        { name: "Grilled Cheese", quantity: 514 },
    ];

    // Shared data for each bar chart with random values for demonstration
    const months = ["April", "May", "June", "July", "August"];
    const randomData = () => months.map(() => Math.floor(Math.random() * 600));

    const barChartOptions = {
        responsive: true,
        plugins: { legend: { display: false } },
        indexAxis: 'y',
        scales: {
            x: { beginAtZero: true, ticks: { color: "#000" } },
            y: { ticks: { color: "#000" } },
        },
        animation: {
            duration: 1500, // Animation duration in milliseconds
            easing: "easeInOutQuad", // Easing function for the animation
        },
    };

    const barChartDataTemplate = {
        labels: months,
        datasets: [
            {
                data: randomData(),
                backgroundColor: "#000",
                borderColor: "#000",
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="flex flex-col items-center justify-start min-h-screen p-6 pt-12" style={{ backgroundColor: "#F5B74E" }}>
            {/* Date Picker */}
            <div className="flex items-center gap-4 mb-4">
                <div className="bg-black text-white p-2 rounded-full">
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        dateFormat="MM/dd/yyyy"
                        className="bg-black text-white"
                    />
                </div>
                <span className="text-black font-bold">TO</span>
                <div className="bg-black text-white p-2 rounded-full">
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        dateFormat="MM/dd/yyyy"
                        className="bg-black text-white"
                    />
                </div>
            </div>

            {/* Statistics Box */}
            <div className="flex items-center rounded-lg p-6 shadow-lg text-center mt-6 w-3/4 max-w-md" style={{ backgroundColor: "#FCCB77", border: "2px solid #B97400" }}>
                <div className="flex-1 border-r border-gray-400 px-4">
                    <div className="text-black font-semibold">AI-Powered Score</div>
                    <div className="text-3xl font-bold text-black">91</div>
                </div>
                <div className="flex-1 border-r border-gray-400 px-4">
                    <div className="text-black font-semibold">Total Sales</div>
                    <div className="text-3xl font-bold text-black">416k</div>
                </div>
                <div className="flex-1 px-4">
                    <div className="text-black font-semibold">Total Sales Revenue</div>
                    <div className="text-3xl font-bold text-black">$1M</div>
                </div>
            </div>

            {/* Sales Chart and Top Items */}
            <div className="flex bg-[#FCCB77] rounded-lg p-6 shadow-lg w-full max-w-4xl mt-8">
                <div className="flex-1 p-4">
                    <Line data={chartData} options={chartOptions} />
                </div>
                <div className="flex-1 p-4 border-l border-[#B97400]">
                    <h2 className="text-center text-black font-bold mb-4">Top Items</h2>
                    <div className="flex justify-between text-black font-semibold mb-2">
                        <span>Item</span>
                        <span>Quantity</span>
                    </div>
                    {topItems.map((item, index) => (
                        <div key={index} className="flex justify-between text-black mb-1">
                            <span>{item.name}</span>
                            <span>{item.quantity}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Six Bar Charts for Categories */}
            <div className="grid grid-cols-3 gap-8 w-full max-w-6xl mt-8">
                {["Top Cheese", "Top Meats", "Top Toppings", "Top Drizzle", "Top Side", "Top Drink"].map((title, index) => (
                    <div key={index} className="bg-[#FCCB77] p-6 rounded-lg shadow-lg border border-[#B97400]">
                        <h2 className="text-center text-black font-bold mb-4">{title}</h2>
                        <Bar data={{ ...barChartDataTemplate, datasets: [{ ...barChartDataTemplate.datasets[0], data: randomData() }] }} options={barChartOptions} />
                    </div>
                ))}
            </div>

            {/* Monthly Sales Chart*/}
            <div className="flex bg-[#FCCB77] rounded-lg p-6 shadow-lg w-full max-w-4xl mt-8">
                <div className="flex-1 p-4">
                    <Line data={chartData} options={chartOptions} />
                </div>
            </div>
        </div>
    );
}