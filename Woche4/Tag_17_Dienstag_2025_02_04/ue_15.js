'use strict';

// let customersOnline = [
//     'Heribert',
//     'Friedlinde',
//     'Tusnelda',
//     'Oswine',
//     'Ladislaus',
//     'Goldy',
// ];
// let customersOnline = [
//     'Heribert',

// ];


let customersOnline = [
    'Friedlinde', // 0
    'Goldy', // 1
    'Heribert',
    'Ladislaus',
    'Oswine',
    'Tusnelda',
 ];

const isSorted = (customersOnline) => {

    // nur ein Element  => true
    if (customersOnline.length === 1) return true;

    // mehr als 1 Element
    // die ersten beiden benachbarte müssen in der richtigen Reihenfolge
    if (customersOnline[0] < customersOnline[1] && isSorted(customersOnline.slice(1)) === true) return true;

    return false;
}

//console.log(isSorted(customersOnline));

// Lösung ohne Rekursion
// loops
// for-loop, while-loop

const isSortedForLoop = (customersOnline) => {
    for (let i = 0; i < customersOnline.length - 1; i++) {
        console.log(i, customersOnline[i])
        console.log(i + 1, customersOnline[i + 1])


        if (customersOnline[i] < customersOnline[i + 1])
            {
                console.log("richtig sortiert")
                //return true;
            }    
        else
            {
                console.log("unsortiert")
                return false;
            }

        console.log()
        return true;
    }
}


console.log(isSortedForLoop(customersOnline));