// Programa una función que elimine cierto patrón de caracteres de un texto dado.
// Por ejemplo: miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5".

// import {TransformStringToArray} from './TransformStringToArray.js';

/**
 * Build a function that, delete a patter into phrase
 *
 * @param {string} phrase input string to search pattern
 * @param {string} pattern pattern to be deleted
 *
 * @returns {string} phrase new without pattern
 */
export const DeletePatternIntoPhrase = (phrase, pattern) => {
    if (!phrase || !pattern) return 
    // let arrayWords = TransformStringToArray(phrase, ' ');
    let newString = '';
    // arrayWords.map( (word) => {
        //     newString += word.replace(pattern, '');
        //     newString += ' ';
        // }); 
    // newString = phrase.replace(new RegExp(pattern, 'ig'), '');
    newString = phrase.replaceAll(pattern, '');
    return newString;
}


// console.log(DeletePatternIntoPhrase("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));
// console.log(DeletePatternIntoPhrase("mar 123, calamar, martir", "mar"));