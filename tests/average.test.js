import {DetermineAverageArray} from '../programs/functions';

describe('Average', () => {
    test('Test for an array with 1 element', () => {
        const result = DetermineAverageArray([3]);
        expect(result).toBe(3);
    });

    test('Test for an array with 4 elements', () => {
        const result = DetermineAverageArray([2, 3, 10, 15]);
        expect(result).toBe(7.5);
    });

    test('Test for an empty array', () => {
        const result = DetermineAverageArray([]);
        expect(result).toBeUndefined();
    });
});



// ***************************** ES5

// const {DetermineAverageArray} = require('../programs/functions');

// describe('Average', () => {
//     test('Test for an array with 1 element', () => {
//         result = DetermineAverageArray([3]);
//         expect(result).toBe(3);
//     });

//     test('Test for an array with 4 elements', () => {
//         result = DetermineAverageArray([2, 3, 10, 15]);
//         expect(result).toBe(7.5);
//     });

//     test('Test for an empty array', () => {
//         result = DetermineAverageArray([]);
//         expect(result).toBeUndefined();
//     });
// });

