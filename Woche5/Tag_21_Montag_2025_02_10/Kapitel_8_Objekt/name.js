const namen = ["Jens", "Simon"];
console.log('name --->', namen);
console.log('typeof name --->', typeof namen);

console.log(namen[0]);

const nameAlsObjekt = {
  nachname: "Simon",
  vorname: "Jens",
};

console.log('nameAlsObjekt --->', nameAlsObjekt);
console.log('typeof nameAlsObjekt --->', typeof nameAlsObjekt);
//console.log(nameAlsObjekt[0]);
console.log(nameAlsObjekt['vor' + 'name']);
console.log(nameAlsObjekt.vorname);
console.log(nameAlsObjekt.map(element => element + "zusatztText"))
