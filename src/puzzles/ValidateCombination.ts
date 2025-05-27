export const SECRET_COMBINATION_PUZZLE_1 = '2468';
export const SECRET_COMBINATION_PUZZLE_2 = 'ombre';

export function validateCombinationPuzzle1(input: string): boolean {
    return input === SECRET_COMBINATION_PUZZLE_1;
}

export function validateCombinationPuzzle2(input: string): boolean {
    return input.trim().toLowerCase() === SECRET_COMBINATION_PUZZLE_2;
}
