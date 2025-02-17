'use strict';

const myMixableCocktails = (cocktailList) => 
    // console.log('cocktailList --->', cocktailList);
    Object.keys(cocktailList).filter(cocktailName => 
        isMixableWithMyIngredients(cocktailList[cocktailName]))
    // console.log(Object.keys(cocktailList))
    


const isMixableWithMyIngredients = (cocktailRecipe) =>
    isMixableWith(cocktailRecipe, ingredientsFromMyBar);

const isMixableWith = (cocktailRecipe, availableIngredients) =>
    cocktailRecipe.every((ingredientFromRecipe) =>
        hasIngredient(availableIngredients, ingredientFromRecipe),
    );

const hasIngredient = (listOfIngredients, searchedIngredient) =>
    listOfIngredients.includes(searchedIngredient)

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
    'HonoluluFlip': [
        'Maracuja Juice',
        'Pineapple Juice',
        'Lemon Juice',
        'Grapefruit Juice',
        'Crushed Ice',
    ],
    'CasualFriday': ['Vodka', 'Lime Juice', 'Apple Juice', 'Cucumber'],
    'Pink Dolly': [
        'Vodka',
        'Orange Juice',
        'Pineapple Juice',
        'Grenadine',
        'Cream',
        'coco syrup',
    ],
    'BlackRussian': ['Vodka', 'Kaffeelikör'],
    'WhiteRussian': ['Vodka', 'Kaffeelikör', 'Cream'],
};

console.log(myMixableCocktails(cocktailRecipesWithNames));
// => [ 'Casual Friday', 'Black Russian' ]
