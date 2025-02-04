'use strict';

// Die line()-Funktion muss per script-tag vorher aus der Bibliothek geladen werden!
// Das funktioniert nur im Browser!

const triangle = ( height) =>
    (height === 0)
        ? ''
        : `${triangle( height - 1)}OUTPUT\n${line( height  ,  '*' )}`;

console.log(triangle(5));