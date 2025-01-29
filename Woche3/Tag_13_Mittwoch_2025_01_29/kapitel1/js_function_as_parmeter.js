let tueEtwas = (nr,txt,bo,arr,fkt) => {
    console.log(nr);
    console.log(txt);
    console.log(bo);
    console.log(arr);
    console.log(fkt());
}

tueEtwas(2,"a",true,[1,2,4],()=>{ return "a"})



let addiere = (a,b) => a + b;
let multipliziere = (a,b) => a * b;

// 1. Deklaration
let berechneEtwas = (a,b,fkt) => {
  return fkt(a,b);
}

// 2. Aufruf
console.log(berechneEtwas(1, 2, addiere)); // 1+2 = 3
console.log(berechneEtwas(3, 4, multipliziere)); // 3*4 = 12