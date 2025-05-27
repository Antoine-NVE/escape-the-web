export const SECRET_COMBINATION_PUZZLE_1 = [3, 6, 2, 7];
export const SECRET_COMBINATION_PUZZLE_2 = 'ombre';
export const SECRET_COMBINATION_PUZZLE_3 = ['red', 'blue', 'green'];

export function validateCombinationPuzzle1(input: number[]): boolean {
    return JSON.stringify(input) === JSON.stringify(SECRET_COMBINATION_PUZZLE_1);
}

export function validateCombinationPuzzle3(input: string[]): boolean {
    return JSON.stringify(input) === JSON.stringify(SECRET_COMBINATION_PUZZLE_3);
}

export function isLetterInWord(letter: string): boolean {
    return SECRET_COMBINATION_PUZZLE_2.includes(letter.toLowerCase());
}

export function revealLetters(word: string, guessedLetters: string[]): string[] {
    return word.split('').map((char) => (guessedLetters.includes(char.toLowerCase()) ? char : '_'));
}
