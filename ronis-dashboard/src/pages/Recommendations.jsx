import React, { useState } from "react";
import HoverCard from "../components/HoverCard";

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
            rank: 0,
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
            rank: 0,
        },
        {
            name: "Breadcrumbs",
            category: "Topping",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Breadcrumbs.jpg",
            rank: 0,
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
            rank: 0,
        },
        {
            name: "Pepper Jack",
            category: "Cheese",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Pepper%20Jack.jpg",
            rank: 0,
        },
        {
            name: "Alfredo",
            category: "Cheese",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Alfredo.jpg",
            rank: 0,
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
            rank: 0,
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
            rank: 0,
        },
        {
            name: "Bacon",
            category: "Meat",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Bacon.jpg",
            rank: 0,
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
            rank: 0,
        },
        {
            name: "BBQ",
            category: "Drizzle",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/BBQ.jpg",
            rank: 0,
        },
        {
            name: "Garlic Parmesan",
            category: "Drizzle",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Garlic%20Parmesan.jpg",
            rank: 0,
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
            rank: 0,
        },
        {
            name: "Garlic Bread",
            category: "Side",
            link: "https://s3.amazonaws.com/incentivio/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/Harker%20Heights%2C%20TX%20-%20Garlic%20BreadSM-66c651ac_1.jpg",
            rank: 0,
        },
        {
            name: "Cheesy Garlic Bread",
            category: "Side",
            link: "https://s3.amazonaws.com/incentivio/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/College%20Station%2C%20TX%20-%20Cheesy%20Garlic%20BreadSM-66c65335_1.jpg",
            rank: 0,
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
            rank: 0,
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
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/College%20Station%2C%20TX%20-%20Dr.%20PepperSM-664a3029_1.png",
            rank: 0,
        },
        {
            name: "Sprite",
            category: "Drink",
            link: "https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/College%20Station%2C%20TX%20-%20SpriteSM-664a308e_1.png",
            rank: 0,
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

    useEffect(() => {
        const getRank = async () => {
            try {
                const params = new URLSearchParams({
                    start_date: "2024-04-01",
                    end_date: "2024-11-06",
                });
                const response = fetch("http://127.0.0.1:5000/api/top-orders");
                const json = await response.json();
                console.log(json);
            } catch {
                return;
            }
        };
        getRank();
    }, []);

    const filterData = (category, rank) => {
        return data.filter(
            (item) => item.category == category && item.rank == rank
        );
    };

    return (
        <div className="pb-0 flex flex-col items-center font-MostraNuovaHeavy justify-top bg-primary">
            <div className="px-20 pb-5 items-center bg-white/10">
                <h1 className="text-4xl text-center pt-5 pb-5 text-black">
                    Most Popular Toppings
                </h1>
                <div
                    className={`flex flex-row gap-10`}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <HoverCard
                        rank="1"
                        link="https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Cheddar.jpg"
                        text="Hi"
                    />
                    <HoverCard
                        rank="2"
                        link="https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Corn.jpg"
                        text="Corn"
                    />
                    <HoverCard
                        rank="3"
                        link="https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Corn.jpg"
                        text="Corn"
                    />
                </div>
                <h1 className="text-4xl text-center pt-5 pb-5 text-black">
                    Most Popular Cheeses
                </h1>
                <div
                    className={`flex flex-row gap-10`}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <HoverCard
                        rank="1"
                        link="https://s3.amazonaws.com/incentivio/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/College%20Station%2C%20TX%20-%20Mac%20and%20CheeseSM-66c6508a_1.jpg"
                        text="Mac"
                    />
                    <HoverCard
                        rank="2"
                        link="https://s3.amazonaws.com/incentivio/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/College%20Station%2C%20TX%20-%20Grilled%20Cheese%20SandwichSM-66c650f0_1.jpg"
                        text="Sandwich"
                    />
                    <HoverCard
                        rank="3"
                        link="https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Corn.jpg"
                        text="Corn"
                    />
                </div>
                <h1 className="text-4xl text-center pt-5 pb-5 text-black">
                    Most Popular Meats
                </h1>
                <div
                    className={`flex flex-row gap-10`}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <HoverCard
                        rank="1"
                        link="https://s3.amazonaws.com/incentivio/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/College%20Station%2C%20TX%20-%20Mac%20and%20CheeseSM-66c6508a_1.jpg"
                        text="Mac"
                    />
                    <HoverCard
                        rank="2"
                        link="https://s3.amazonaws.com/incentivio/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/College%20Station%2C%20TX%20-%20Grilled%20Cheese%20SandwichSM-66c650f0_1.jpg"
                        text="Sandwich"
                    />
                    <HoverCard
                        rank="3"
                        link="https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Corn.jpg"
                        text="Corn"
                    />
                </div>
                <h1 className="text-4xl text-center pt-5 pb-5 text-black">
                    Most Popular Drizzles
                </h1>
                <div
                    className={`flex flex-row gap-10`}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <HoverCard
                        rank="1"
                        link="https://s3.amazonaws.com/incentivio/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/College%20Station%2C%20TX%20-%20Mac%20and%20CheeseSM-66c6508a_1.jpg"
                        text="Mac"
                    />
                    <HoverCard
                        rank="2"
                        link="https://s3.amazonaws.com/incentivio/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/College%20Station%2C%20TX%20-%20Grilled%20Cheese%20SandwichSM-66c650f0_1.jpg"
                        text="Sandwich"
                    />
                    <HoverCard
                        rank="3"
                        link="https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Corn.jpg"
                        text="Corn"
                    />
                </div>
                <h1 className="text-4xl text-center pt-5 pb-5 text-black">
                    Most Popular Sides
                </h1>
                <div
                    className={`flex flex-row gap-10`}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <HoverCard
                        rank="1"
                        link="https://s3.amazonaws.com/incentivio/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/College%20Station%2C%20TX%20-%20Mac%20and%20CheeseSM-66c6508a_1.jpg"
                        text="Mac"
                    />
                    <HoverCard
                        rank="2"
                        link="https://s3.amazonaws.com/incentivio/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/College%20Station%2C%20TX%20-%20Grilled%20Cheese%20SandwichSM-66c650f0_1.jpg"
                        text="Sandwich"
                    />
                    <HoverCard
                        rank="3"
                        link="https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Corn.jpg"
                        text="Corn"
                    />
                </div>
                <h1 className="text-4xl text-center pt-5 pb-5 text-black">
                    Most Popular Drinks
                </h1>
                <div
                    className={`flex flex-row gap-10`}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <HoverCard
                        rank="1"
                        link="https://s3.amazonaws.com/incentivio/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/College%20Station%2C%20TX%20-%20Mac%20and%20CheeseSM-66c6508a_1.jpg"
                        text="Mac"
                    />
                    <HoverCard
                        rank="2"
                        link="https://s3.amazonaws.com/incentivio/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/College%20Station%2C%20TX%20-%20Grilled%20Cheese%20SandwichSM-66c650f0_1.jpg"
                        text="Sandwich"
                    />
                    <HoverCard
                        rank="3"
                        link="https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Corn.jpg"
                        text="Corn"
                    />
                </div>
            </div>
        </div>
    );
}
