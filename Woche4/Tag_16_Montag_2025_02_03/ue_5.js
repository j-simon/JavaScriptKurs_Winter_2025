'use strict';

let result;
let results;

//even numbers
let inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
results = inputs.filter((n) => n % 2 === 0);
console.log(results); // => [2, 4, 6, 8, 10]

// //names ending with letter 'e' or 'a'
let names = ['Heribert', 'Friedlinde', 'Tusnelda', 'Oswine', 'Ladislaus'];
results = names.filter(name => name.endsWith("e") || name.endsWith("a"));
console.log(results); // => [ 'Friedlinde', 'Tusnelda', 'Oswine' ]

// //words with at least three letters
let text = 'Hi this is a short text';

//let fkt =  (word) => word......length >= 3
result = text.split(' ').filter( (word) => word.length >= 3).join(' ')
console.log(result); // => 'this short text'