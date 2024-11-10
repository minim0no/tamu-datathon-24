export default function TextBox({ text }) {
    return (
        <div className="bg-white bg-opacity-10 rounded-lg p-4 w-full mt-6">
            <div className="p-3 text-black bg-[#f8cd83] bg-opacity-80 rounded-lg mb-2 font-bold break-words w-full">
                {text}
            </div>
        </div>
    );
}
