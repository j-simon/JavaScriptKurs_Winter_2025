/* Übung 32: Passwortprüfer

Schreibe einen Passwortprüfer. Der Nutzer soll aufgefordert werden, ein Passwort einzugeben. Das eingegebene Passwort soll dann durch einen regulären Ausdruck überprüft werden. Zuletzt soll der Nutzer darauf hingewiesen werden, ob sein Passwort den Anforderungen entspricht oder nicht. Das Passwort muss mindestens ein Zeichen aus jeder der folgenden Gruppen enthalten:

    Zahlen

    Kleinbuchstaben

    Großbuchstaben

    Sonderzeichen: $, @, %, !

    4–20 Zeichen

Alle anderen Zeichen sind untersagt.
*/
'use strict';
/*
const pwd = 'aA1$';// prompt('Bitte geben Sie ein Passwort ein.');

const validPassword = 
    pwd.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@!%])[A-Za-z\d$@!%]{4,20}$/
    );

console.log(`Ihr Passwort ist ${validPassword ? 'gültig' : 'ungültig'}
    ${validPassword}`);
*/

const passwort = prompt("Bite Passwort eingeben");
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@!%])[A-Za-z\d$@!%]{4,20}$/;

// a
// dlksfökdhfghgfhgfhhggfhggfgfhgfhsgfdgjhfda
// 1123123a

//A
// dkhd78)(/()/A
//112A
const found = passwort.match(regex);



console.log(found); // null , falsy
if (found === null) {
    console.log("Passwort nicht erlaubt!");
} else
    console.log("Passwort erlaubt!");
// Expected output: ?????