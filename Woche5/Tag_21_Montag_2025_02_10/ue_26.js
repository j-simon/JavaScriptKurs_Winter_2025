

let number = 10 - "978-3-86680-192" // "-9"
    .replace(/-/g, "")
    .split("")
    //.slice(0, -1) // letzte Ziffer nicht mitnehmen
    //.map(Number)
    .map((x, index) => index % 2 === 0 ? Number(x) : x * 3)
    .reduce((a, b) => a + b) % 10
console.log('number --->', number);

let pruefZiffer = number === 1 ? 0 : number
console.log('pruefZiffer --->', pruefZiffer);


//
///4567 // 4 Ziffern
//978386680192 // 9  // 13Ziffern

