const original = [1, 2];
const gesamtArray = [];

// falsche Lösung
gesamtArray.push(original);// [1,2]// Referenz wird gespeichert

// mögliche Lösungen! map oder slice()
// gesamtArray.push(original.map((n)=>n));// [1,2]// Referenz wird gespeichert
// gesamtArray.push(original.slice());

original.push(3);           // Original-Array wird verändert
gesamtArray.push(original); // Gleiche Referenz nochmal gespeichert

console.log(gesamtArray); // [[1, 2, 3], [1, 2, 3]]