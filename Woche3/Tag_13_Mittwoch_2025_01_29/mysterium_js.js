'use strict';

// Einzelwertdatentypen number,string , boolean
// Mehrwertdatentyp object

let vorname = "Jens"

let verändereName = (vorname) => {
    vorname = vorname + " [verändert]"
    return vorname;
}
console.log(vorname)
console.log(verändereName(vorname))
console.log(vorname)

let vornamen = ["Jens", "Anne"];

let verändereVornamen= (vor) => {
    vor.splice(0,1)
    return vor;
}
console.log(vornamen)
console.log(verändereVornamen(vornamen))
console.log(vornamen)