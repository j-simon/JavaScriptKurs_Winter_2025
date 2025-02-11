const countriesWithCapital = {
    UK: 'London',
    France: 'Paris',
    Germany: 'Berlin',
    Switzerland: 'Bern',
    Austria: 'Vienna',
    Russia: 'Moscow'
  };
  
  const countryForCapital = (capital) => {
    console.log(capital)
    console.table(countriesWithCapital)

    let keys=Object.keys(countriesWithCapital)
    console.log('keys --->', keys);
    
    let values=Object.values(countriesWithCapital)
    console.log('values --->', values);
    // return ! nicht vergessen

    // console.log(values.findIndex( x => x === capital))
    let findPos = values.indexOf(capital) // 2
    console.log(keys[findPos])
    return keys[findPos]
  }
  
  console.log(countryForCapital('Berlin'));