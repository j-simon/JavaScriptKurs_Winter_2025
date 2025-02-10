'use strict';

// const vornamen=["Jens","Anna"];

const vornamen=[];
vornamen[0]="Jens";
vornamen[2]="Anna";

console.log('vornamen --->', vornamen);
console.log('vornamen[1] --->', vornamen[1]);

console.log(Array(10))//.fill(0)

const namen = {}; // leeres Objekt

namen.vorname="Jens"; // create
namen.vorname="Kim";  // update
namen.vorname +=" Kim";
//namen.12=12;
namen.alter=42;

namen["nach name"]="Simon";
namen[12]=12;
console.log('namen --->', namen);

// console.log(JSON.stringify(namen)); // JS - Werte zu JSON-Text-Werte
// console.log(typeof JSON.stringify(namen));

const daten = JSON.parse('{"alter" : 12}')
//console.log('daten --->', daten);
console.log(daten.alter)