import { useState } from 'react';
import { validateCombinationPuzzle2 } from './ValidateCombination';

const Puzzle2 = ({ onSuccess }: { onSuccess: () => void }) => {
    const [input, setInput] = useState('');
    const [message, setMessage] = useState('');
    const [solved, setSolved] = useState(false);

    const handleSubmit = () => {
        if (validateCombinationPuzzle2(input)) {
            setMessage('✅ Bonne réponse !');
            setSolved(true);
            setTimeout(onSuccess, 1000);
        } else {
            setMessage('❌ Ce n’est pas le bon mot…');
            setInput('');
        }
    };

    return (
        <div className="space-y-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800">🧠 Le Mot Caché</h2>
            <p className="text-gray-600 italic">Je suis toujours là, mais tu ne me vois jamais. Qui suis-je ?</p>

            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={solved}
                className="px-4 py-2 text-center text-xl border rounded-xl w-60 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-300"
                placeholder="Entrez votre réponse"
            />

            <div>
                <button
                    onClick={handleSubmit}
                    disabled={solved}
                    className="mt-2 px-6 py-2 bg-rose-400 text-white font-semibold rounded-xl hover:bg-rose-500 transition cursor-pointer"
                >
                    Valider
                </button>
            </div>

            {message && <p className="text-sm mt-4">{message}</p>}
        </div>
    );
};

export default Puzzle2;
