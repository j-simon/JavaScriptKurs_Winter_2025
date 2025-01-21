'use strict';

let username = prompt("Gib bitte Deinen Namen an");
alert("Hallo, " + username);
alert(`Hallo, ${username}`);

let playerFitness = prompt("Möchtest du spielen? (ja/nein)");

if (playerFitness === 'ja') {
    let fightOne = prompt("»Which Operator has the higher priority: * or + ?«");

    // Verkürzte Schreibform nach Regel
    if (fightOne === '*') alert("Richtig!");

    if (fightOne !== '*') {
        alert("Falsch!");
    }
}

if (playerFitness !== 'ja') {
    alert("Schade, dann hören wir jetzt auf");
}     