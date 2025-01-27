'use strict';

// wie reagieren Operationen mit nicht deklarierten Variablen?
let operand1; // undefined
let operand2; // undefined
// undefined + undefined ergint NaN 
console.log(operand1 + operand2); // NaN



// 1. Deklarattion der Funktion
// Eingänge a und b ( Parametervariablen)
const berechneSumme = (a, b) => {
    // let summe = a + b; 
    // return summe; // ein Ausgang ist möglich :summe
   
     return a + b;
}
const berechneSummeMinimaleSchreibform = (a, b) => a + b;



// 2. Aufruf der Funktion
console.log(berechneSumme(3, 6 )); // 9
console.log(berechneSumme(3, 8)); // 11
console.log(berechneSumme()); // NaN 
