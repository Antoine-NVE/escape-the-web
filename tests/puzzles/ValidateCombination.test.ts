import {
    validateCombinationPuzzle1,
    validateCombinationPuzzle3,
    SECRET_COMBINATION_PUZZLE_1,
    SECRET_COMBINATION_PUZZLE_3,
    isLetterInWord,
    revealLetters,
} from '../../src/puzzles/ValidateCombination';

describe('validateCombinationPuzzle1', () => {
    it('should return true for the correct combination', () => {
        expect(validateCombinationPuzzle1(SECRET_COMBINATION_PUZZLE_1)).toBe(true);
    });
    it('should return false for an incorrect combination', () => {
        expect(validateCombinationPuzzle1([1, 2, 3, 4])).toBe(false);
        expect(validateCombinationPuzzle1([3, 6, 2])).toBe(false);
        expect(validateCombinationPuzzle1([])).toBe(false);
    });

    it('should handle different order of numbers', () => {
        expect(validateCombinationPuzzle1([6, 3, 7, 2])).toBe(false);
    });
});

describe('validateCombinationPuzzle3', () => {
    it('should return true for the correct combination', () => {
        expect(validateCombinationPuzzle3(SECRET_COMBINATION_PUZZLE_3)).toBe(true);
    });

    it('should return false for an incorrect combination', () => {
        expect(validateCombinationPuzzle3(['rose', 'bleu', 'vert'])).toBe(false);
        expect(validateCombinationPuzzle3(['rose', 'bleu', 'vert', 'jaune', 'orange'])).toBe(false);
        expect(validateCombinationPuzzle3([])).toBe(false);
    });

    it('should handle different order of colors', () => {
        expect(validateCombinationPuzzle3(['bleu', 'rose', 'vert', 'jaune'])).toBe(false);
    });
});

describe('isLetterInWord', () => {
    it('should return true for letters in the word', () => {
        expect(isLetterInWord('o')).toBe(true);
        expect(isLetterInWord('m')).toBe(true);
        expect(isLetterInWord('b')).toBe(true);
        expect(isLetterInWord('r')).toBe(true);
        expect(isLetterInWord('e')).toBe(true);
    });

    it('should return false for letters not in the word', () => {
        expect(isLetterInWord('a')).toBe(false);
        expect(isLetterInWord('z')).toBe(false);
        expect(isLetterInWord('x')).toBe(false);
    });
});

describe('revealLetters', () => {
    it('should reveal correct letters based on guessed letters', () => {
        const word = 'ombre';
        const guessedLetters = ['o', 'm', 'b'];
        const revealed = revealLetters(word, guessedLetters);
        expect(revealed).toEqual(['o', 'm', 'b', '_', '_']);
    });

    it('should return all underscores if no letters are guessed', () => {
        const word = 'ombre';
        const guessedLetters: string[] = [];
        const revealed = revealLetters(word, guessedLetters);
        expect(revealed).toEqual(['_', '_', '_', '_', '_']);
    });

    it('should return the full word if all letters are guessed', () => {
        const word = 'ombre';
        const guessedLetters = ['o', 'm', 'b', 'r', 'e'];
        const revealed = revealLetters(word, guessedLetters);
        expect(revealed).toEqual(['o', 'm', 'b', 'r', 'e']);
    });
});
