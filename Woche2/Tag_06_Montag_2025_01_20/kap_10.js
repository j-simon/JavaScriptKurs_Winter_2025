let alter
alter = Number(prompt("Wie alt bist Du ?"));
console.log(alter)

// 7
// 34

console.log(alter < 16)

// Kontrollstruktur
// wenn .. dann .. ansonsten
// if .. else
// Variante 1
if (alter < 16) { // < >=
    // ja
    // nur für alter ist kleiner 16
    // Befehl(e) / statement(s)
    console.log("Ja, Du bist noch keine 16 Jahre alt!")
} else {
    // nein > =16
    //console.log("Nein, Du bist 16 Jahre oder älter!")

    if (alter >= 18) {
        //
        console.log("18 oder älter")
    } else {
        console.log("16 oder älter, aber nicht 18")
    }
}

// Variante 2 ohne else
if (alter < 16)  // < >=
    // ja
    // nur für alter ist kleiner 16
    // Befehl(e) / statement(s)
    console.log("Ja, Du bist noch keine 16 Jahre alt!")
else {
    if (alter >= 18) { // < >=

        console.log("18 oder älter")
    } else {
        console.log("16 oder älter, aber nicht 18")
    }
};

// shift + alt +f
if (alter < 18) {
    console.log("ja")
} else {
    console.log("nein");
}

if (alter===18)
  console.log("ja");  

if (true) {
    //...
    ;
    ;
    ;
    ;
    ;

} else {
    // ...
}

let ergebnis
let sprache = "de";// "en"
// if (sprache === "de") {
//     ergebnis = "hallo - deutsch";
// } else {
//     ergebnis = "hello - englisch";
// }

ergebnis =  (sprache === "de")  ? "hallo - deutsch" : "hello - englisch"   ;
console.log(ergebnis)

