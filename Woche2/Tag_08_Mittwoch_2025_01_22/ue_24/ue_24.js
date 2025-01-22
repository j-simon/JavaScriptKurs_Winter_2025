//let vorname = "Jens"; // "h"
let vorname = "h";

let nachname = "Simon"; // "djdjjjjjjjjjjjjjjjjjdfhfhfhfhffhfhfhfhfhfhhfhfhffhfhhfhfhfhfhfhfhfhfhfhfhfhfhfhfhfhfhfioerjiroetujeoirtueortuieorutioeroutozuoirzuiouziouziouziuzi";
//let nachname = "djdjjjjjjjjjjjjjjjjjdfhfhfhfhffhfhfhfhfhfhhfhfhffhfhhfhfhfhfhfhfhfhfhfhfhfhfhfhfhfhfhfioerjiroetujeoirtueortuieorutioeroutozuoirzuiouziouziouziuzi";

let geschlecht = "E"; // "m"
//let geschlecht = "m";

let alter = 50; // 200
// let alter = 200;

//vorname = prompt("Gib bitte Deinen Vornamen ein");
//nachname = prompt("Gib bitte Deinen Nachnamen ein");
//geschlecht = prompt("Gib bitte Dein Geschlecht ein");
//alter = prompt("Gib bitte Dein Alter ein");


// Vorname und Nachname müssen zwischen 2 und 100 Zeichen lang sein.
if (vorname.length >= 2 && vorname.length <= 100) {
    console.log("vorname richtig");
} else {
    console.log("vorname falsch");
}

if (nachname.length >= 2 && nachname.length <= 100) {
    console.log("nachname richtig");
} else {
    console.log("nachname falsch");
}

if (geschlecht === "m" || geschlecht === "f" || geschlecht === "d") {
    console.log("geschlecht richtig");
} else {
    console.log("geschlecht falsch");
}

if (alter <= 150) { // eventuell noch auf falsche buchstaben prüfen
// if (alter <= 150 && !isNaN(alter)) 
    console.log("alter richtig");
} else {
    console.log("alter falsch");
}
