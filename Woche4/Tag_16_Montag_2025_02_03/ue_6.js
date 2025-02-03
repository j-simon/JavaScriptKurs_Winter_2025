'use strict';

let result;
let results;
let inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let text = 'Hi this is a short text';
//           2  + 4 +2 +1 +5  +4 = 18 / 6 = 3

let names = ['Heribert', 'Friedlinde', 'Tusnelda', 'Oswine', 'Ladislaus'];

//odd numbers
results = inputs.filter(n => n % 2 === 1);
results = inputs.filter(n => n % 2 !== 0);
console.log(results) // => [ 1, 3, 5, 7, 9 ]

//sum
result = inputs.reduce((x, y) => x + y, 0)//
result = inputs.reduce((x, y) => x + y)//
console.log(result); // => 55

//product
result = inputs.reduce((x, y) => x * y)//, 1)
console.log(result); // => 3628800

//longest word length
result = text.split(" ").reduce((a, b) => { },);/* ??? */
result = text.split(" ").sort((a, b) => { },);/* ??? */

result = text.split(" ")
    .map((word) => word.length)
    .reduce((a, b) => a > b ? a : b);//Math.max(a,b)
console.log(result[result.length - 1]);
console.log(result); // => 5

result = text.split(" ")
    .map((word) => word.length)
    .sort() //.reduce((a, b) => a > b ? a : b);/* ??? */
console.log(result[result.length - 1]);
console.log(result); // => 5

//longest word
result = text.split(" ").reduce((a, b) => a.length > b.length ? a : b)
console.log(result); // => short

//avg word length

let arrayTexte = text.split(" ");

result = arrayTexte.map((x) => x.length)
    .reduce((a, b) => a + b) / arrayTexte.length; // 18
console.log(result); // => 3

//sort by 3rd letter
results = names.sort(
    (a, b) => {

        
        //if (a.charAt(2) > b.charAt(2))
        // oder schneller : 
        if (a[2] > b[2]) // true
            return 1; // true => 1
        else 
            return -1; // false => -1
    }
);

results = names.sort(
    (a, b) => a[2] > b[2]); // true oder false
console.log(results); // => [ 'Ladislaus', 'Friedlinde', 'Heribert', 'Tusnelda', 'Oswine' ]

// Are there names with more than 8 letters?
result = names.some( name => name.length > 8);
console.log(result); // => true

// Has every name at least 8 letters?
result = names.every(name =>  name.length >= 8)
console.log(result); // => false

// What is the lowest value from the inputs?
result = inputs.reduce( (a, b) => a < b ? a : b )/* ??? */
console.log(result); // => 1

result = inputs.reduce((a, b) => Math.min(a, b));
console.log(result); // => 1