let output = ""; // global scope variable

let array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 10];
array.map(() => output += "*");
console.log(array)
console.log(output);

let ergebnis = Array(10).fill(1);
console.log(ergebnis)

const times = (n, character) => {
    output = "";
    Array(n).fill("").map(() => output += character)
    console.log(output);
}

times(10, "*"); [ "*" , "*" ,"", ""]
