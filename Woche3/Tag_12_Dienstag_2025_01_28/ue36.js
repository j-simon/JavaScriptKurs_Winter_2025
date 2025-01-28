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
let logTransformedName = (vorname, nachname) => {
    console.log(`${nachname}, ${vorname.charAt(0)}`);
}
// 2. Ausführen
logTransformedName('Ladislaus', 'Jones') // => 'Jones, L.'
logTransformedName('Jens', 'Simon') // => 'Jones, L.'
logTransformedName('Kim', 'Schmitz') // => 'Jones, L.'