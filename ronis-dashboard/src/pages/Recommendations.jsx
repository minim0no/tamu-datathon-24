import React, {useState} from 'react';
import HoverCard from '../components/HoverCard';

export default function Recommendations() {
    const [hover, setHover] = useState(false);

    return (
        <div className="pb-0 flex flex-col items-center font-MostraNuovaHeavy justify-top bg-primary">
            <div className="px-20 pb-5 items-center bg-white/10">
                <h1 className="text-4xl text-center pt-5 pb-5 text-black">Most Popular Toppings</h1>
                <div className={`flex flex-row gap-10`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                        <HoverCard rank="1" link="https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Cheddar.jpg" text="Hi"/>
                        <HoverCard rank="2" link="https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Corn.jpg" text="Corn"/>
                        <HoverCard rank="3" link="https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Corn.jpg" text="Corn"/>
                </div>
                <h1 className="text-4xl text-center pt-5 pb-5 text-black">Most Popular Cheeses</h1>
                <div className={`flex flex-row gap-10`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <HoverCard rank="1" link="https://s3.amazonaws.com/incentivio/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/College%20Station%2C%20TX%20-%20Mac%20and%20CheeseSM-66c6508a_1.jpg" text="Mac"/>
                    <HoverCard rank="2" link="https://s3.amazonaws.com/incentivio/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/College%20Station%2C%20TX%20-%20Grilled%20Cheese%20SandwichSM-66c650f0_1.jpg" text="Sandwich"/>
                    <HoverCard rank="3" link="https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Corn.jpg" text="Corn"/>
                </div>
                <h1 className="text-4xl text-center pt-5 pb-5 text-black">Most Popular Meats</h1>
                <div className={`flex flex-row gap-10`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <HoverCard rank="1" link="https://s3.amazonaws.com/incentivio/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/College%20Station%2C%20TX%20-%20Mac%20and%20CheeseSM-66c6508a_1.jpg" text="Mac"/>
                    <HoverCard rank="2" link="https://s3.amazonaws.com/incentivio/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/College%20Station%2C%20TX%20-%20Grilled%20Cheese%20SandwichSM-66c650f0_1.jpg" text="Sandwich"/>
                    <HoverCard rank="3" link="https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Corn.jpg" text="Corn"/>
                </div>
                <h1 className="text-4xl text-center pt-5 pb-5 text-black">Most Popular Drizzles</h1>
                <div className={`flex flex-row gap-10`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <HoverCard rank="1" link="https://s3.amazonaws.com/incentivio/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/College%20Station%2C%20TX%20-%20Mac%20and%20CheeseSM-66c6508a_1.jpg" text="Mac"/>
                    <HoverCard rank="2" link="https://s3.amazonaws.com/incentivio/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/College%20Station%2C%20TX%20-%20Grilled%20Cheese%20SandwichSM-66c650f0_1.jpg" text="Sandwich"/>
                    <HoverCard rank="3" link="https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Corn.jpg" text="Corn"/>
                </div>
                <h1 className="text-4xl text-center pt-5 pb-5 text-black">Most Popular Sides</h1>
                <div className={`flex flex-row gap-10`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <HoverCard rank="1" link="https://s3.amazonaws.com/incentivio/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/College%20Station%2C%20TX%20-%20Mac%20and%20CheeseSM-66c6508a_1.jpg" text="Mac"/>
                    <HoverCard rank="2" link="https://s3.amazonaws.com/incentivio/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/College%20Station%2C%20TX%20-%20Grilled%20Cheese%20SandwichSM-66c650f0_1.jpg" text="Sandwich"/>
                    <HoverCard rank="3" link="https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Corn.jpg" text="Corn"/>
                </div>
                <h1 className="text-4xl text-center pt-5 pb-5 text-black">Most Popular Drinks</h1>
                <div className={`flex flex-row gap-10`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <HoverCard rank="1" link="https://s3.amazonaws.com/incentivio/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/College%20Station%2C%20TX%20-%20Mac%20and%20CheeseSM-66c6508a_1.jpg" text="Mac"/>
                    <HoverCard rank="2" link="https://s3.amazonaws.com/incentivio/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/College%20Station%2C%20TX%20-%20Grilled%20Cheese%20SandwichSM-66c650f0_1.jpg" text="Sandwich"/>
                    <HoverCard rank="3" link="https://incentivio.s3.amazonaws.com/0c48bd0e-9e50-40cc-a606-e6b1b10fd06d/i/20240327124308296/sm/Corn.jpg" text="Corn"/>
                </div>
            </div>
        </div>
    );
}