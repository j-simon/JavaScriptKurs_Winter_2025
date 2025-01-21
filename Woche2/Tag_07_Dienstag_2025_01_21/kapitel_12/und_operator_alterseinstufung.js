'use strict';

let alter = Number(prompt("Gib bitte Dein Alter ein"))

// < 16
// 16 <-> 18
// > 18

// Variante 1, nur mit Vergleichsoperatoren und if-else
if (alter < 16)
    console.log("Du bist noch keine 16");
else
    if (alter < 18)
        console.log("16 bis 18");
    else
        console.log("grösser gleich 18")


// Variante 2 mit logischem Operator && (UND)
if (alter < 16)
    console.log("Du bist noch keine 16");
else if (alter >= 16 && alter < 18)
        console.log("16 bis 18");
else console.log("grösser gleich 18")


// Variante 3 mit logischem Operator && (UND), aber ohne else
if (alter < 16)
    console.log("Du bist noch keine 16");
if (alter >= 16 && alter < 18)
    console.log("16 bis 18");
if (alter >= 18)
    console.log("grösser gleich 18");

