import {ReverseString} from '../programs/ReverseString';

describe('Reverse string', () => {
    test('test empty string', () => {
        const result = ReverseString('');
        expect(result).toBeUndefined();
    });

    test('test string of characters', () => {
        const expect1 = 'odnuM aloH'
        const result = ReverseString('Hola Mundo');
        expect(result).toBe(expect1);
    });

    test('test string of numbers', () => {
        const expect2 = '987654321'
        const result = ReverseString('123456789');
        expect(result).toBe(expect2);
    });

});