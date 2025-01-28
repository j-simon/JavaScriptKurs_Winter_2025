'use strict';
let getTotalGasConsumed = () =>  prompt('How much fuel did you consume?');
let totalGasConsumed=getTotalGasConsumed();

let getDistance = () => prompt('How many km did you travel?');
let distance = getDistance();


let tankSize = prompt('How many liters of gasoline fits in your tank?');


let consumption = Math.round((totalGasConsumed / distance) * 100);
let maxDistance = Math.round((tankSize * distance) / totalGasConsumed);

console.log(`Your car has a consumption of ${consumption} liter per 100 kilometers .\nYou can travel ${maxDistance} km with a full tank.`);
