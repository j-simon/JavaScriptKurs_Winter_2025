'use strict';

/*
Übung 23: Die dunkle Seite schlägt zurück …

Endlich setzt du deinen Kampf gegen die dunkle Seite von JS fort 
(siehe Übung 20) und erstellst zwei neue »Kampf-Sequenzen«:

    »What's the German word for if« 
    (Mehrere Lösungsmöglichkeiten: wenn, falls).

    »Now, please enter a string with a length between 8 and 15 characters …«


*/

/*
 Diese Lösung unterscheidet scih von der Musterlösung 
 Die 3 Fragen werden unabhängig von einer richtigen Lösung der Vorfrage gestellt.
 */

let username = prompt('Welcome. Please tell me your name');
alert(`Hey ${username}. Nice to meet you.`);

let playerFitness = prompt(`So ${username}. Let me know: Are you ready to fight?\nPlease answer with yes or no`);

if (playerFitness === 'yes') {
    
    
    
    
    let fightOne = prompt(`Great! Let's start to play! I'm sure you'll make it.\nWhich Operators has the higher priority: * or + ?`);
    if (fightOne === '*') {
        alert(`Yeah, you got it. ${fightOne} is right! The dark side has no chance at this point.`);
    } else {
        alert('Damn! Please don´t give up and try again.');
    }

    let fightTwo = prompt(`»What's the German word for if«?`);
    if (fightTwo === 'wenn' || fightTwo === 'falls') {
        alert(`Super, Frage 2 richtig beantwortet`);
    } else {
        alert('Frage 2 falsch beantwortet');
    }

    let fightThree = prompt(`»Now, please enter a string with a length between 8 and 15 characters …«`);
   
   // 9
/*           9  >= 8 && 9 <= 15
               true &&   true
                    true   

              3 >= 8 && 3 <=15
              false && true
                 false      
                 */
    //if (fightThree.length >=8 && fightThree.length <=15) {
    //if ( fightThree.length <= 15 && fightThree.length >= 8 ) {
    if ( 15 >= fightThree.length  && 8 <=fightThree.length ) {
        alert(`Super, Frage 3 richtige Textlänge angegeben`);
    } else {
        alert('Frage 3, falsche Textlänge angegeben');
    }

} else {
    alert(`${username}, I´m very disappointed about you. The force of dark side of JavaScript grows up.`);
}




