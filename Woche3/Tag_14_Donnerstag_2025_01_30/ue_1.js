'use strict';


/*
["a","c","b"].sort((a, b) => {..?  -1:1})
*/
let sortByLength = (elemente) => {
    // console.log(elemente)

    let compareFn = (linkerText, rechterText) => {
        // console.log(linkerText, rechterText)
        // console.log(linkerText.length, rechterText.length)
        // return ?
        // Basel 5  <  Barcelona 9
        // 5 < 8
        if (linkerText.length < rechterText.length)
            return 1; // positiver Wert
        else
            return -1; // negativer Wert

    }

    return elemente.sort(compareFn)


}

let sortByLengthRefactored = (elemente) =>
    // console.log(elemente)
    elemente.sort((linkerText, rechterText) => linkerText.length < rechterText.length ? 1 : -1)

let sortByLengthRefactoredNochWeiter = (elemente) =>
    // console.log(elemente)
    elemente.sort((linkerText, rechterText) => rechterText.length - linkerText.length)


let city = ['Barcelona', 'Basel', 'Belgrade', 'Berlin', 'Budapest'];
let country = ['Belgium', 'Bulgaria', 'Brazil', 'Bolivia', 'Bosnia and Herzegovina'];
let river = ['Bode', 'Brahmaputra', 'Beuvron', 'Black River', 'Belaja'];

console.log(sortByLength(city));
console.log(sortByLengthRefactored(country));
console.log(sortByLengthRefactoredNochWeiter(river));