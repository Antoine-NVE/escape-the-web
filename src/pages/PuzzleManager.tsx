import { useState } from 'react';
import Puzzle1 from '../puzzles/Puzzle1';
import Puzzle2 from '../puzzles/Puzzle2';
import Puzzle3 from '../puzzles/Puzzle3';

const PuzzleManager = ({ onFinish }: { onFinish: () => void }) => {
    const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0);

    const handleNext = () => {
        if (currentPuzzleIndex < puzzles.length - 1) {
            setCurrentPuzzleIndex((prev) => prev + 1);
        } else {
            onFinish();
        }
    };

    const puzzles = [
        <Puzzle1 key="p1" onSuccess={handleNext} />,
        <Puzzle2 key="p2" onSuccess={handleNext} />,
        <Puzzle3 key="p3" onSuccess={handleNext} />,
    ];

    return <div>{puzzles[currentPuzzleIndex]}</div>;
};

export default PuzzleManager;
