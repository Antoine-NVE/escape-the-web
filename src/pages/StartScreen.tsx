const StartScreen = ({ onStart }: { onStart: () => void }) => {
    return (
        <div className="start-screen">
            <h1>Welcome to the Puzzle Game!</h1>
            <p>Click the button below to start playing.</p>
            <button onClick={onStart}>Start Game</button>
        </div>
    );
};

export default StartScreen;
