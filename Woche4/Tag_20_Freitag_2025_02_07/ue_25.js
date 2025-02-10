'use strict';

const letterThief = (word) =>
    //'dance'.split('')
    word.split('') // ['d','a','n','c', 'e']
        //  'd'         
        .map((letter, i) => word.slice(0, word.length - i - 1)) // 'dance'.slice(0,0) '', 'dance'.slice(0,1) 'd' 
//  .reverse();

console.log(letterThief('dance'));
// => [ 'danc', 'dan', 'da', 'd', '' ]
