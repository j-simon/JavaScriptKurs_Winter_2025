// 'use strict';

// const myMixableCocktails = (cocktailList) => /* ??? */

// const isMixableWithMyIngredients = (cocktailRecipe) =>
//     isMixableWith(cocktailRecipe, ingredientsFromMyBar);

// const isMixableWith = (cocktailRecipe, availableIngredients) =>
//     cocktailRecipe.every((ingredientFromRecipe) =>
//         hasIngredient(availableIngredients, ingredientFromRecipe),
//     );

// const hasIngredient = (listOfIngredients, searchedIngredient) =>
//     listOfIngredients.includes(searchedIngredient)

const ingredientsFromMyBar = [
    'Pineapple',
    'Maracuja Juice',
    'Grapefruit Juice',
    'Crushed Ice',
    'Milch',
    'Vodka',
    'Apple Juice',
    'Aperol',
    'Pineapple Juice',
    'Lime Juice',
    'Lemons',
    'Cucumber',
    'Kaffeelikör',
];

const cocktailRecipesWithNames = {

    'Honolulu Flip': [
        'Maracuja Juice',
        'Pineapple Juice',
        'Lemon Juice',
        'Grapefruit Juice',
        'Crushed Ice',
    ],
    'Casual Friday': ['Vodka', 'Lime Juice', 'Apple Juice', 'Cucumber'],
    'Pink Dolly': [
        'Vodka',
        'Orange Juice',
        'Pineapple Juice',
        'Grenadine',
        'Cream',
        'coco syrup',
    ],
    'Black Russian': ['Vodka', 'Kaffeelikör'],
    'White Russian': ['Vodka', 'Kaffeelikör', 'Cream'],
};

console.log('cocktailRecipesWithNames --->', cocktailRecipesWithNames);

// console.log(myMixableCocktails(cocktailRecipesWithNames));
// // => [ 'Casual Friday', 'Black Russian' ]