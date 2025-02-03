'use strict';


const digitSum = (number, adden) => 
    String(number).split('').map(Number).reduce(adden, 0); // local scope


const add = (x, y) => x + y; // global scope

console.log(digitSum(1234,add))