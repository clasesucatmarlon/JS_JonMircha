import {CountWordsRepeatIntoPhrase} from '../programs/CountWordsRepeatIntoPhrase';

describe('Count words into phrase', () => {
    test('test empty phrase', () => {
        const result = CountWordsRepeatIntoPhrase('');
        expect(result).toBeUndefined();
    });

    test('test without phrase or word', () => {
        const result = CountWordsRepeatIntoPhrase('');
        expect(result).toBeUndefined();
    });

    test('test without phrase and word', () => {
        const expect1 = 2;
        const result = CountWordsRepeatIntoPhrase('hola mundo adios mundo', 'mundo');
        expect(result).toBe(expect1);
    });

});