'use strict';

let vorname = "H1enry Schnell"

console.log(vorname.replace(1, 2)) // Unsinn, ändert nichts

// einfache Ersetzung von links
console.log(vorname.replace("1",'äääää')) // sinnvoll

// mehrfach Ersetzungen mit RegEx
console.log(vorname.replace(/e/g,'äääää')) // sinnvoll