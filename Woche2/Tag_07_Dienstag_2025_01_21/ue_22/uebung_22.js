// ganzahlig durch 400 teilbar : 2000
// nicht ganzzahlig durch 100, aber ganzzahlig durch 4 teilbar ist. 
// 2024, 2028
// kein Schaltjahr: 2025


'use strict';

let jahr = Number(prompt("Bitte Jahr eingeben!"));


if (jahr % 400 === 0) 
    console.log("Schaltjahr");
else if (jahr % 100 === 0)
    console.log("kein Schaltjahr");
else if (jahr % 4 === 0)
    console.log("Schaltjahr");
else
    console.log("kein Schaltjahr");
