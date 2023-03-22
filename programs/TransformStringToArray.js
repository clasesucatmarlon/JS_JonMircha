// Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter.  
// Por ejemplo: miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].


/**
 * Build a function that, given a String, returns an Array of texts separated by a certain character
 *
 * @param {string} str input string
 * @param {string} character character to separated
 *
 * @returns {array} array of texts separated by character
 */
export const TransformStringToArray = (str, character) => {
    if (!str) return 
    return str.split(character);
}

// console.log(TransformStringToArray());