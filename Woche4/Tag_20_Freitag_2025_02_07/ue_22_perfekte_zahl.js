'use strict';;
const rangeFromStartToEnd = (start, end, step = 1) => {
    const length = Math.max(Math.ceil((end - start) / step), 0);
    const results = Array(length).fill(0);
    results.forEach((x, i, r) => (r[i] = start + i * step));
    return results;
};

const range = (startOrEnd, end, step) =>
    end
        ? rangeFromStartToEnd(startOrEnd, end, step)
        : rangeFromStartToEnd(0, startOrEnd);


const perfectNumbersUpTo = (n) => range(n + 1).filter(isPerfect);

// Für n=28 sind die echten Teiler 1, 2, 4, 7 und 14, sodass 1 + 2 + 4 + 7 + 14 = 28 ist:
const isPerfect = (n) => sum(dividersOf(n)) === n;

// echte Teiler bestimmen: d.h. bei n=28 alle Zahlen, für die n(28) % zahl ohne Rest ist.
const dividersOf = (n) => range(n).filter(divider => divisible(n, divider));

const sum = (ns) => ns.reduce(add, 0); // Summe aller verbliebenen Zahlen bilden

// Helper
const divisible = (n, divider) => n % divider === 0; // ohne Rest teilbare Zahlen ermitteln
const add = (a, b) => a + b; // Summenfunktion für reduce


console.log(perfectNumbersUpTo(1000));
