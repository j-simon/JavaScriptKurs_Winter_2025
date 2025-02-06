'use strict';

const times = (n, fn) => {
    const results = Array(n).fill(0);
    results.forEach((x, i, r) => (r[i] = fn(i)));
    return results;
};

let beispiel="123";
// let beispiel="1";
// let beispiel="12";

// length
let anzahlNullen = 7 -  beispiel.length;
console.log('anzahlNullen --->', anzahlNullen);

console.log(times(anzahlNullen , () => '0').join("") + +beispiel)