import { useState, useEffect, useRef } from "react";
import TextBox from "../components/TextBox";

export default function Chat() {
    const [query, setQuery] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [queries, setQueries] = useState([]);
    const [responses, setResponses] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const messagesEndRef = useRef(null);

    const handleChange = (event) => {
        event.preventDefault();
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (query.trim() !== "") {
            setQueries([...queries, query]);
            setSubmitted(true);
            setLoading(true);
            setQuery("");
        }
    };

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                const response =
                    "I think you should add more vegan options! I think you should add more vegan options! I think you should add more vegan options! I think you should add more vegan options! ";
                setResponses([...responses, response]);
                setLoading(false);
            }, 2000);
        }
    }, [loading, queries, responses]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [queries, responses]);

    return (
        <div className="fixed bottom-0 right-6 z-50 w-[350px]">
            <div
                className="bg-white p-2 rounded-t-lg cursor-pointer flex items-center justify-center text-lg font-bold gap-4"
                onClick={() => setIsOpen(!isOpen)}
            >
                Chat with Mr. Roni
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="text-black"
                    width="24"
                    height="24"
                >
                    {isOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 15l7-7 7 7"
                        />
                    )}
                </svg>
            </div>

            <div
                className={`${
                    isOpen
                        ? "h-[400px] p-4 rounded-b-lg shadow-lg bg-[#f8cd83] border-4 border-white flex flex-col justify-between"
                        : "hidden"
                } transition-all duration-300 overflow-y-auto`}
            >
                <div className="flex flex-col items-start space-y-2 w-full">
                    {queries.map((query, index) => (
                        <div key={index}>
                            <TextBox text={query} />
                            {responses[index] && (
                                <div className="flex items-center gap-4 mt-4">
                                    <img
                                        src="bowtie-roni.png"
                                        className="rounded-lg w-8 h-8 border-2 border-black"
                                    />
                                    <TextBox text={responses[index]} />
                                </div>
                            )}
                        </div>
                    ))}
                    {loading && (
                        <div className="flex items-center gap-4 mt-4">
                            <img
                                src="bowtie-roni.png"
                                className="rounded-lg w-8 h-8 border-2 border-black"
                            />
                            <div className="w-full">
                                <div className="flex flex-row space-x-1 justify-start">
                                    {" "}
                                    <div className="h-2 w-2 bg-white rounded-full animate-bounce animate-[infinite] [animation-delay:-0.3s]"></div>
                                    <div className="h-2 w-2 bg-white rounded-full animate-bounce animate-[infinite] [animation-delay:-0.15s]"></div>
                                    <div className="h-2 w-2 bg-white rounded-full animate-bounce animate-[infinite]"></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div ref={messagesEndRef} />
                <div className="relative mt-4">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Ask me something!"
                            value={query}
                            onChange={handleChange}
                            className="py-2 pl-4 pr-4 rounded-full bg-white text-black placeholder-gray-500 font-semibold text-sm w-full"
                        />
                        <button type="submit">
                            <img
                                src="/search-icon.svg"
                                alt="search"
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6"
                            />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
