import {
    validateCombinationPuzzle1,
    validateCombinationPuzzle2,
    SECRET_COMBINATION_PUZZLE_1,
    SECRET_COMBINATION_PUZZLE_2,
} from '../../src/puzzles/ValidateCombination';

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

// SECRET_COMBINATION_PUZZLE_2 = 'ombre';
describe('validateCombinationPuzzle2', () => {
    it('should return true for the correct combination', () => {
        expect(validateCombinationPuzzle2(SECRET_COMBINATION_PUZZLE_2)).toBe(true);
        expect(validateCombinationPuzzle2(SECRET_COMBINATION_PUZZLE_2.toUpperCase())).toBe(true);
    });

    it('should return false for an incorrect combination', () => {
        expect(validateCombinationPuzzle2('')).toBe(false);
        expect(validateCombinationPuzzle2('ombre123')).toBe(false);
    });

    it('should ignore leading and trailing spaces', () => {
        expect(validateCombinationPuzzle2(SECRET_COMBINATION_PUZZLE_2 + ' ')).toBe(true);
        expect(validateCombinationPuzzle2('  ' + SECRET_COMBINATION_PUZZLE_2 + '  ')).toBe(true);
    });
});
