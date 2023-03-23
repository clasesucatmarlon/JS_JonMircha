import {DeterminePalindrome} from '../programs//DeterminePalindrome';

describe('Determine Polindrome', () => {
    test('test empty phrase', () => {
        const result = DeterminePalindrome('');
        expect(result).toBeUndefined();
    });

    test('polindrome is True', () => {
        const result = DeterminePalindrome('Salas');
        expect(result).toBe(true);
    });

    test('polindrome is True', () => {
        const result = DeterminePalindrome('Dabale arroz a la zorra el abad');
        expect(result).toBe(true);
    });

    test('polindrome is False', () => {
        const result = DeterminePalindrome('Marlon');
        expect(result).toBe(false);
    });

});