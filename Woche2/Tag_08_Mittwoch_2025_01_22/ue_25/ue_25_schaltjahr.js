let jahr = Number(prompt("Gib ein Jahr ein"));

// ganzzahlig durch 400 teilbar ist.

// nicht ganzzahlig durch 100, aber ganzzahlig durch 4 teilbar ist.

if (jahr % 400 === 0 || (jahr % 100 !== 0 && jahr % 4 === 0))
    console.log("Schaltjahr");
else
    console.log("kein Schaltjahr");