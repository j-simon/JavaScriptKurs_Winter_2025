'use strict';

//        0123456
let text="Lorem ipsum dolor sit"
 let suchwort="ipsum"
//let suchwort="isum" // => -1 , nicht finden
console.log(text.indexOf(suchwort)) // => 6

let fundStelle = text.indexOf(suchwort)
if (fundStelle === -1) {
    console.log("Suchwort nicht gefunden!")
} else
{
    console.log("Suchwort gefunden an der Stelle " +fundStelle)
}