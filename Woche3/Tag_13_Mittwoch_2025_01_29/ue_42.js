'use strict';

// 1
const LINE_46 = [
    'Nordostbahnhof',
    'Theresienkrankenhaus',
    'Teutoburger Str.',
    'Leipziger Str.',
    'Dresdener Str.',
    'Spitalhof',
    'Hubertusstr.',
    'Tattersall',
    'Martha-Maria-Krkhs.',
];

console.log('LINE_46 --->', LINE_46)

/*
2 Finde die Position der gewünschten Zielhaltestelle Hubertusstr. heraus.
*/
let position = LINE_46.indexOf("Hubertusstr.");
console.log('position --->', position);


/*
3 Entferne alle Haltestellen nach Hubertusstr. aus dem Array.
*/
LINE_46.splice(7,2)
console.log('LINE_46 --->', LINE_46)

//LINE_46.slice(0,)
//LINE_46.slice(7,2)

/*
4 Schreibe eine Funktion, die dir nach Übergabe einer beliebigen Zielhaltestelle 
ein Array mit allen Haltestellen ab Nordostbahnhof bis zur Zielhaltestelle zurückgibt.
*/
// 1 . Deklaration + Definition
let zeigeStrecke = (linie,zielHaltestelle) => {
    let position = linie.indexOf(zielHaltestelle) + 1;
    return linie.slice(0,position );
}
// 2. Aufruf
console.log(zeigeStrecke(LINE_46,'Spitalhof'));

/*
5 Erweitere die Funktion, sodass du auch die Starthaltestelle übergeben kannst.
*/

// 1 . Deklaration + Definition
let zeigeStreckeNeu = (linie,startHaltestelle,zielHaltestelle) => {
    let positionStart = linie.indexOf(startHaltestelle);
    let positionEnde = linie.indexOf(zielHaltestelle) + 1;
    return linie.slice(positionStart, positionEnde);
    //return linie.toSpliced(positionStart, positionEnde);
    //return linie.toSpliced(positionStart, positionEnde);
    
}

// 2. Aufruf
console.log(zeigeStreckeNeu(LINE_46,'Teutoburger Str.','Spitalhof'));
console.log(LINE_46) // Prüfung
//let texte=['aa','bb','hh','cc'];
//console.log(zeigeStreckeNeu(texte,'bb','cc'));