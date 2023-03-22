import {TransformStringToArray} from '../programs/TransformStringToArray';

describe('String to Array', () => {
    test('test empty string', () => {
        const expect1 = [
            'H', 'o', 'l', 'a',
            ' ', 'm', 'u', 'n',
            'd', 'o'
        ];
        const result = TransformStringToArray('Hola mundo', '');
        expect(result).toStrictEqual(expect1);
    });

    test('test empty string', () => {
        const expect2 = [ 'Hola', 'mundo' ];
        const result = TransformStringToArray('Hola mundo', ' ');
        expect(result).toStrictEqual(expect2);
    });

    test('test witout character', () => {
        const expect3 = [ 'Hola mundo' ];
        const result = TransformStringToArray('Hola mundo');
        expect(result).toStrictEqual(expect3);
    });

    test('test witout parameters', () => {
        const result = TransformStringToArray();
        expect(result).toBeUndefined();
    });

});