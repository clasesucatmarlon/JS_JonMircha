import {CountNumbersCharsString} from '../programs/CountNumbersCharsString';

describe('Count Numbers Characters in String', () => {
    test('test empty string', () => {
        const result = CountNumbersCharsString('');
        expect(result).toBe(0);
    });

    test('Test any string', () => {
        const result = CountNumbersCharsString('house');
        expect(result).toBe(5);
    });

});