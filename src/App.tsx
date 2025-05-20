import { useState } from 'react';
import StartScreen from './pages/StartScreen';
import PuzzleManager from './pages/PuzzleManager';
import SuccessScreen from './pages/SuccessScreen';

function App() {
    const [isStarted, setIsStarted] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    return (
        <div className="App">
            {!isStarted && <StartScreen onStart={() => setIsStarted(true)} />}
            {isStarted && !isFinished && <PuzzleManager onFinish={() => setIsFinished(true)} />}
            {isFinished && <SuccessScreen />}
        </div>
    );
}

export default App;
