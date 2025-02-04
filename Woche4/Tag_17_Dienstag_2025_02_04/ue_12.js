// Übung 12: Ich weiß eine Zahl, die du nicht weißt

// Programmiere ein Ratespiel mit folgenden Regeln: 
// 
// JS »denkt« sich eine Zahl zwischen 1 und 10 aus,
// die der Benutzer erraten muss. 
// 
// Der Benutzer gibt seine Vermutung in einer Prompt-Box ein, 
// und eine Alert-Box teilt ihm mit, ob er

//     zu hoch geraten hat,

//     zu niedrig geraten hat,

//     oder ob die Zahl richtig ist.

// Errät der Benutzer die Zahl, 
// so hat er gewonnen und das Spiel endet.
//  Im anderen Fall fordert das Programm eine neue Schätzung an.


// JS »denkt« sich eine Zahl zwischen 1 und 10 aus
// für einmal im Programm eine Zufallszahl ermittle
const zufallsZahl = Math.floor(Math.random() * 10) + 1; // 1-10
console.log(zufallsZahl);
// für mehrmals im Programm eine Zufallszahl ermittle
const ermittleZufallsZahl = () => Math.floor(Math.random() * 10) + 1; // 1-10

// 1. Definition
const rateZahl = (zufallsZahl) => {
    
    let zahlGeraten = Number(prompt("Rate eine Zahl zwischen 1 und 10"));

    if (zahlGeraten === zufallsZahl)
        alert("Die Zahl ist richtig!")
    else {
        if (zahlGeraten < zufallsZahl)
            alert("Die Zahl ist zu niedrig!");
        else
            alert("Die Zahl ist zu hoch!");

        // wiederholung
        rateZahl(zufallsZahl);
    }

}
// 2. Aufruf
rateZahl(zufallsZahl)
