'use strict;'


let beispiel="123";
// let beispiel="1";
// let beispiel="12";

// length
let anzahlNullen = 7 -  beispiel.length;
console.log('anzahlNullen --->', anzahlNullen);

// slice 
let nullen = "000000".slice(0, anzahlNullen)
console.log('nullen --->', nullen);

// ergebnis
let ergebnis = nullen + beispiel;
console.log('ergbebnis --->', ergebnis);
