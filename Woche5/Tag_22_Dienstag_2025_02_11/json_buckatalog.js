let buchkatalog = [{titel:"Grundlagen"},{titel:"Profis"}];
console.log('buchkatalog --->', buchkatalog);


// console.log(buchkatalog[1]);

// console.log(buchkatalog[1].titel);

let jsonText =JSON.stringify(buchkatalog);
console.log('jsonText --->', jsonText);
jsonText = jsonText.replace("\"titel\":","Bezeichnung::")
let buckatalogZurueckverwandelt=JSON.parse(jsonText)
console.log('buckatalogZurueckverwandelt --->', buckatalogZurueckverwandelt);
