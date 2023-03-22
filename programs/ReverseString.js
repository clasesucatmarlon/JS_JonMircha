// Programa una función que invierta las palabras de una cadena de texto.  
// Por ejemplo: miFuncion("Hola Mundo") devolverá "odnuM aloH".

/**
 * Build a function that, reverse a string
 *
 * @param {string} str input string to reverse
 *
 * @returns {string} reverse string
 */
export const ReverseString = (str) => {
    if (!str) return
    let reverse = '';
    for(let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}

// console.log(ReverseString('Hola Mundo'));