import { useState } from 'react';
import { validateCombinationPuzzle3, SECRET_COMBINATION_PUZZLE_3 } from './ValidateCombination';

const Puzzle3 = ({ onSuccess }: { onSuccess: () => void }) => {
    const [sequenceShown, setSequenceShown] = useState(false);
    const [displayedColor, setDisplayedColor] = useState<string | null>(null);
    const [canShowSequence, setCanShowSequence] = useState(true);

    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [message, setMessage] = useState('');
    const [solved, setSolved] = useState(false);

    const allColors = ['red', 'green', 'blue', 'yellow'];

    const showSequence = async () => {
        setCanShowSequence(false);
        setSequenceShown(true);
        for (const color of SECRET_COMBINATION_PUZZLE_3) {
            setDisplayedColor(color);
            await new Promise((resolve) => setTimeout(resolve, 1000));
        }
        setDisplayedColor(null);
        setSequenceShown(false);
    };

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
            setMessage('✅ Bonne séquence ! Bravo !');
            setSolved(true);
            setTimeout(onSuccess, 1000);
        } else {
            setMessage('❌ Mauvais ordre. Essaie encore.');
        }
    };

    return (
        <div className="space-y-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800">🧠 Séquence à mémoriser</h2>
            <p className="text-gray-600">
                Clique sur "Voir la séquence" pour la mémoriser. Tu ne peux la voir <strong>qu’une seule fois</strong> !
            </p>

            <button
                onClick={showSequence}
                disabled={!canShowSequence}
                className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition cursor-pointer disabled:opacity-50"
            >
                Voir la séquence
            </button>

            {sequenceShown && (
                <div className="h-16 flex items-center justify-center">
                    {displayedColor ? (
                        <div
                            className="w-16 h-16 rounded-full border-2 border-gray-300 shadow-md transition-all"
                            style={{ backgroundColor: displayedColor }}
                        />
                    ) : (
                        <span className="text-sm text-gray-500">Séquence terminée</span>
                    )}
                </div>
            )}

            {!sequenceShown && (
                <div className="flex justify-center gap-4 flex-wrap mt-6">
                    {allColors.map((color) => (
                        <button
                            key={color}
                            onClick={() => handleColorClick(color)}
                            disabled={solved}
                            className={`w-16 h-16 rounded-full cursor-pointer border-2 border-gray-300 shadow-md transition-transform transform hover:scale-110`}
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </div>
            )}

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
