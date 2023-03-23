// Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro).  
// Por ejemplo: mifuncion("Salas") devolverá true.

import {ReverseString} from './ReverseString.js';

/**
 * Build a function that, validate if a word is palindrome
 *
 * @param {string} str input string to reverse
 *
 * @returns {boolean} true or false
 */
export const DeterminePalindrome = (str) => {
    if (!str) return 
    let reverse = ReverseString(str);
    let palindrome = false;
    for(let i = 0; i < str.length; i++) {
        if (str[i] === reverse[i]) palindrome = true;
    }
    return palindrome;
};


// console.log(DeterminePalindrome('Salas'));