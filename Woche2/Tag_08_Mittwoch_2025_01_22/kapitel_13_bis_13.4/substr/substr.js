let name = "Jens Simon";

let posLeerzeichen = name.indexOf(" ") // 4
let nachname = name.substr(posLeerzeichen + 1)
let vorname = name.substr(0,posLeerzeichen)

console.log(nachname) // "Simon"
console.log(vorname) // "Jens"


Number(prompt().trim())