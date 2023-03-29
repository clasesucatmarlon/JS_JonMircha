// Programa una función que obtenga un numero aleatorio entre 501 y 600.


/**
 * Build a function that, generate random number between two values
 *
 * @param {number} valueMin minimum value
 * @param {number} valueMax maximum value
 *
 * @returns {number} random number between valueMin and valueMax
 */
export const GenerateRandomNumber = (valueMin, valueMax) => {
    if (!valueMin || !valueMax) return;
    return Math.floor(Math.random() * (valueMax - valueMin + 1) + valueMin);
}

// console.log(GenerateRandomNumber(500, 600));