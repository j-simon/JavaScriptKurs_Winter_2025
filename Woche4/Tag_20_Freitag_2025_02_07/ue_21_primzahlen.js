'use strict';
const range = (startOrEnd, end, step) =>
    end
        ? rangeFromStartToEnd(startOrEnd, end, step)
        : rangeFromStartToEnd(0, startOrEnd);

const rangeFromStartToEnd = (start, end, step = 1) => {
    const length = Math.max(Math.ceil((end - start) / step), 0);
    const results = Array(length).fill(0);
    results.forEach((x, i, r) => (r[i] = start + i * step));
    return results;
};


// Alle Testzahlen von 2 bis 97 abarbeiten und nur PRIMZAHLEN rausfiltern in ein neues Array,
// welches dann ausgegeben wird!
const primesUpTo = (n) => range(2, n + 1).filter(isPrime);

// Primzahl Logik prüfen:
// Ein weiteres Array mit den Zahlen von 2 bis zur prüfenden Zahl(exklusive) anlegen
// Jede Zahl als Divisor zur Testzahl n auf "ganzzahlig teilbar" prüfen 
// Sollte eine Zahl nicht ohne Rest teilen, dann ist die zu prüfende Zahl n keine Primzahl!
const isPrime = (n) => range(2, n).every((divider) => !divisible(n, divider));

// Helfer für "ist ganzzahlig teilbar"
const divisible = (n, divider) => n % divider === 0;


console.log(primesUpTo(97));
