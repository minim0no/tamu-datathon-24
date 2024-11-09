import { useState, useEffect } from "react";
import TextBox from "../components/TextBox";

export default function Chat() {
    const [query, setQuery] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [queries, setQueries] = useState([]);
    const [responses, setResponses] = useState([]);

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

    return (
        <div
            className={`w-full h-full flex flex-col items-center ${
                submitted ? "justify-end" : "justify-center"
            } gap-6`}
        >
            <div className="w-[800px] mt-6 overflow-y-auto max-h-[500px]">
                {queries.map((query, index) => (
                    <div key={index}>
                        <TextBox text={query} />
                        <div className="flex items-center gap-4 mt-6">
                            {responses[index] && (
                                <>
                                    <img
                                        src="bowtie-roni.png"
                                        className="rounded-lg w-16 h-16 border-4 border-black"
                                    />
                                    <TextBox text={responses[index]} />
                                </>
                            )}
                        </div>
                    </div>
                ))}
                {loading && (
                    <div className="flex items-center gap-4 mt-6">
                        <img
                            src="bowtie-roni.png"
                            className="rounded-lg w-16 h-16 border-4 border-black"
                        />
                        <div className="w-[800px]">
                            <div className="flex flex-row space-x-1">
                                <div className="h-2 w-2 bg-white rounded-full animate-bounce animate-[infinite] [animation-delay:-0.3s]"></div>
                                <div className="h-2 w-2 bg-white rounded-full animate-bounce animate-[infinite] [animation-delay:-0.15s]"></div>
                                <div className="h-2 w-2 bg-white rounded-full animate-bounce animate-[infinite]"></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <h1
                className={`${
                    submitted ? "hidden" : "block"
                } text-4xl text-white font-extrabold justify-self-start`}
            >
                Search Business Insights
            </h1>
            <div className="relative mb-10">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="How can I improve about Roni's?"
                        value={query}
                        onChange={handleChange}
                        className="py-4 pl-6 pr-6 rounded-full bg-[#f8cd83] text-white text-opacity-100 placeholder-white placeholder-opacity-50 font-bold text-lg w-[800px]"
                    />
                    <button type="submit">
                        <img
                            src="/search-icon.svg"
                            alt="search"
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10"
                        />
                    </button>
                </form>
            </div>
        </div>
    );
}
