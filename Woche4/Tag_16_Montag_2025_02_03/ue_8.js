// Schreibe eine Funktion digitSum, die die Quersumme einer übergebenen Zahl zurückgibt.
//  Hinweis: Die Quersumme ist die Summe aller Ziffern einer Zahl.
// Tipp: Verwende split('').

// '1234'  => '1'+'2'+'3'+'4' = 10

/* 1234 / 1000 => 1
1234-1000 = 234
234 /100 => 2
*/

// 1. Definition
const digitSum = (number) => { // 1234
    let text = String(number) //number + "" //  '1234'

    buchstabenListe = text.split("") //['1,'2','3','4']
    console.log(buchstabenListe)
    console.log(buchstabenListe.reduce((a, b) => Number(a) + Number(b))) // '1' + '2' => 1 + 2
    // return ?
}
// 2. Aufruf

digitSum(1234)

// Musterlösung
//                                       [ '1', '2', '3', '4' ] [ 1, 2, 3, 4 ] 1+2+3+4=10
let digitSum2 = (number) => String(number).split('')//.map(Number)//.reduce(add, 0);

let add = (x, y) => x + y;

console.log(digitSum2(1234)); // => 10