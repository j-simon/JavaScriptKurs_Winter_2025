'use strict'

let askForFuelLoad = (durchlauf) => { 
    console.log(durchlauf);
    const verbrauch = Number(prompt('How much fuel did you consume?')); // -100
    if (durchlauf===2) return "Wir brechen das hier jetzt ab ... ;-)";
    if (verbrauch < 0 || isNaN(verbrauch)) 
        return askForFuelLoad(durchlauf+1);

    return verbrauch;
}

let fuelLoad = askForFuelLoad(0); // >=0,  negative Werte und Text sind Fehleingaben
console.log(fuelLoad);