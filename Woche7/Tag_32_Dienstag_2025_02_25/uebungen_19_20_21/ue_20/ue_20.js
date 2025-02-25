// 'use strict';

// const li = document.createElement('li');
// li.textContent = 'Capacity: 11 oz.';


// document.getElementById("product_specification")
// .insertBefore(
//     li, 
//     $$('#product_specification li')[4]
// );

'use strict';

const list = document.getElementById("product_specification");
const items = list.innerHTML.split('</li>'); // Bestehende <li>-Elemente aufsplitten
console.table(items)
// Neues <li>-Element an der gewünschten Stelle einfügen
items.splice(4, 0, '<li>Capacity: 11 oz.</li>');
console.table(items)

let ergebnis= list.innerHTML = items.join('</li>'); // Liste wieder zusammensetzen
console.table('ergebnis --->', ergebnis);

