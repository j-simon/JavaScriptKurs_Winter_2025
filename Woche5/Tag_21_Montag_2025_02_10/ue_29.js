'use strict';

const countriesWithCapital = [
    ['UK', 'London'],
    ['France', 'Paris'],
    ['Germany', 'Berlin'],
    ['Switzerland', 'Bern'],
    ['Austria', 'Vienna'],
    ['Russia', 'Moscow']
];


const countryForCapital = capitol => {
    console.log('capitol --->', capitol);
    let stadtIndex = 1;
    let landIndex = 0;
    let array = countriesWithCapital.find((array) => array[stadtIndex] === capitol)
    console.log('array --->', array);
    if (array === undefined)
        return "Land nicht vorhanden!"
    // // für Köln , was ist im Array
    return array[landIndex];
}

console.log(countryForCapital('Köln'));
console.log(countryForCapital('Bern'));