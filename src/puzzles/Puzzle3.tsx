const Puzzle3 = ({ onSuccess }: { onSuccess: () => void }) => {
    return (
        <div>
            <h1>Puzzle 3</h1>
            <p>Find the sum of all numbers that are not in the list.</p>
            <p>Input: [1, 2, 3, 4, 5]</p>
            <p>Output: 0</p>
            <p>Hint: Use a loop to iterate through the numbers and check if they are in the list.</p>
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

export default Puzzle3;
