'use strict';

// let celsius = 25.5;

// let fahrenheit = celsius * 9 / 5 + 32;

// console.log(fahrenheit);


// 1.
let fahrenheit = (celsius) => {
    return celsius * 9 / 5 + 32;
}
let fahrenheitKurzform = celsius => celsius * 9 / 5 + 32;

// 2.
console.log(fahrenheit(25.5)); //
console.log(fahrenheit(45.5));
console.log(fahrenheit(100));
console.log(fahrenheit(-10))

