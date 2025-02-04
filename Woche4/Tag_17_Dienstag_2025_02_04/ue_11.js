'use strict';

const getNumber = (questionText) => {
    const value = Number(prompt(questionText));
    // wenn du kleiner 0 oder keine zahl bist , wiederhole die eingabe
    if (value < 0 || isNaN(value)) {
        console.log(
            "A negative number or a text could be disastrous for your company's health."
        );
        return getNumber(questionText);
    }
    return value;
}

// musterlösung
const promptForPositiveNumber = (question) => {
    const value = Number(prompt(question));
    if (!isNaN(value) && value > 0) return value;
    return promptForPositiveNumber('Please enter a positive number.');
}

//let fuelLoad = getProductPrice();

//let askForFuelLoad = () => Number(prompt('How much fuel did you consume?'));
//let askForDistance = () => Number(prompt('How many km did you travel?'));
//let askForTankSize = () => Number(prompt('How many liters of gasoline fits in your tank?'));

let fuelLoad = getNumber('How much fuel did you consume?');
let distance = getNumber('How many km did you travel?');
let tankSize = getNumber('How many liters of gasoline fits in your tank?');

let consumption = () => Math.floor((fuelLoad / distance) * 100);
let fuelRange = () => Math.floor((tankSize * distance) / fuelLoad);

console.log(
    `Your car has a consumption of ${consumption()} liter per 100 kilometers .\nYou can travel ${fuelRange()} km with a full tank.`
)