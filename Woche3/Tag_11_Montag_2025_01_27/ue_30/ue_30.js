'use strict';

let heuHaufen = 'Heuhaufen Heuhaufen Heuhaufen Heuhaufen Heuhaufen Heuhaufen Heuhaufen Nadel Heuhaufen Heuhaufen Heuhaufen Heuhaufen Heuhaufen Heuhaufen Heuhaufen Heuhaufen Heuhaufen';
let nadel = "Nadel";

// Finde nun heraus, an welcher Position sich die Nadel befindet, und logge diese Position
// in die Konsole.
// Übrigens: Zählen gilt nicht!

console.log(heuHaufen.indexOf(nadel)) // 70 // mit string, regex verboten
console.log(heuHaufen.search(nadel)) // 70 // mit string oder regex


let haystack = 'haystack haystack haystack haystack haystack haystack haystack needle haystack haystack haystack haystack haystack haystack haystack haystack haystack';

console.log(haystack.indexOf('needle'));
