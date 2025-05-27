import { useState } from 'react';
import { validateCombinationPuzzle1 } from './ValidateCombination';

const Puzzle1 = ({ onSuccess }: { onSuccess: () => void }) => {
    const [input, setInput] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (validateCombinationPuzzle1(input)) {
            setMessage('✅ Coffre déverrouillé !');
            setTimeout(onSuccess, 1000);
        } else {
            setMessage('❌ Mauvaise combinaison !');
        }
        setInput('');
    };

    return (
        <div className="space-y-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800">🔐 Le Coffre-Fort</h2>
            <p className="text-gray-600">Entre une combinaison à 4 chiffres pour déverrouiller le coffre.</p>

            <input
                type="text"
                maxLength={4}
                value={input}
                onChange={(e) => setInput(e.target.value.replace(/\D/g, ''))}
                className="px-4 py-2 text-center text-xl border rounded-xl w-40 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-300"
                placeholder="****"
            />

            <div>
                <button
                    onClick={handleSubmit}
                    className="mt-2 px-6 py-2 bg-rose-400 text-white font-semibold rounded-xl hover:bg-rose-500 transition cursor-pointer"
                >
                    Valider
                </button>
            </div>

            {message && <p className="text-sm mt-4">{message}</p>}
        </div>
    );
};

export default Puzzle1;
