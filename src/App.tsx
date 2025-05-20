import { useState } from 'react';
import StartScreen from './pages/StartScreen';
import PuzzleManager from './pages/PuzzleManager';
import SuccessScreen from './pages/SuccessScreen';

const App = () => {
    const [isStarted, setIsStarted] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    return (
        <div className="bg-gradient-to-br from-orange-100 via-rose-100 to-red-100 min-h-screen p-8">
            {!isStarted && <StartScreen onStart={() => setIsStarted(true)} />}
            {isStarted && !isFinished && <PuzzleManager onFinish={() => setIsFinished(true)} />}
            {isFinished && <SuccessScreen />}
        </div>
    );
};

export default App;
