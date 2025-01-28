'use strict';

let eingabeBeispiel = "https://google.de";//1006.org";

let ausgabe;

ausgabe = `<a href="${eingabeBeispiel}">${eingabeBeispiel}</a>`;
console.log(ausgabe);

// jetzt mit funktion
// 1. Deklaration
let erzeugeHTMLLink = (url) => {
    return `<a href="${url}">${url}</a>`;
}
// 2. Ausführen
console.log(erzeugeHTMLLink(eingabeBeispiel));
console.log(erzeugeHTMLLink('http://1006.org'));