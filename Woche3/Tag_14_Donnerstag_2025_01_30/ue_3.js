'use strict';
//       ("Jens","Simon")
// const transformName = (firstName, lastName) =>
// `${lastName}, ${firstName.charAt(0)}.`;


const transformName = (firstNames, lastName) => {
    console.log(firstNames);
    //firstNames.map((name) => name.charAt(0) + "." )
    let zwischenErgebnisArray = firstNames.map((name) => {
        console.log(name, `${name.charAt(0)}.`);
        return `${name.charAt(0)}.`;
    })
    return zwischenErgebnisArray.join(" ") + " " + lastName
}

const transformNameKurz = (firstNames, lastName) =>
    firstNames.map((name) => `${name.charAt(0)}.`).join(" ") + " " + lastName


const transformNameKurz2 = (firstNames, lastName) =>
    `${firstNames.map((name) => `${name.charAt(0)}.`).join(" ")} ${lastName}`



// 2. Aufruf
let rueckgabe = transformName(['Ladislaus', 'Coolio', 'Barry'], 'Jones');
console.log(rueckgabe);
// => 'L. C. B. Jones'

rueckgabe = transformNameKurz(['Ladislaus', 'Coolio', 'Barry'], 'Jones');
console.log(rueckgabe);
// => 'L. C. B. Jones'

rueckgabe = transformNameKurz2(['Ladislaus', 'Coolio', 'Barry'], 'Jones');
console.log(rueckgabe);
// => 'L. C. B. Jones'