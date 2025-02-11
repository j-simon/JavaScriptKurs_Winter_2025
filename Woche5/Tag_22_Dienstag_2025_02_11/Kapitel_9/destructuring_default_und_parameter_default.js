// Destructuring-Defaults und Defaults für fehlende Funktionsargumente

'use strict';
//           { a = 1, b = 2 } destrcuturing mit defaults für fehlende keys
//                              { a: 3, b: 4 } default, falls gra kein Objekt übergeben wurde, also für fehlendes Argument 
const foo = ({ a = 1, b = 2 } = { a: 3, b: 4 }) => `a: ${a}, b: ${b}`;

console.log(foo({ a: 7 })); // => a: 7, b: 2 // fehlender key b
console.log(foo({})); // => a: 1, b: 2 // fehlende keys (alle fehlen)
console.log(foo()); // => a: 3, b: 4 // fehlendes Argument/ Objekt fehlt GANZ!

