import {DeterminePalindrome} from '../programs/functions';

// console.log(DeterminePalindrome('marlon'))

describe('Palindrome', () => {
    test('Test for determine if a marlon is palindrome', () => {
        const result =  DeterminePalindrome('marlon');
        expect(result).toBe('nolram');
    });
    
    test('Test of empty string', () => { 
        const result = DeterminePalindrome('');
        expect(result).toBe(''); 
    });
    
    test('Test of undefined', () => { 
        const result = DeterminePalindrome();
        expect(result).toBeUndefined(); 
    });
});


// ***************************** ES5

// const {DeterminePalindrome} = require('../programs/functions');


// describe('Palindrome', () => {
//     test('Test for determine if a marlon is palindrome', () => {
//         const result =  DeterminePalindrome('marlon');
//         expect(result).toBe('nolram');
//     });
    
//     test('Test of empty string', () => { 
//         const result = DeterminePalindrome('');
//         expect(result).toBe(''); 
//     });
    
//     test('Test of undefined', () => { 
//         const result = DeterminePalindrome();
//         expect(result).toBeUndefined(); 
//     });
// });