const Puzzle2 = ({ onSuccess }: { onSuccess: () => void }) => {
    return (
        <div>
            <h1>Puzzle 2</h1>
            <p>This is the second puzzle.</p>
            <p>To solve this puzzle, you need to find the product of all even numbers from 1 to 20.</p>
            <p>Hint: Use a loop to iterate through the numbers and multiply the even ones.</p>
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

export default Puzzle2;
