'use strict';

const countriesWithCapital = {
  UK: 'London',
  France: 'Paris',
  Germany: 'Berlin',
  Switzerland: 'Bern',
  Austria: 'Vienna',
  Russia: 'Moscow'
};

const capitalOf = (country) => {
    console.log('country --->', country);
    
    //console.log(countriesWithCapital.country) // (key nicht dynamisch )
    console.log(countriesWithCapital[country]); // index ist dynamisch

    return countriesWithCapital[country]
}
console.log(capitalOf('Switzerland')); // Bern
