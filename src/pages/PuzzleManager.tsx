const PuzzleManager = ({ onFinish }: { onFinish: () => void }) => {
    return (
        <div>
            <h1>Puzzle Manager</h1>
            <p>Manage your puzzles here.</p>
            <button onClick={onFinish}>Finish</button>
        </div>
    );
};

export default PuzzleManager;
