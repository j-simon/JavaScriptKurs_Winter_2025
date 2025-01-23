'use strict';

let name = 'Heribert  Gold ';
name = name.trim();
let spacePosition = name.lastIndexOf(' ');

// Der Vorname muss nocheinmal einzeln getrimmt werden!
let firstName = name.substr(0, spacePosition).trim();

let lastName = name.substr(spacePosition + 1);

// genau schauen, ob noch irgendwo Leerzeichen mit im String sind
console.log("---->" + firstName + "<----");
console.log("---->" + lastName + "<----");

