// Programa una función que cuente el número de caracteres de una cadena de texto.  
// Por ejemplo: miFuncion("Hola Mundo") devolverá 10.

export const TrimCharactersOfString = (str, quantity) => {
    if (str.length < quantity) return 
    return str.substr(str, quantity);
};

console.log(TrimCharactersOfString('Hola', 5));
