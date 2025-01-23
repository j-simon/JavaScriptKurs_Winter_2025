'use strict';

let name = 'Ladislaus Jones';
let spacePosition = name.indexOf(' ');

let firstName = name.substr(0, spacePosition);
let lastName = name.substr(spacePosition + 1);


console.log(`${lastName}, ${firstName.charAt(0)}.`);