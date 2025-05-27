import { useState } from 'react';
import { validateCombinationPuzzle3, SECRET_COMBINATION_PUZZLE_3 } from './ValidateCombination';

const Puzzle3 = ({ onSuccess }: { onSuccess: () => void }) => {
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [message, setMessage] = useState('');
    const [solved, setSolved] = useState(false);

    const colors = ['red', 'green', 'blue', 'yellow'];

    const handleColorClick = (color: string) => {
        if (solved || selectedColors.length >= SECRET_COMBINATION_PUZZLE_3.length) return;
        setSelectedColors((prev) => [...prev, color]);
    };

    const handleReset = () => {
        setSelectedColors([]);
        setMessage('');
    };

    const handleValidate = () => {
        if (validateCombinationPuzzle3(selectedColors)) {
            setMessage('✅ Bon ordre ! Bravo !');
            setSolved(true);
            setTimeout(onSuccess, 1000);
        } else {
            setMessage('❌ Mauvais ordre, réessaie.');
        }
    };

    return (
        <div className="space-y-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800">🎨 L’ordre des couleurs</h2>
            <p className="text-gray-600">Clique les bonnes couleurs dans le bon ordre pour déverrouiller l’accès.</p>

            <div className="flex justify-center gap-4 flex-wrap">
                {colors.map((color) => (
                    <button
                        key={color}
                        onClick={() => handleColorClick(color)}
                        disabled={solved}
                        className={`w-16 h-16 rounded-full cursor-pointer border-2 border-gray-300 shadow-md transition-transform transform hover:scale-110`}
                        style={{ backgroundColor: color }}
                    />
                ))}
            </div>

            <div className="text-sm text-gray-500">Sélection : {selectedColors.join(' → ') || 'aucune'}</div>

            <div className="flex justify-center gap-4">
                <button
                    onClick={handleValidate}
                    disabled={solved || selectedColors.length !== SECRET_COMBINATION_PUZZLE_3.length}
                    className="mt-2 px-4 py-2 bg-rose-400 text-white font-semibold rounded-xl hover:bg-rose-500 transition cursor-pointer"
                >
                    Valider
                </button>

                <button
                    onClick={handleReset}
                    disabled={solved}
                    className="mt-2 px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-400 transition cursor-pointer"
                >
                    Réinitialiser
                </button>
            </div>

            {message && <p className="text-sm mt-4">{message}</p>}
        </div>
    );
};

export default Puzzle3;
