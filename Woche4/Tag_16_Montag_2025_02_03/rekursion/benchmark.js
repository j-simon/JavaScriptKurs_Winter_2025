function repeatRecursion(n) {
    if (n <= 0) return;
    repeatRecursion(n - 1);
}

function repeatForEach(n) {
    Array.from({ length: n }).forEach(() => { });
}

function repeatFor(n) {
    for (let i = 0; i < n; i++) { }
}

const count = 100000;
console.log("Anzahl der Wiederholungen: " + count);
// console.time("Rekursion");
// repeatRecursion(count);
// console.timeEnd("Rekursion");

console.time("forEach");
repeatForEach(count);
console.timeEnd("forEach");

console.time("for");
repeatFor(count);
console.timeEnd("for");
