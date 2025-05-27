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
            <p className="text-gray-600">Devine le code à 4 chiffres grâce aux indices :</p>

            <ul className="text-left inline-block text-sm text-gray-700 space-y-1">
                <li>🔎 Le deuxième chiffre est le double du premier.</li>
                <li>🔎 Le total des chiffres est égal à 18.</li>
                <li>🔎 Le dernier chiffre est impair.</li>
                <li>🔎 Aucun chiffre n’est répété.</li>
            </ul>

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
