import { validateCombinationPuzzle1 } from '../../src/puzzles/ValidateCombination';
import { SECRET_COMBINATION_PUZZLE_1 } from '../../src/puzzles/ValidateCombination';

describe('validateCombinationPuzzle1', () => {
    it('should return true for the correct combination', () => {
        expect(validateCombinationPuzzle1(SECRET_COMBINATION_PUZZLE_1)).toBe(true);
    });

    it('should return false for an incorrect combination', () => {
        expect(validateCombinationPuzzle1('0000')).toBe(false);
        expect(validateCombinationPuzzle1('abcd')).toBe(false);
        expect(validateCombinationPuzzle1('')).toBe(false);
    });

    it('should be case sensitive', () => {
        expect(validateCombinationPuzzle1(SECRET_COMBINATION_PUZZLE_1)).toBe(true);
        expect(validateCombinationPuzzle1(SECRET_COMBINATION_PUZZLE_1 + ' ')).toBe(false);
        expect(validateCombinationPuzzle1(' ' + SECRET_COMBINATION_PUZZLE_1)).toBe(false);
    });
});
