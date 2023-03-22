// Programa una función para contar el número de veces que se repite una palabra en un texto largo.  
// Por ejemplo: miFuncion("hola mundo adios mundo", "mundo") devolverá 2.


/**
 * Build a function that, count number of times that repeat a word into a phrase
 *
 * @param {string} phrase input phrase
 * @param {string} word word to find into phrase
 *
 * @returns {number} numbers of times that appears the word into of prase
 */
export const CountWordsRepeatIntoPhrase = (phrase, word) => {
    if (!phrase || !word) return;
    let countWords = 0
    const arrayWords = phrase.split(' ');

    arrayWords.map( (item) => {
        (item === word) && (countWords += 1)
            
    });
    return countWords;
countWords}

// console.log(CountWordsRepeatIntoPhrase("hola mundo adios mundo"));