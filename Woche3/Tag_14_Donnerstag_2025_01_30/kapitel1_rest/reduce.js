'use strict';

let ergebnis = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10].reduce((linkerWert, rechterWert) => {

    console.log(linkerWert, rechterWert);
    // nur gerade Zahlen summieren
    if (linkerWert % 2 != 0)
        linkerWert = 0;
    if (rechterWert % 2 != 0)
        rechterWert = 0;
    return linkerWert + rechterWert;

});

console.log('ergebnis --->', ergebnis);



/*
[?,3,4]
[??,4]
???

1,2,3,4
1+2, 3,4
3 + 3, 4
6 + 4
10 */

console.log(['a','b','c'].reduce((a, b) => `${a} - ${b}` ))