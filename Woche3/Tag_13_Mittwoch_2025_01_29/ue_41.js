'use strict';

// 1
let zutaten = [
    '70 ml Rapsöl',
    '1 getrenntes Ei',
    '100 g Zucker',
    '1 TL Backpulver'
];
console.table(zutaten);

// 2
zutaten.push('1 EL Mehl');
console.table(zutaten);

// 3
zutaten.unshift('100 g Haferflocken');
console.table(zutaten);

// 4
zutaten.splice(1,1,"75 g Butter");
console.log(zutaten);

// 5
let text = zutaten.join(",\n")
console.log(text);

 let rezept = `Schmelzen Sie die Butter in einer Pfanne, geben Sie die Haferflocken dazu und vermischen Sie alles gut miteinander.

Nehmen Sie die Masse danach vom Herd und lassen Sie sie etwas auskühlen. Nun schlagen Sie das Eiweiß mit Zucker steif und rühren Eigelb, Backpulver und Mehl unter. Vermengen Sie nun die Masse mit den abgekühlten Haferflocken.

Setzen Sie kleine Teighäufchen auf ein Backblech. Die Häufchen sollten nicht zu groß sein, da der Teig beim Backen etwas auseinanderläuft. Im vorgeheizten Backofen bei 170 °C 15 Minuten backen`;

console.log(text + "\n\n" + rezept)