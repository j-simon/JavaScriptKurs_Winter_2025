'use strict';

//console.log(Math.floor(Math.random() * 49) + 1);


const times = (n, fn) => {
    const results = Array(n).fill(0);
    results.forEach((x, i, r) => (r[i] = fn(i)));
    return results;
};

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


// 1 
// times(6, () => console.log(Math.floor(Math.random() * 49) + 1));

// 2
let arrayAllerLottozahlen = range(1, 50, 1);
console.log(arrayAllerLottozahlen);



let zieheEineZahl = (maxAnzahlZahlen) => {
    let ersteZahlGezogen = Math.floor(Math.random() * maxAnzahlZahlen); // 0 - 48
    console.log('ersteZahlGezogen --->', ersteZahlGezogen);

    // return arrayAllerLottozahlen.splice(ersteZahlGezogen, 1)[0]; // z.b: [29] => 29 , 0.index des Arrays mit einem Element 
       return arrayAllerLottozahlen.splice(ersteZahlGezogen, 1); // z.b: [29]  
}

console.log(arrayAllerLottozahlen);

// 49
// 48
// 47
// 46
// 45
// 44

// times ( 6 ,()=> {})
console.log(times(6, (i) => zieheEineZahl(49 - i)).flat());// 0 , 1 , 2, 3 ,4 ,5 