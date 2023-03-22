import {TrimCharactersOfString} from '../programs/TrimCharactersOfString';

describe('Trim a string', () => {
    test('Test trim a string', () => {
        const result = TrimCharactersOfString('Hola Marlon, probando recortar cadenas de texto', 11);
        expect(result).toBe('Hola Marlon');
    });

    test('Test empty string', () => {
        const result = TrimCharactersOfString('', 4);
        expect(result).toBeUndefined();
    });

    test('Test string length less than quantity', () => {
        const result = TrimCharactersOfString('Hola', 5);
        expect(result).toBeUndefined();
    });

});