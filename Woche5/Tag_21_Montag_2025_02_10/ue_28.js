'use strict';

const countriesWithCapital = [
    ['UK', 'London'],
    ['France', 'Paris'],
    ['Germany', 'Berlin'],
    ['Switzerland', 'Bern'],
    ['Austria', 'Vienna'],
    ['Russia', 'Moscow']
];

const capitalOf = country => {
    console.log('country --->', country);
    /*                                    Text       === Text */
    //    console.log( countriesWithCapital.find( (array) => array[0] === country ))
    let stadtIndex = 1;
    let landIndex = 0;
    let array = countriesWithCapital.find((array) => array[landIndex] === country)
    return array[stadtIndex];
    //  return "Bern"
}
console.log(capitalOf('Switzerland'));
