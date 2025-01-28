'use strict';

/* let nachname = "Jones"
let vorname = "Ladislaus"
console.log(`${nachname}, ${vorname.charAt(0)}.`);

nachname = "Simon"
vorname = "Jens"
console.log(`${nachname}, ${vorname.charAt(0)}.`);

nachname = "Schmitz"
vorname = "Kim"
console.log(`${nachname}, ${vorname.charAt(0)}.`);
*/
let transformName = (vorname, nachname) => {
    //console.log(`${nachname}, ${vorname.charAt(0)}`);
    return `${nachname}, ${vorname.charAt(0)}.`;
}

let transformNameRefactored = (vorname, nachname) => `${nachname}, ${vorname.charAt(0)}`;


// 2. Ausführen
console.log(transformName('Ladislaus', 'Jones')) // => 'Jones, L.'

let rueckgabeWert = transformName('Jens', 'Simon') // => 'Jones, L.'
console.log(rueckgabeWert);

console.log(transformName('Kim', 'Schmitz')) // => 'Jones, L.'