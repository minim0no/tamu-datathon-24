import React, { useState, useEffect } from "react";
import HoverCard from "../components/HoverCard";
import { setDefaultLocale } from "react-datepicker";

export default function Recommendations() {
    const [hover, setHover] = useState(false);

    const data = [
        {
            name: "Broccoli",
            category: "Topping",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Broccoli.jpg",
            rank: 0,
        },
        {
            name: "Corn",
            category: "Topping",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Corn.jpg",
            rank: 0,
        },
        {
            name: "Onions",
            category: "Topping",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Onions.jpg",
            rank: 3,
        },
        {
            name: "Jalapenos",
            category: "Topping",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Jalapenos.jpg",
            rank: 0,
        },
        {
            name: "Tomatoes",
            category: "Topping",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327125306247/sm/Tomatoes.jpg",
            rank: 0,
        },
        {
            name: "Bell Peppers",
            category: "Topping",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Bell%20Peppers.jpg",
            rank: 0,
        },
        {
            name: "Mushrooms",
            category: "Topping",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Mushrooms.jpg",
            rank: 0,
        },
        {
            name: "Pineapple",
            category: "Topping",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Pineapple.jpg",
            rank: 0,
        },
        {
            name: "Parmesan",
            category: "Topping",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Parmesan.jpg",
            rank: 1,
        },
        {
            name: "Breadcrumbs",
            category: "Topping",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Breadcrumbs.jpg",
            rank: 2,
        },
        {
            name: "No Toppings",
            category: "Topping",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/No%20Toppings.jpg",
            rank: 0,
        },
        {
            name: "Cheddar",
            category: "Cheese",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Cheddar.jpg",
            rank: 1,
        },
        {
            name: "Pepper Jack",
            category: "Cheese",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Pepper%20Jack.jpg",
            rank: 2,
        },
        {
            name: "Alfredo",
            category: "Cheese",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Alfredo.jpg",
            rank: 3,
        },
        {
            name: "No Meat",
            category: "Meat",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/No%20Meat.jpg",
            rank: 0,
        },
        {
            name: "Grilled Chicken",
            category: "Meat",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Grilled%20Chicken.jpg",
            rank: 2,
        },
        {
            name: "Pulled Pork",
            category: "Meat",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Pulled%20Pork.jpg",
            rank: 0,
        },
        {
            name: "Brisket",
            category: "Meat",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Brisket.jpg",
            rank: 1,
        },
        {
            name: "Bacon",
            category: "Meat",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Bacon.jpg",
            rank: 3,
        },
        {
            name: "Ham",
            category: "Meat",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Ham.jpg",
            rank: 0,
        },
        {
            name: "No Drizzle",
            category: "Drizzle",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/No%20Drizzle.jpg",
            rank: 3,
        },
        {
            name: "BBQ",
            category: "Drizzle",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/BBQ.jpg",
            rank: 2,
        },
        {
            name: "Garlic Parmesan",
            category: "Drizzle",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Garlic%20Parmesan.jpg",
            rank: 1,
        },
        {
            name: "Buffalo",
            category: "Drizzle",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Buffalo.jpg",
            rank: 0,
        },
        {
            name: "Ranch",
            category: "Drizzle",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Ranch.jpg",
            rank: 0,
        },
        {
            name: "Hot Honey",
            category: "Drizzle",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Hot%20Honey.jpg",
            rank: 0,
        },
        {
            name: "Pesto",
            category: "Drizzle",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Pesto.jpg",
            rank: 0,
        },
        {
            name: "No Side",
            category: "Side",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/No%20Side.jpg",
            rank: 1,
        },
        {
            name: "Garlic Bread",
            category: "Side",
            link: "https://s3.amazonaws.com/incentivio/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/Harker%20Heights%2C%20TX%20-%20Garlic%20BreadSM-66c651ac_1.jpg",
            rank: 3,
        },
        {
            name: "Cheesy Garlic Bread",
            category: "Side",
            link: "https://s3.amazonaws.com/incentivio/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/College%20Station%2C%20TX%20-%20Cheesy%20Garlic%20BreadSM-66c65335_1.jpg",
            rank: 2,
        },
        {
            name: "Cheesy Broccoli",
            category: "Side",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Cheesy%20Broccoli.jpg",
            rank: 0,
        },
        {
            name: "Chocolate Cookie",
            category: "Side",
            link: "https://s3.amazonaws.com/incentivio/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/College%20Station%2C%20TX%20-%20Large%20Chocolate%20Chunk%20CookieSM-66c653c2_1.jpg",
            rank: 0,
        },
        {
            name: "Cheesecake",
            category: "Side",
            link: "https://s3.amazonaws.com/incentivio/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/College%20Station%2C%20TX%20-%20CheesecakeSM-66c652b4_1.jpg",
            rank: 0,
        },
        {
            name: "Doritos",
            category: "Side",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Doritos.jpg",
            rank: 0,
        },
        {
            name: "Cheetos",
            category: "Side",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Cheetos.jpg",
            rank: 0,
        },
        {
            name: "Lays Barbecue",
            category: "Side",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327125306247/sm/Lays%20Barbecue.jpg",
            rank: 0,
        },
        {
            name: "No Drink",
            category: "Drink",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/No%20Drink.jpg",
            rank: 0,
        },
        {
            name: "Water Bottle",
            category: "Drink",
            link: "https://s3.amazonaws.com/incentivio/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/College%20Station%2C%20TX%20-%20WaterSM-664a2fdf_1.jpg",
            rank: 0,
        },
        {
            name: "Apple Juice",
            category: "Drink",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/Waco%2C%20TX%20-%20Apple%20JuiceSM-6646e53c_1.jpg",
            rank: 2,
        },
        {
            name: "Coke",
            category: "Drink",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/College%20Station%2C%20TX%20-%20CokeSM-664a2ed9_1.jpg",
            rank: 0,
        },
        {
            name: "Dr. Pepper",
            category: "Drink",
            link: "https://i.redd.it/buq5g7t9opy31.png",
            rank: 1,
        },
        {
            name: "Sprite",
            category: "Drink",
            link: "https://pizzadellorto.com/wp-content/uploads/2023/04/sprite-logo-png-1-modified.png",
            rank: 3,
        },
        {
            name: "Coke Zero",
            category: "Drink",
            link: "https://s3.amazonaws.com/incentivio/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/Harker%20Heights%2C%20TX%20-%20Coke%20ZeroSM-672efd60_1.jpg",
            rank: 0,
        },
        {
            name: "Gold Peak Tea",
            category: "Drink",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/Harker%20Heights%2C%20TX%20-%20Gold%20Peak%20TeaSM-664a327f_1.jpg",
            rank: 0,
        },
        {
            name: "Diet Coke",
            category: "Drink",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/College%20Station%2C%20TX%20-%20Diet%20CokeSM-664a30e3_1.png",
            rank: 0,
        },
    ];

    /*useEffect(() => {
        const getRank = async () => {
            try {
                const params = new URLSearchParams({
                    start_date: "2024-04-01",
                    end_date: "2024-11-06",
                });
                const response = await fetch(
                    "http://127.0.0.1:5000/api/top-orders" +
                        "?" +
                        params.toString()
                );
                const json = await response.json();
                for (let category in json) {
                    const sortedItems = Object.entries(json[category]).sort(
                        (a, b) => b[1] - a[1]
                    );

                    json[category] = Object.fromEntries(sortedItems);
                }

                console.log(json);
            } catch {
                return;
            }
        };
        getRank();
    }, []);*/

    /*useEffect(() => {
        const getRank = async () => {
            try {
                const params = new URLSearchParams({
                    start_date: "2024-04-01",
                    end_date: "2024-11-06",
                });
                const response = await fetch(
                    "http://127.0.0.1:5000/api/top-orders" +
                        "?" +
                        params.toString()
                );
                if (!response.ok) {
                    throw new Error(`API request failed with status: ${response.status}`);
                }

                const json = await response.json();

                const quantities = {};

                for(let category in json) 
                {
                    for(let item in json[category])
                    {
                        quantities[item] = json[category][item];
                    }
                }

                const rankedData = data.map((item) => {
                    const quantity = quantities[item.name] || 0;

                    return {
                        ...item,
                        quantity,
                    }
                });

                rankedData.sort((a, b) => b.quantity - a.quantity);

                const finalRankedData = rankedData.map((item, index) => ({
                    ...item,
                    rank: index + 1,
                }));

                console.log("Final Ranked Data:", finalRankedData);
                setData(finalRankedData);
            } catch {
                return;
            }
        };
        getRank();
    }, []);*/

    console.log(data);

    const filterData = (category, rank) => {
        return data.filter(item => item.category == category && item.rank == rank);
    };

    const topping1 = filterData("Topping", 1);
    const topping2 = filterData("Topping", 2);
    const topping3 = filterData("Topping", 3);

    const cheese1 = filterData("Cheese", 1);
    const cheese2 = filterData("Cheese", 2);
    const cheese3 = filterData("Cheese", 3);

    const meat1 = filterData("Meat", 1);
    const meat2 = filterData("Meat", 2);
    const meat3 = filterData("Meat", 3);

    const drizzle1 = filterData("Drizzle", 1);
    const drizzle2 = filterData("Drizzle", 2);
    const drizzle3 = filterData("Drizzle", 3);

    const side1 = filterData("Side", 1);
    const side2 = filterData("Side", 2);
    const side3 = filterData("Side", 3);

    const drink1 = filterData("Drink", 1);
    const drink2 = filterData("Drink", 2);
    const drink3 = filterData("Drink", 3);

    return (
        <div className="pb-0 flex flex-col items-center font-MostraNuovaHeavy justify-top bg-primary">
            <div className="px-20 pb-5 items-center bg-white/10">
                <h1 className="text-4xl text-center pt-5 pb-5 text-black">
                    Most Popular Toppings
                </h1>
                <div
                    className={`flex flex-row items-center text-center justify-around`}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <HoverCard
                        rank="1"
                        link={topping1[0].link}
                        text={topping1[0].name}
                    />
                    <HoverCard
                        rank="2"
                        link={topping2[0].link}
                        text={topping2[0].name}
                    />
                    <HoverCard
                        rank="3"
                        link={topping3[0].link}
                        text={topping3[0].name}
                    />
                </div>
                <h1 className="text-4xl text-center pt-5 pb-5 text-black">
                    Most Popular Cheeses
                </h1>
                <div
                    className={`flex flex-row justify-around`}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <HoverCard
                        rank="1"
                        link={cheese1[0].link}
                        text={cheese1[0].name}
                    />
                    <HoverCard
                        rank="2"
                        link={cheese2[0].link}
                        text={cheese2[0].name}
                    />
                    <HoverCard
                        rank="3"
                        link={cheese3[0].link}
                        text={cheese3[0].name}
                    />
                </div>
                <h1 className="text-4xl text-center pt-5 pb-5 text-black">
                    Most Popular Meats
                </h1>
                <div
                    className={`flex flex-row justify-around`}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <HoverCard
                        rank="1"
                        link={meat1[0].link}
                        text={meat1[0].name}
                    />
                    <HoverCard
                        rank="2"
                        link={meat2[0].link}
                        text={meat2[0].name}
                    />
                    <HoverCard
                        rank="3"
                        link={meat3[0].link}
                        text={meat3[0].name}
                    />
                </div>
                <h1 className="text-4xl pt-5 pb-5 text-center text-black">
                    Most Popular Drizzles
                </h1>
                <div
                    className={`flex flex-row items-center justify-around place-items-center text-wrap`}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <HoverCard
                        rank="1"
                        link={drizzle1[0].link}
                        text={drizzle1[0].name}
                    />
                    <HoverCard
                        rank="2"
                        link={drizzle2[0].link}
                        text={drizzle2[0].name}
                    />
                    <HoverCard
                        rank="3"
                        link={drizzle3[0].link}
                        text={drizzle3[0].name}
                    />
                </div>
                <h1 className="text-4xl text-center pt-5 pb-5 text-black">
                    Most Popular Sides
                </h1>
                <div
                    className={`flex flex-row justify-around`}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <HoverCard
                        rank="1"
                        link={side1[0].link}
                        text={side1[0].name}
                    />
                    <HoverCard
                        rank="2"
                        link={side2[0].link}
                        text={side2[0].name}
                    />
                    <HoverCard
                        rank="3"
                        link={side3[0].link}
                        text={side3[0].name}
                    />
                </div>
                <h1 className="text-4xl text-center pt-5 pb-5 text-black">
                    Most Popular Drinks
                </h1>
                <div
                    className={`flex flex-row justify-around`}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <HoverCard
                        rank="1"
                        link={drink1[0].link}
                        text={drink1[0].name}
                    />
                    <HoverCard
                        rank="2"
                        link={drink2[0].link}
                        text={drink2[0].name}
                    />
                    <HoverCard
                        rank="3"
                        link={drink3[0].link}
                        text={drink3[0].name}
                    />
                </div>
            </div>
        </div>
    );
}
