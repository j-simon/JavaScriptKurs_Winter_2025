'use strict';

let cats = [];
console.log(cats);
console.log(cats.length);

cats.unshift("Kalle");
console.log(cats);
console.log(cats.length);

cats.unshift("Rudi");
console.log(cats);
console.log(cats.length);

/*cats.shift(); // am Anfang der Liste einen entfernen
console.log(cats);
console.log(cats.length);
*/

// Werteermittlung eines Einzelelemntes einer Liste
console.log(cats[0])
console.log(cats[1])

let vorname;
let nachname;

//           vorname, nachname
let namen =['Jens','Simon']

console.log(namen[0])
console.log(namen[1])

//`${namen[0], ..}` 
namen[5] = 'Pete';
console.log(namen.length);
console.log(namen);
console.log(namen[2]);