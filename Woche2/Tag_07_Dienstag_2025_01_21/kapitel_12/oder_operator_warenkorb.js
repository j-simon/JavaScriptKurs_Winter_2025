'use strict';

let productAgeInDays = Number(prompt('Product age in days?'));
let quantityOfCartItem = Number(prompt('Quantity of the item?'));

// Variante 1, ohne logischen Operator
let discountPercentage = 0;

if (quantityOfCartItem >= 3) {
    discountPercentage = 5;
}

if (productAgeInDays <= 30) {
    discountPercentage = 5;
}

console.log(`Current discount: ${discountPercentage}%`);

// Variante 2, mit logischem Operator 
discountPercentage = 0;

if (quantityOfCartItem >= 3 || productAgeInDays <= 30) {
    discountPercentage = 5;
}

console.log(`Current discount: ${discountPercentage}%`);