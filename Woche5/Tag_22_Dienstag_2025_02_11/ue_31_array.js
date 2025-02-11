'use strict';

const isMixableWithMyIngredients = (cocktailRecipe) => {
    // console.log(cocktailRecipe)
    return isMixableWith(cocktailRecipe,ingredientsFromMyBar)
    // return?
}
    

const isMixableWith = (cocktailRecipe, availableIngredients) =>
  cocktailRecipe.every((ingredientFromRecipe) => hasIngredient(availableIngredients, ingredientFromRecipe));

const hasIngredient = (listOfIngredients, searchedIngredient) =>
  listOfIngredients.includes(searchedIngredient);

const honoluluFlip = [
  'Maracuja Juice',
  'Pineapple Juice',
  'Lemon Juice',
  'Grapefruit Juice',
  'Crushed Ice'
];

const casualFriday = ['Vodka', 'Lime Juice', 'Apple Juice', 'Cucumber'];

const pinkDolly = [
  'Vodka',
  'Orange Juice',
  'Pineapple Juice',
  'Grenadine',
  'Cream',
  'Coco Syrup'
];
const cocktailRecipes = [honoluluFlip, casualFriday, pinkDolly];
// console.log('cocktailRecipes --->', cocktailRecipes);

const ingredientsFromMyBar = [
  'Pineapple',
  'Maracuja Juice',
  'Cream',
  'Grapefruit Juice',
  'Crushed Ice',
  'Milk',
  'Vodka',
  'Apple Juice',
  'Aperol',
  'Pineapple Juice',
  'Lime Juice',
  'Lemons',
  'Cucumber'
];

 console.log(cocktailRecipes.find(isMixableWithMyIngredients));
// // => [ 'Vodka', 'Lime Juice', 'Apple Juice', 'Cucumber' ]