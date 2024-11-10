export default function Statistics() {
    return (
        <div className="flex flex-col items-center justify-center bg-primary">
            <input
                type="date"
                id="start"
                name="trip-start"
                value="2018-07-22"
                min="2018-01-01"
                max="2018-12-31"
            />
        </div>
    );
}
