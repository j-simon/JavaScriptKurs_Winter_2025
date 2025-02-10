const namen = {
    // "property,attribute" Eigenschaft, Attribut
    // key(Eigenschaft) : value(Wert)
   
    nachname: "Simon",
    vorname: "Jens",
};

let arrayVonName = Object.entries(namen);
console.log('arrayVonName --->', arrayVonName);

arrayVonName.forEach(x => console.log(x));