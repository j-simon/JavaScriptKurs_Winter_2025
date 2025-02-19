// 'use strict';

// /* <img src="light_on.png" alt="lightbulb" /> */
// // 1.Lampe aus
// // $("img[src*='on']").src="light_off.png";

// // 2. Lampe an
// // $("img[src*='on'] + img").src = "light_on.png";



// const spielen = (e) => {
//     // console.log(e.target)
//     // console.log(e.target.src)

//     let position = $$("img").indexOf(e.target) // 0 bis 9 // -1
//     // console.log(position)
//     // console.log($$("img")[position])

//     $$("img").forEach((img)=> img.src="light_off.png");

//     if (position < 9) {
       
//         $$("img")[position + 1].src = "light_on.png";
//     } else {
//         $$("img")[0].src = "light_on.png";
//     }


// }

// console.log($$("img"));
// $$("img").forEach((img, i) => img.addEventListener("mouseover", spielen));

document.addEventListener("DOMContentLoaded", () => {
    const bulbs = document.querySelectorAll("img");
    const lightOn = "light_on.png";
    const lightOff = "light_off.png";
    let currentIndex = 0;

    bulbs.forEach((bulb, index) => {
        bulb.addEventListener("mouseover", () => {
            if (index === currentIndex) {
                bulbs[currentIndex].src = lightOff;
                currentIndex = (currentIndex + 1) % bulbs.length;
                bulbs[currentIndex].src = lightOn;
            }
        });
    });
});



