const Puzzle1 = ({ onSuccess }: { onSuccess: () => void }) => {
    return (
        <div>
            <h1>Welcome to Puzzle 1</h1>
            <p>This is the first puzzle of the series.</p>
            <p>To solve this puzzle, you need to find the sum of all numbers from 1 to 100.</p>
            <p>Hint: Use the formula n(n + 1)/2 to find the sum of the first n natural numbers.</p>
            <p>Once you have the answer, click the button below to proceed to the next puzzle.</p>
            <button
                onClick={() => {
                    // Here you would typically check the answer before calling onSuccess
                    onSuccess();
                }}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
                Next Puzzle
            </button>
        </div>
    );
};

export default Puzzle1;
