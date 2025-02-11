const cocktailRecipesWithNames = {
    'Honolulu Flip': [
        'Maracuja Juice',
        'Pineapple Juice',
        'Lemon Juice',
        'Grapefruit Juice',
        'Crushed Ice',
    ],
    'Casual Friday': ['Vodka', 'Lime Juice', 
        
        'Apple Juice', // !
        
        'Cucumber'],
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
let meinInhaltsWert = cocktailRecipesWithNames['Casual Friday'][2];

console.log(meinInhaltsWert)