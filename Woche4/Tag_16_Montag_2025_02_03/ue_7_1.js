'use strict';

let hasIngredient = (listOfIngredients, searchedIngredient) => {


    console.log('listOfIngredients --->', listOfIngredients);
    console.log('searchedIngredient --->', searchedIngredient);

    return listOfIngredients.includes(searchedIngredient) // true oder false
    // geht das auch mit some?
}

let honoluluFlip = [
    'Maracuja Juice',
    'Pineapple Juice',
    'Lemon Juice',
    'Grapefruit Juice',
    'Crushed Ice'
];

console.log(hasIngredient(honoluluFlip, 'Maracuja Juice')); // => true