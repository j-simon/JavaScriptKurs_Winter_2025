'use strict';

//let itemNumber = '123';
 let itemNumber = '7';
//let itemNumber = '07';
// let itemNumber = '007';

let correctedItemNumber = itemNumber.charAt(0) === '0' ?   itemNumber : '0' + itemNumber
//let correctedItemNumber = itemNumber.startsWith('0') === true ? itemNumber : `0${itemNumber}`

console.log(itemNumber);
console.log(correctedItemNumber);

/*
Beispiele:

    123 => 0123

    7 => 07

    07 => 07

    007 => 007

*/