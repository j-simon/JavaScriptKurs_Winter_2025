
let winners = ['Heribert', 'Friedlinde', 'Tusnelda', 'Oswine', 'Ladislaus'];

// console.log(winners.map((winner, i) => `Place ${i + 1}: ${winner}`));

// keine Regel Ausnahme für sort ist der Parameter für den index nicht implementiert
winners.sort((a, b, i) => {
    //console.log(i);
    return a < b ? -1 : 1;
});
//console.log('winners.sort', winners);

winners = ['Heribert', 'Friedlinde', 'Tusnelda', 'Oswine', 'Ladislaus']
console.log("Fundstelle: ", winners.findIndex((name, i) => {
    console.log("i:", i)
    return name === "Ladislaus";
}

));


const cbFkt = (element, i, a) => ergebnisArray[a.length - 1 - i] = element;

let array = [1, 2, 45, 66, 55]; // length =5
let ergebnisArray=[];
array.forEach(cbFkt);
console.log(ergebnisArray)
