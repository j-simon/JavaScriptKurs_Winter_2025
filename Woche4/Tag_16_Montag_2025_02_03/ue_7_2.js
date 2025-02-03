'use strict';

let isMixableWith = (cocktailRecipe, availableIngredients) => {
    console.log('cocktailRecipe --->', cocktailRecipe);
    console.log('availableIngredients --->', availableIngredients);

    return  cocktailRecipe.every( (wunschzutat) => hasIngredient(availableIngredients,wunschzutat));
   // return  availableIngredients.every( (barzutat) => hasIngredient(cocktailRecipe,barzutat));
}
/*cocktailRecipe.every(ingredientFromRecipe =>
    hasIngredient(availableIngredients, ingredientFromRecipe), */

let hasIngredient = (listOfIngredients, searchedIngredient) =>
    listOfIngredients.includes(searchedIngredient);

let honoluluFlip = [
    'Maracuja Juice',
    'Pineapple Juice',
    'Lemon Juice',
    'Grapefruit Juice',
    'Crushed Ice'
];

let ingredientsFromMyBar = [
    'Pineapple',
    'Maracuja Juice',
    'Cream',
    'Lemon Juice',
    'Grapefruit Juice',
    'Crushed Ice',
    'Milk',
    'Apple Juice',
    'Aperol',
    'Pineapple Juice',
    'Limes',
    'Lemons'
];

//honoluluFlip isMixableWith ingredientsFromMyBar?
console.log(isMixableWith(honoluluFlip, ingredientsFromMyBar)); // => true
