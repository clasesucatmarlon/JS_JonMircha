import { GenerateRandomNumber } from '../programs//GenerateRandomNumber';

describe('Determine randon number', () => {
    test('Generated number is between 500 and 600', () => {
        const randomNumber = GenerateRandomNumber(500, 600);
        expect(randomNumber).toBeGreaterThanOrEqual(500);
        expect(randomNumber).toBeLessThanOrEqual(600);
    });

    test('without valueMin or valueMax', () => {
        const randomNumber = GenerateRandomNumber();
        expect(randomNumber).toBeUndefined();
    });
});
