'use strict';

// 1.                      Parameter
const cylindricalVolume = (radius, height) => {
    // console.log('radius --->', radius);
    // console.log('height --->', height);
    
    if (height === undefined) console.log("du hast height vergessen");
    return Math.PI * radius * radius * height;
}


// 2.                         // Argumente     
// let ergebnis = cylindricalVolume(4, 6);
// console.log(ergebnis);

// 2.
// ergebnis = cylindricalVolume(14);
// console.log(ergebnis);
const testFkt= () => {return 30};
const cylindricalVolume2 = (radius = 10, height = testFkt() ) => {
        console.log('radius --->', radius);
        console.log('height --->', height);
        return Math.PI * radius * radius * height;
}
let ergebnis = cylindricalVolume2(14,5);
console.log(ergebnis);

ergebnis = cylindricalVolume2(14);
console.log(ergebnis);

ergebnis = cylindricalVolume2();

console.log(ergebnis);
console.log('radius --->');
console.log(1,2,3,4,5,6,6,8,7,7,7,7,7);

const log =(para1,para2) =>{}