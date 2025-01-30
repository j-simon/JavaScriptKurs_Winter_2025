'use strict';

let results;
let inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//double
results = inputs.map((n) => n * 2 );
results = inputs.map((n) => n + n );
results = inputs.map((n) => n *= 2);


console.log(results) // => [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

//squares / quadrieren
results = inputs.map(n => n * n);
results = inputs.map(n => n ** 2);
results = inputs.map(n => n *= n);
results = inputs.map(n => Math.pow(n, 2));


console.log(results); // => [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]