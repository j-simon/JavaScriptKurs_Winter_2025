'use strict';

let stundenplan = [
//     0          1         2    
    ["Mathe", "Deutsch", "Sport"],      // 0 Montag
    ["Englisch", "Biologie", "Kunst"],  // 1 Dienstag
    ["Physik", "Geschichte", "Musik"],  // 2 Mittwoch
    ["Chemie", "Geografie", "Ethik"],   // 3 Donnerstag
    ["Informatik", "Philosophie", "Französisch"] // 4 Freitag
];
                // Die komplette 0. Zeile      
// console.log("Montag :", stundenplan[0]);

//                                         [Zeile][Spalte]
console.log("Donnerstag, 3.Stunde: ", stundenplan[3][2]); //  Ethik

// stundenplan.map((tag) => console.log("Tag: ",tag))
stundenplan.map((tag) => tag.map((stunde)=>console.log("Stunde: ",stunde)));

console.log('abcdefgh'.indexOf('e'));