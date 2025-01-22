let text =prompt("Gesamttext eingeben");
let suchText =prompt("Suchtext eingeben");

if (text.indexOf(suchText) !== -1) {
    console.log("Ausdruck gefunden!");
} else {
    console.log("Ausdruck nicht gefunden!");
}