'use strict';

let vorname = "Jens" ;    // Nomen/Substantiv // Hauptwort
console.log(typeof vorname);
console.log(vorname); // "Jens"

let showNewsletter = () => { // Verb im Imperativ (BefehlsForm)
    console.log('Dear Customer,\n');
    console.log(`We're pleased to inform you that NerdWorld is making a number of new discounts available to you. Please visit http://www.nerdworld.example/discounts for detailed information.`);
    console.log('Happy nerding,\nYour NerdWorld Team.');
}

console.log(typeof showNewsletter);
console.log(showNewsletter) // nicht sinnvoll

console.log(showNewsletter()) // Funktionsaufruf zum 1. mal
console.log(showNewsletter()) // Funktionsaufruf zum 2. mal

/*



= () => {
   
};
*/