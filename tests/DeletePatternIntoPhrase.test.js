import {DeletePatternIntoPhrase} from '../programs/DeletePatternIntoPhrase';

describe('Test delete pattern into phrase', () => {
    test('empty phrase string', () => {
        const result = DeletePatternIntoPhrase('', 'mar');
        expect(result).toBeUndefined();
    });

    test('empty pattern string', () => {
        const result = DeletePatternIntoPhrase('hola marlon.  Cómo estás marlon', '');
        expect(result).toBeUndefined();
    });

    test('without parameters', () => {
        const result = DeletePatternIntoPhrase();
        expect(result).toBeUndefined();
    });

    test('with phrase and pattern 1', () => {
        const expect1 = '1, 2, 3, 4 y 5'
        const result = DeletePatternIntoPhrase('xyz1, xyz2, xyz3, xyz4 y xyz5', 'xyz');
        expect(result).toBe(expect1);
    });

    test('with phrase and pattern 2', () => {
        const expect2 = ' 123, cala, tir'
        const result = DeletePatternIntoPhrase('mar 123, calamar, martir', 'mar');
        expect(result).toBe(expect2);
    });

});