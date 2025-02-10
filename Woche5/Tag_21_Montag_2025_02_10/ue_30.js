'use strict';

const evolutionStages = [
    ['Pidgey', 'Pidgeotto', 'Pidgeot'],
    ['Vulpix', 'Ninetales'],
    ['Dratini', 'Dragonair', 'Dragonite']
];

const stagesFor = (pokemon) => /* ??? */ {
    console.log('pokemon --->', pokemon);


    let array = evolutionStages.find((array) => array.includes(pokemon))
    console.log('array --->', array);
    return array;
}

const stagesAfter = (pokemon) => /* ??? */ {
    console.log('pokemon --->', pokemon);

     // ['Dratini', 'Dragonair', 'Dragonite']

    let array = evolutionStages.find((array) => array.includes(pokemon))
    console.log('array --->', array);

    // ['Dratini', 'Dragonair', 'Dragonite']
    //                  1
    let indexAbFundPosition = array.findIndex((x) => x === pokemon);
    console.log('indexAbFundPosition --->', indexAbFundPosition );
    return array.slice(indexAbFundPosition + 1);
}

const stagesBefore = (pokemon) => /* ??? */ {
    console.log('pokemon --->', pokemon);


    let array = evolutionStages.find((array) => array.includes(pokemon))
    console.log('array --->', array);


    let indexAbFundPosition = array.findIndex((x) => x === pokemon);
    console.log('indexAbFundPosition --->', indexAbFundPosition );
    return array.slice(0,indexAbFundPosition  );

    
    // return array.slice(0,array.findIndex((x) => x === pokemon)  );
}
//const stagesBefore = (pokemon) =>
//    stagesFor(pokemon).slice(0, stagesFor(pokemon).indexOf(pokemon));

// console.log(stagesFor('Vulpix')); // => [ 'Vulpix', 'Ninetales' ]
// console.log(stagesAfter('Dratini')); // => [ 'Dragonair', 'Dragonite' ]
// console.log(stagesAfter('Dragonair')); // => [ 'Dragonite' ]
console.log(stagesBefore('Pidgeot')); // => [ 'Pidgey', 'Pidgeotto' ]
console.log(stagesBefore('Dragonair')); // => [ 'Dratini' ]
