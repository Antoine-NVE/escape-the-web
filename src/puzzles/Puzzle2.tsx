import { useEffect, useState } from 'react';
import { SECRET_COMBINATION_PUZZLE_2, isLetterInWord, revealLetters } from './ValidateCombination';

const Puzzle2 = ({ onSuccess }: { onSuccess: () => void }) => {
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [message, setMessage] = useState('');
    const [isLocked, setIsLocked] = useState(false);
    const [solved, setSolved] = useState(false);

    const revealed = revealLetters(SECRET_COMBINATION_PUZZLE_2, guessedLetters);
    const wordCompleted = !revealed.includes('_');

    useEffect(() => {
        if (wordCompleted && !solved) {
            setMessage('✅ Bien joué ! Le mot est complet.');
            setSolved(true);
            setTimeout(onSuccess, 1000);
        }
    }, [wordCompleted, solved, onSuccess]);

    const handleKeyDown = (e: KeyboardEvent) => {
        const letter = e.key.toLowerCase();
        if (solved || isLocked || !/^[a-z]$/.test(letter)) return;

        if (guessedLetters.includes(letter)) return;

        if (isLetterInWord(letter)) {
            setGuessedLetters((prev) => [...prev, letter]);
            setMessage('');
        } else {
            setMessage(`❌ La lettre "${letter}" ne fait pas partie du mot.`);
            setIsLocked(true);
            setTimeout(() => {
                setIsLocked(false);
                setMessage('');
            }, 5000);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [guessedLetters, isLocked, solved]);

    return (
        <div className="space-y-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800">🔤 Mot à retrouver</h2>
            <p className="text-gray-600 italic">Je suis toujours là, mais tu ne me vois jamais. Qui suis-je ?</p>
            <p className="text-gray-600 italic">
                Tape une lettre au clavier. Une mauvaise lettre = 5 secondes de pénalité.
            </p>

            <div className="flex justify-center gap-3 text-3xl font-mono text-gray-800">
                {revealed.map((char, index) => (
                    <span key={index} className="w-10 border-b-2 border-gray-400">
                        {char !== '_' ? char : ''}
                    </span>
                ))}
            </div>

            {isLocked && <p className="text-sm text-red-600">⏳ Attends 5 secondes avant de réessayer.</p>}

            {message && <p className="text-sm mt-4">{message}</p>}
        </div>
    );
};

export default Puzzle2;
