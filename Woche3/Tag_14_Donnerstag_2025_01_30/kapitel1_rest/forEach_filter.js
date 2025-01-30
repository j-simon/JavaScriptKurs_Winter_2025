'use strict';
let ergebnisArray = [];


let fkt = (n) => {
    console.log(n, n < 3);
  //  ergebnisArray.push(n * 2)
  if (n < 3)
    ergebnisArray.push(n)
    //return n * 2;
    // return?
}
let rueckgabeArray = [1,2,3].forEach(fkt);
console.log('rueckgabeArray --->', rueckgabeArray);

console.log('ergebnisArray --->', ergebnisArray);


