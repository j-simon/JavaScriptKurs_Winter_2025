'use strict';

// map , mappen abbilden, nicht destruktiv

let zahlen=[1,2,3,4];
// zahlen.map(     (element) => { console.log(element * 0) }      );

// Langform
let mappingFunktion= (element) =>{
 return element * 2;
}
let gemappteZahlen = zahlen.map(mappingFunktion);

// Kurzform 
//let gemappteZahlen = zahlen.map(e => e * 2     );

console.log(zahlen);
console.log(gemappteZahlen);

let texte = ['jens', 'anne' , 3];
let mapFkt = txt => {
    if (typeof txt==='string')
        return txt.substr(0,1)
    else
        return txt;
};
console.log(texte.map(mapFkt)); // => 'j','a'

// sort,  destruktiv
let compareFnAufsteigend = (a, b) => {
  if ( b < a ) {
    return 1;
  } else{
    return -1;
  }
}
let compareFnAbsteigend = (a, b) => {
    if ( b < a ) {
      return -1;
    } else{
      return 1;
    }
  }
//console.log([11,2,4,5,6,1].sort(compareFn));
console.log(['b','a','c'].sort(compareFnAufsteigend));
console.log(['b','a','c'].sort(compareFnAbsteigend));

// ['a','an','zzzz'] sortieren nach aufsteigender Textlönge
let compareFnSpecial = (a, b) => {
    if ( b.length < a.length ) {
      return 1; // tauschen 
    } else{
      return -1; // nicht tauschen
    }
  }
console.log(['an','a','zzzz'].sort(compareFnSpecial))

// filtern? nicht destruktiv
let arr = [1,2,3,4,5,6];
console.log(arr.filter( (element) => { return element < 4 })) // alle Zahlen < 4  [1,2,3]
console.log(arr); //[ 1, 2, 3, 4, 5, 6 ]
