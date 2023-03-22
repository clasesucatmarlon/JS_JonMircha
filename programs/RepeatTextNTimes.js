// Programa una función que repita un texto X veces.  
// Por ejemplo; miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.


/**
 * Build a function that, repeat a text N times
 *
 * @param {string} text input string to repeat
 * @param {number} times number of times to repeat a text
 *
 * @returns {string} text repeat N times
 */
export const RepeatTextNTimes = (text, times) => {
    if (text === '') return
    if (!text && !times) return
    if (!text || !times) return
    text += ' ';
    return text.repeat(times);
}

console.log(RepeatTextNTimes('Hola', 4));