// 'use strict';

// let gesamterName = 'Ladislaus Coolio 3.Vorname Jones';

// let spacePosition = gesamterName.lastIndexOf(' ');
// // let firstName = gesamterName.substr(0, spacePosition);
// // let lastName = gesamterName.substr(spacePosition + 1);

// let firstName = gesamterName.substring(0, spacePosition);
// let lastName = gesamterName.substring(spacePosition + 1);

// console.log("Vorname(n): " + firstName); // Ladislaus
// console.log("Nachnam(n): " + lastName); // Coolio Jones

'use strict';

let name = 'Heribert  Gold ';
name = name.trim();
let spacePosition = name.lastIndexOf(' ');


// vollständige "langsame" Variante, in 2 statements
// let firstName = name.substr(0, spacePosition);
// firstName=firstName.trim()

// einzeiler/oneliner , schnelle Variante
// chaining von funktionen
let firstName = name.substr(0, spacePosition).trim();


let lastName = name.substr(spacePosition + 1);
lastName=lastName.trim();

// genau schauen, ob noch irgendwo Leerzeichen mit im String sind
console.log("---->" + firstName + "<----");
console.log("---->" + lastName + "<----");

