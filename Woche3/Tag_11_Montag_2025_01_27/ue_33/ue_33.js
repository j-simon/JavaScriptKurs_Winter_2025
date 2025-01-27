'use strict';


let url = 'http://www.123schmidt.de/shop, https://www.123schmidt.de/bewertungen';


// Die neuen URLs sollen 
//         https://www.hansonline.de/shop, https://www.hansonline.de/bewertungen 
// heißen. 

console.log(url.replace(/123schmidt/g,'hansonline'));
// http://www.hansonline.de/shop, https://www.hansonline.de/bewertungen

const hackedUrl = url.replace(/(https?)(:\/\/)([^/\r\n]+)/g, 'https://www.hansonline.de');
console.log(hackedUrl);
// https://www.hansonline.de/shop, https://www.hansonline.de/bewertungen



const passwort = "eins"; 

passwort = "zwei"; // Uncaught TypeError: invalid assignment to const 'passwort'