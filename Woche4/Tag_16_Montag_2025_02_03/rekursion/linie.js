'use strict';

const line = (length, character) =>
    // length=10  length =9
    /*if (length === 0) return '';
    //          9     8 7 6 5 4 3 2 1 0
    return line(length - 1, character) + character; '' + "*" + "*"
*/

    length === 0 ? '' : line(length - 1, character) + character; // '' + "*" + "*" + "*"

console.log(line(10200, '💚'));

// Schleife
// for - loop , for -Schleife
const linieSchleifeFor = (length, character) => {
    let outputText = "";
    for (let i = 1; i <= length; i++) {
        outputText += character;
    }
    return outputText
}
console.log(linieSchleifeFor(100000, '🦌'));

let outputText = "";
// while - loop , while - Schleife
let i = 1
while (i <= length) {
    outputText += character;
    i++;
}




// ''
console.log(line(4, 10));
console.log(line(5, '🦌'));
console.log(line(10, '🦌'));