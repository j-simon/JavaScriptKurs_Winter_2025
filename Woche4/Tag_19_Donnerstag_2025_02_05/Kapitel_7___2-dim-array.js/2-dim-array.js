// dim : dimension

let vorname1 ="Jens";
let vorname2 ="Kim";
let vorname3 ="Anne";


let namen= [vorname1 , vorname2, vorname3];

let montag = ['Mathe', 'Sport', 'Religion']; 
let dienstag = ['Englisch', 'JavaScript', 'Pause']; 

let stundenplan = [montag, dienstag];
console.log(stundenplan)

//console.log(dienstag[1]);
console.log(stundenplan[1][1]) // JavaScript
console.log(stundenplan[0][2]) // Religion

// 
// [Zeile][Spalte]
console.log(stundenplan[1][2]) // Pause