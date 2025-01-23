'use strict';

// inludes und startsWith vervollständigen die Suchfunktionen 
// und ergänzen indexOf

let suchText = "Lorem ipsum dolor sit - ein Blindtext ;-)"

// Numerische Antwortfunktion : -1 nicht gefunden, >=0 gefunden mit exakter Positionsangabe
console.log(suchText.indexOf("ipsum")) // 6 , gefunden! an indexPosition 6

// Boolesche Antwort Funktionen : true oder false
console.log(suchText.includes("ipsum")) // true , gefunden!
console.log(suchText.startsWith("Lorem")) // true gefunden! am Anfang des Suchtextes

console.log(suchText.search("ipsum")) // 6, gefunden, funktioniert wie indexOf

let regExp = /.a/;

