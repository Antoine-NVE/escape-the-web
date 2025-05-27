import { useRef, useState } from 'react';
import { validateCombinationPuzzle1, SECRET_COMBINATION_PUZZLE_1 } from './ValidateCombination';

const Puzzle1 = ({ onSuccess }: { onSuccess: () => void }) => {
    const [code, setCode] = useState([0, 0, 0, 0]);
    const [message, setMessage] = useState('');
    const [solved, setSolved] = useState(false);

    const clickSound = useRef<HTMLAudioElement | null>(null);

    const handleChange = (index: number, delta: number) => {
        if (solved) return;
        setCode((prev) => {
            const newCode = [...prev];
            const newValue = (newCode[index] + delta + 10) % 10;
            newCode[index] = newValue;

            if (newValue === SECRET_COMBINATION_PUZZLE_1[index]) {
                if (clickSound.current) {
                    clickSound.current.currentTime = 0;
                    clickSound.current.play().catch(() => {});
                }
            }

            return newCode;
        });
    };

    const handleSubmit = () => {
        if (validateCombinationPuzzle1(code)) {
            setMessage('✅ Coffre déverrouillé !');
            setSolved(true);
            setTimeout(onSuccess, 1000);
        } else {
            setMessage('❌ Mauvaise combinaison.');
        }
    };

    return (
        <div className="space-y-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800">🔐 Coffre à molettes</h2>
            <p className="text-gray-600">Tourne les molettes et trouve la bonne combinaison.</p>

            <div className="flex justify-center gap-4">
                {code.map((digit, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <button
                            onClick={() => handleChange(index, +1)}
                            className="w-10 h-10 bg-rose-400 text-white rounded-full hover:bg-rose-500 transition"
                        >
                            ▲
                        </button>
                        <div className="w-10 h-10 flex items-center justify-center text-xl border rounded-md bg-white shadow-inner font-mono">
                            {digit}
                        </div>
                        <button
                            onClick={() => handleChange(index, -1)}
                            className="w-10 h-10 bg-rose-400 text-white rounded-full hover:bg-rose-500 transition"
                        >
                            ▼
                        </button>
                    </div>
                ))}
            </div>

            <button
                onClick={handleSubmit}
                disabled={solved}
                className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition cursor-pointer"
            >
                Valider
            </button>

            {message && <p className="text-sm mt-4">{message}</p>}

            {/* Son de clic correct */}
            <audio ref={clickSound} src="/sounds/click.mp3" preload="auto" />
        </div>
    );
};

export default Puzzle1;
