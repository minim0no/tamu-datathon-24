import React, {useState} from 'react';

export default function HoverCard({rank, link, text}) {
    const [hover, setHover] = useState(false);

    return (
        <>
        <div className="flex flex-row gap-10" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div className="bg-transparent flex flex-col justify-center items-center rounded-full text-6xl border-black">
                {rank}
            </div>
            <img src={link} class={`h-64 rounded-full ${hover ? "hidden" : "block"}`}></img>
            <div className={`bg-white flex flex-col justify-center items-center w-64 h-64 rounded-full text-4xl border-4 border-black ${hover ? "block" : "hidden"}`}>
                {text}
            </div>
        </div>
        </>
    );
}