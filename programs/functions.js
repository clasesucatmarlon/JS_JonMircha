function DeterminePalindrome (string) {
    if (typeof string === 'undefined') return 
    return string
        .split('')
        .reverse()
        .join('')
};

function DetermineAverageArray (array) {
    if (array.length === 0) return
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum / array.length
};

export {
    DetermineAverageArray,
    DeterminePalindrome
}


// ***************************** ES5

// const DeterminePalindrome = (string) => {
//     if (typeof string === 'undefined') return 
//     return string
//         .split('')
//         .reverse()
//         .join('')
// };

// const DetermineAverageArray = (array) => {
//     if (array.length === 0) return
//     let sum = 0;
//     array.forEach(element => {
//         sum += element;
//     });
//     return sum / array.length
// };

// module.exports = {
//     DeterminePalindrome,
//     DetermineAverageArray
// };