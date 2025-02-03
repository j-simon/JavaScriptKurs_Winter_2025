'use strict';

let numbers = [99, 5, 8, 12, 111, 123];
//             18 , 5 , 8 , 3 , 3 ,6
//             3, 3 ,5, 6, 8, 18
//             12, 111, 5 , 123, 8 ,99

const digitSum = (number) => { // 1234
    let text = String(number) //number + "" //  '1234'

    let buchstabenListe = text.split("") //['1,'2','3','4']

 return buchstabenListe.reduce((a, b) => Number(a) + Number(b)) // '1' + '2' => 1 + 2
    // return ?
}

/* your code here */
const byDigitSum = (a , b) => {

    return digitSum(a) < digitSum(b) ? -1 : 1
}

const byDigitSumRefactored = (a , b) =>  digitSum(a) < digitSum(b) ? -1 : 1
// Musterlösung
// let byDigitSum = (a, b) => digitSum(a) - digitSum(b);

console.log(numbers.sort(byDigitSum)); // => [ 12, 111, 5, 123, 8, 99 ]