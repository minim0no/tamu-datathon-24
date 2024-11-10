import React, { useEffect, useRef, useState } from "react";
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
import Chart from "../components/Chart";

ChartJS.register(
    LineElement,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend
);

export default function Dashboard() {
    const [startDate, setStartDate] = useState(new Date("2024-04-27"));
    const [endDate, setEndDate] = useState(new Date("2024-08-16"));
    const [salesData, setSalesData] = useState([]);
    const [labels, setLabels] = useState([]);
    const [topMain, setTopMain] = useState([]);
    const [topCheese, setTopCheese] = useState([]);
    const [topMeats, setTopMeats] = useState([]);
    const [topToppings, setTopToppings] = useState([]);
    const [topDrizzle, setTopDrizzle] = useState([]);
    const [topSide, setTopSide] = useState([]);
    const [topDrink, setTopDrink] = useState([]);
    const [aiScore, setAiScore] = useState(91);
    const [totalSales, setTotalSales] = useState(0);
    const [totalSalesRevenue, setTotalSalesRevenue] = useState(0);
    const [loading, setLoading] = useState(false);
    const [prediction, setPrediction] = useState(null);
    const dayRef = useRef();
    const monthRef = useRef();
    const hourRef = useRef();
    const temperatureRef = useRef();
    const holidayRef = useRef();

    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const day = dayRef.current.value;
        const month = monthRef.current.value;
        const hour = hourRef.current.value;
        const temperature = temperatureRef.current.value;
        const holiday = holidayRef.current.value == "yes" ? 1 : 0;

        const response = await fetch("http://127.0.0.1:5000/api/model", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "meat",
                day: day,
                month: month,
                hour: hour,
                temperature: temperature,
                holiday: holiday,
                weekend: holiday,
            }),
        });
        const meat_data = await response.json();

        const response2 = await fetch("http://127.0.0.1:5000/api/model", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "topping",
                day: day,
                month: month,
                hour: hour,
                temperature: temperature,
                holiday: holiday,
                weekend: holiday,
            }),
        });
        const topping_data = await response2.json();

        const response3 = await fetch("http://127.0.0.1:5000/api/model", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "drizzle",
                day: day,
                month: month,
                hour: hour,
                temperature: temperature,
                holiday: holiday,
                weekend: holiday,
            }),
        });

        const drizzle_data = await response3.json();

        const response4 = await fetch("http://127.0.0.1:5000/api/model", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "cheese",
                day: day,
                month: month,
                hour: hour,
                temperature: temperature,
                holiday: holiday,
                weekend: holiday,
            }),
        });
        const cheese_data = await response4.json();

        setPrediction({
            meat: meat_data[0],
            topping: topping_data[0],
            drizzle: drizzle_data[0],
            cheese: cheese_data[0],
        });

        console.log(prediction);
        setLoading(false);
    };

    useEffect(() => {
        const fetchDataOverTime = async () => {
            const response = await fetch(
                "http://127.0.0.1:5000/api/orders-over-time" +
                    `?start_date=${startDate.toISOString()}&end_date=${endDate.toISOString()}`
            );

            const dict = await response.json();
            const salesDataByMonth = {};

            Object.entries(dict).forEach(([dateStr, value]) => {
                const date = new Date(dateStr);
                const monthKey = `${date.getFullYear()}-${date.getMonth()}`;

                if (!salesDataByMonth[monthKey]) {
                    salesDataByMonth[monthKey] = {
                        month: monthNames[date.getMonth()],
                        sales: 0,
                    };
                }
                salesDataByMonth[monthKey].sales += value;
            });

            const new_labels = [];
            const sales = [];

            Object.keys(salesDataByMonth)
                .sort()
                .forEach((key) => {
                    new_labels.push(salesDataByMonth[key].month);
                    sales.push(salesDataByMonth[key].sales);
                });

            setSalesData(sales);
            setLabels(new_labels);
        };

        fetchDataOverTime();
    }, [startDate, endDate]);

    useEffect(() => {
        const fetchTopItems = async () => {
            const response = await fetch(
                "http://127.0.0.1:5000/api/top-orders" +
                    `?start_date=${startDate.toISOString()}&end_date=${endDate.toISOString()}`
            );

            const data = await response.json();
            let items = Object.entries(data["Main"]);
            items.sort((x, y) => y[1] - x[1]);
            setTopMain(items);

            setTopCheese(Object.entries(data["Cheese"]));
            setTopMeats(Object.entries(data["Meat"]));
            setTopToppings(Object.entries(data["Topping"]));
            setTopDrizzle(Object.entries(data["Drizzle"]));
            setTopSide(Object.entries(data["Side"]));
            setTopDrink(Object.entries(data["Drink"]));
        };
        const roundAndRemoveThousands = (num) => {
            const rounded = Math.round(num / 1000) * 1000;
            return Math.floor(rounded / 1000);
        };

        const fetchKeyMetrics = async () => {
            const response = await fetch(
                "http://127.0.0.1:5000/api/key-metrics" +
                    `?start_date=${startDate.toISOString()}&end_date=${endDate.toISOString()}`
            );

            const data = await response.json();
            console.log(data);
            setAiScore(data["ai_score"]);
            setTotalSales(roundAndRemoveThousands(data["number_of_orders"]));
            setTotalSalesRevenue(
                roundAndRemoveThousands(data["total_revenue"])
            );
        };

        fetchTopItems();
        fetchKeyMetrics();
    }, [startDate, endDate]);

    const chartData = {
        labels: labels,
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
            title: {
                display: true,
                text: "Sales",
                color: "#000",
                font: { size: 18 },
            },
        },
        scales: {
            x: { ticks: { color: "#000" } },
            y: { beginAtZero: true, ticks: { color: "#000" } },
        },
        animation: {
            duration: 1000,
            easing: "easeOutBounce",
        },
    };

    return (
        <div
            className="pb-0 flex flex-col items-center font-MostraNuovaHeavy justify-top bg-primary"
            style={{ backgroundColor: "#F5B74E" }}
        >
            <div className="flex items-center gap-4 mb-4 mt-20">
                <div className=" bg-black text-white p-2 rounded-full">
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        dateFormat="yyyy/MM/dd"
                        className="bg-black text-white text-center"
                    />
                </div>
                <span className="text-black text-xl font-bold">TO</span>
                <div className="bg-black text-white p-2 rounded-full">
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        dateFormat="yyyy/MM/dd"
                        className="bg-black text-white text-center"
                    />
                </div>
            </div>
            <div
                className="flex items-center rounded-lg p-6 shadow-lg text-center mt-6"
                style={{
                    backgroundColor: "#FCCB77",
                    border: "2px solid #B97400",
                }}
            >
                <div className="flex-1 border-r border-gray-400 px-4">
                    <div className="text-black font-semibold">
                        AI Business Score
                    </div>
                    <div className="text-3xl font-bold text-black">
                        {aiScore}
                    </div>
                </div>
                <div className="flex-1 border-r border-gray-400 px-4">
                    <div className="text-black font-semibold">Total Sales</div>
                    <div className="text-3xl font-bold text-black">
                        {totalSales}k
                    </div>
                </div>
                <div className="flex-1 px-4">
                    <div className="text-black font-semibold ">
                        Total Sales Revenue
                    </div>
                    <div className="text-3xl font-bold text-black">
                        ${totalSalesRevenue}k
                    </div>
                </div>
            </div>
            {/* Sales Chart and Top Items */}
            <div className="flex justify-center items-center bg-[#FCCB77] rounded-lg p-6 shadow-lg w-full h-full max-w-4xl mt-8">
                <div className="flex-1 p-4">
                    <Line data={chartData} options={chartOptions} />
                </div>
                <div className="flex-1 p-4 border-l border-[#B97400]">
                    <h2 className="text-center text-2xl text-black font-bold mb-4">
                        Top Items
                    </h2>
                    <div className="flex justify-between text-black font-semibold mb-2 text-xl">
                        <span>Item</span>
                        <span>Quantity</span>
                    </div>
                    {Object.entries(topMain).map(([key, value], index) => (
                        <div
                            key={index}
                            className="flex justify-between text-black mb-1"
                        >
                            <span>{value[0]}</span>
                            <span>{value[1]}</span>
                        </div>
                    ))}
                </div>
            </div>
            {/* Six Bar Charts for Categories */}
            <div className="grid grid-cols-3  mt-20 gap-5 mb-20">
                <Chart
                    text="Top Cheese"
                    labels={topCheese.map((item) => item[0])}
                    quantities={topCheese.map((item) => item[1])}
                />
                <Chart
                    text="Top Meats"
                    labels={topMeats.map((item) => item[0])}
                    quantities={topMeats.map((item) => item[1])}
                />
                <Chart
                    text="Top Toppings"
                    labels={topToppings.map((item) => item[0])}
                    quantities={topToppings.map((item) => item[1])}
                />
                <Chart
                    text="Top Drizzle"
                    labels={topDrizzle.map((item) => item[0])}
                    quantities={topDrizzle.map((item) => item[1])}
                />
                <Chart
                    text="Top Side"
                    labels={topSide.map((item) => item[0])}
                    quantities={topSide.map((item) => item[1])}
                />
                <Chart
                    text="Top Drink"
                    labels={topDrink.map((item) => item[0])}
                    quantities={topDrink.map((item) => item[1])}
                />
            </div>
            <div className="flex flex-col justify-center items-center bg-[#FCCB77] rounded-lg p-6 shadow-lg w-full h-full max-w-4xl mb-8">
                <h1 className="text-2xl font-bold text-center mb-4">
                    Choose a date to predict the most likely top-selling items
                </h1>
                <form
                    className="flex flex-col w-full max-w-md"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col gap-4 mb-4">
                        <input
                            type="number"
                            placeholder="Enter a day (1-31)"
                            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            ref={dayRef}
                        />
                        <input
                            type="number"
                            placeholder="Enter a month (1-12)"
                            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            ref={monthRef}
                        />
                        <input
                            type="number"
                            placeholder="Enter an hour (0-23)"
                            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            ref={hourRef}
                        />
                        <input
                            type="number"
                            placeholder="Enter a temperature (°C)"
                            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            ref={temperatureRef}
                        />
                        <select
                            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            ref={holidayRef}
                            aria-label="Is it a holiday/weekend?"
                        >
                            <option value="">Is it a holiday/weekend?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="p-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                    >
                        Predict
                    </button>
                </form>
                {loading && <p>Loading...</p>}

                {prediction && (
                    <div className="mt-4">
                        <h2 className="text-2xl font-bold text-center mb-4">
                            Predicted Top Items
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Main Ingredient */}
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-semibold">
                                    Main Ingredient
                                </h3>
                                {Object.keys(prediction["meat"]).map(
                                    (key, index) => (
                                        <p key={index} className="text-lg">
                                            {key}{" "}
                                            {parseInt(
                                                prediction["meat"][key] * 100
                                            )}
                                            %
                                        </p>
                                    )
                                )}
                            </div>

                            {/* Topping */}
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-semibold">
                                    Topping
                                </h3>
                                {Object.keys(prediction["topping"]).map(
                                    (key, index) => (
                                        <p key={index} className="text-lg">
                                            {key}{" "}
                                            {parseInt(
                                                prediction["topping"][key] * 100
                                            )}
                                            %
                                        </p>
                                    )
                                )}
                            </div>

                            {/* Drizzle */}
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-semibold">
                                    Drizzle
                                </h3>
                                {Object.keys(prediction["drizzle"]).map(
                                    (key, index) => (
                                        <p key={index} className="text-lg">
                                            {key}{" "}
                                            {parseInt(
                                                prediction["drizzle"][key] * 100
                                            )}
                                            %
                                        </p>
                                    )
                                )}
                            </div>

                            {/* Cheese */}
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-semibold">
                                    Cheese
                                </h3>
                                {Object.keys(prediction["cheese"]).map(
                                    (key, index) => (
                                        <p key={index} className="text-lg">
                                            {key}{" "}
                                            {parseInt(
                                                prediction["cheese"][key] * 100
                                            )}
                                            %
                                        </p>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
