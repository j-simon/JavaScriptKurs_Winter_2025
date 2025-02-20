'use strict';

/* <img src="light_on.png" alt="lightbulb" /> */
// 1.Lampe aus
// $("img[src*='on']").src="light_off.png";

// 2. Lampe an
// $("img[src*='on'] + img").src = "light_on.png";



const spielen = (e) => {
    // console.log(e.target)
    // console.log(e.target.src)

    let indexAktiveLampe = $$("img").findIndex(img => img.src.includes("light_on.png"))
    // let position = $$("img").indexOf(e.target) // 0 bis 9 // -1

    // console.log(position)
    // console.log($$("img")[position])
    
    // alle Lampen ausschalten
    $$("img").forEach((img)=> img.src="light_off.png");

    // entweder +1 oder Liks wieder anfangen
    let indexNeueLampe = (indexAktiveLampe + 1) % $$("img").length;
    $$("img")[indexNeueLampe].src = "light_on.png";


}

console.log($$("img"));

$$("img").forEach((img, i) => img.addEventListener("click", spielen));

// document.addEventListener("DOMContentLoaded", () => {
//     const bulbs = document.querySelectorAll("img");
//     const lightOn = "light_on.png";
//     const lightOff = "light_off.png";
//     let currentIndex = 0;

//     bulbs.forEach((bulb, index) => {
//         bulb.addEventListener("mouseover", () => {
//             if (index === currentIndex) {
//                 bulbs[currentIndex].src = lightOff;
//                 currentIndex = (currentIndex + 1) % bulbs.length;
//                 bulbs[currentIndex].src = lightOn;
//             }
//         });
//     });
// });



