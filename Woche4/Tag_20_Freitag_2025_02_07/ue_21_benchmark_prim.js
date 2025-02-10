'use strict';

/* ab hier range */
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




const forLoopVersion = () => {
    const primzahlen = [];

    const isPrime = (zahl) => {
        if (zahl <= 1) return false;
        for (let i = 2; i <= Math.sqrt(zahl); i++) {
            if (zahl % i === 0) return false;
        }
        return true;
    };

    for (let i = 1; i <= 50; i++) {
        if (isPrime(i)) {
            primzahlen.push(i);
        }
    }

    // console.log(primzahlen);
}

const rangeFilterVersion = () => {
    const numbers = range(1, 50 + 1);

    const isPrime = (zahl) => {
        if (zahl <= 1) return false;
        for (let i = 2; i <= Math.sqrt(zahl); i++) {
            if (zahl % i === 0) return false;
        }
        return true;
    };

    const primzahlen = numbers.filter(isPrime);
    // console.log(primzahlen);
}


/* Musterlösung */
const primesUpTo = (n) => range(2, n + 1).filter(isPrime);
const isPrime = (n) => range(2, n).every((divider) => !divisible(n, divider));
const divisible = (n, divider) => n % divider === 0;



const MAX = 1_000_000;

console.log("Je " + MAX + " Testdurchläufe!\n");

console.time("rangeFilterVersion");
// let-Version
for (let i = 0; i < MAX; i++) {
    rangeFilterVersion();
}
console.timeEnd("rangeFilterVersion");



console.time("forLoopVersion");
// let-Version
for (let i = 0; i < MAX; i++) {
    forLoopVersion();
}
console.timeEnd("forLoopVersion");



console.time("forLoopMusterlösung");
    // Musterlösung
    for (let i = 0; i < MAX; i++) {
        primesUpTo(50);
    }
console.timeEnd("forLoopMusterlösung");







