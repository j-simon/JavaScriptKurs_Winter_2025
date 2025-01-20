// Operatoren
/* =
+
*
-
/
%
*/

// typeof
// ermittelt den Datentyp


// Datentyp
// number Zahl
//console.log(100)
//console.log(100.8) // 100,8, ungültig als Kommazahl!
// string Text // 'abc' "abc" `abc`
//console.log('Jens_tag_attribut')
/* `ab
c` */
// Vergleichoperatoren
// < kleiner
10 < 11 // true  Wert                    ja yes wahr falsch
11 < 10 // false Wert

10 > 12 // false

10 === 11  // false

// Gleichheit =
// == gleich
 "2" == 2 // true, werte sind identisch, datentypen werden nicht berücksichtigt

// === identisch
 "2" === 2 // false, werte sind identisch aber datentypen nicht
 
 2 === 2 // true, werte sind identisch UND datentypen sind identisch

// 3. neuer Datentyp
// boolean boolscher Datentyp
// mögliche Werte :true oder false

let operand1 = "20"
let operand1Geaendert
let operand2 = 3

// explizit
// refactoring
// // Numer("20") 20
operand1Geaendert = Number(operand1)
console.log(operand1Geaendert)
//    20 < 3
console.log(operand1Geaendert < operand2)

// 
//"20" < 3


2 < "3Autos" 
"3Autos" //-> Number -> NaN
2 < NaN // hier bleibt NaN als Gesamt-Rückgabewert !
NaN