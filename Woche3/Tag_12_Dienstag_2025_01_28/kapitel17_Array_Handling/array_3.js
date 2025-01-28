'use strict';

let laender = ['Deuschtland', "England", `Dänemark`, "Spanien"];

// substring-String hat ähnliches Verhalten(anfang, laenge)
console.log("abcd".substr(2, 3)); // 'cd'
console.log("abcd".substring(2, 3)); //'c'
console.log(laender.slice(1, 3)); // von index 2 , 3 exclusive (gehört nicht mehr dazu)
laender = laender.slice(1, 3); //
console.log(laender);

laender = ['Deuschtland', "England", `Dänemark`, "Spanien"];
laender.splice(1, 2, "Po rtugal") // start:1 deleteCount:1, item1..n
console.log(laender);