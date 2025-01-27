'use strict';
const vorname = "Jens"; //global variable


function showNewsletterAlteSchreibform(vorname) {
    console.log(`Dear ${vorname},\n`); // local variable
    console.log(`We're pleased to inform you that NerdWorld is making a number of new discounts available to you. Please visit http://www.nerdworld.example/discounts for detailed information.`);
    console.log('Happy nerding,\nYour NerdWorld Team.');
}

// Parametervariable wird ohne let und const notiert
// Pfeilfunktion =>
let showNewsletter = (vorname) => { // Verb im Imperativ (BefehlsForm)
    console.log(`Dear ${vorname},\n`);
    console.log(`We're pleased to inform you that NerdWorld is making a number of new discounts available to you. Please visit http://www.nerdworld.example/discounts for detailed information.`);
    console.log('Happy nerding,\nYour NerdWorld Team.');
}

console.log(showNewsletter("Jens")) // Funktionsaufruf zum 1.
console.log(showNewsletter("Anne")) // Funktionsaufruf zum 2.

console.log(showNewsletterAlteSchreibform("Jens")) // Funktionsaufruf zum 1.
console.log(showNewsletterAlteSchreibform("Anne")) // Funktionsaufruf zum 2.
/*
Grundstruktur der Pfeilfunktionssyntax
= () => {

};
*/