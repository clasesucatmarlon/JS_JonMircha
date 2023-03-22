import {RepeatTextNTimes} from '../programs/RepeatTextNTimes';

describe('Repeat Text', () => {
    test('test empty string', () => {
        const result = RepeatTextNTimes('', 5);
        expect(result).toBeUndefined();
    });

    test('test without parameters', () => {
        const result = RepeatTextNTimes();
        expect(result).toBeUndefined();
    });

    test('test without times', () => {
        const result = RepeatTextNTimes('Hola');
        expect(result).toBeUndefined();
    });

    test('test without text', () => {
        const result = RepeatTextNTimes(5);
        expect(result).toBeUndefined();
    });

    test('test to repeat a text', () => {
        const result = RepeatTextNTimes('Hola', 4);
        expect(result).toBe('Hola Hola Hola Hola ');
    });
});