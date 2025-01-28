// 'use strict';
// ;

// // 1. Deklaration
// let showNewsletterFor = (vorname, anrede) => {
//     console.log(`Hello, ${anrede} ${vorname}`);
    
//     if (anrede==="Mr.")
//         console.log(`We are glad to inform you that you won an incredible Ferrari and 20.000$!`);
//     else
//         console.log(`We are glad to inform you that you have won a voucher from Tiffany &amp; Co. (50.000$), a luxury trip to New York and additionally 50.000$ for shopping and more!`);
    

//     console.log(`Sincerely, the Win Team`);
// }

// // 2. Aufrufe
// showNewsletterFor('Heribert', "Mr.");
// showNewsletterFor('Goldy', "Ms.");
// showNewsletterFor('Ladislaus', 'Mr.');

// //console.log(vorname) // ?? jens

'use strict'
let showNewsletterFor = (recipient, salutation) => {
    console.log(
        `
    Hello ${salutation} ${recipient},

    We're happy to 
    inform you that you've won ${
        salutation === 'Mr.'
            ? 'an incredible Ferrari and $20.000!'
            : `a voucher from Tiffany & Co. (worth $50.000),
             a luxury trip to New York and an extra $50.000 for shopping and more!`
    }

    Congratulations!
    Please write us an email with your banking information and we will
    transfer the money.
    Sincerely, the Win-Team`
    )
}

showNewsletterFor('Heribert', 'Mr.')
showNewsletterFor('Goldy', 'Ms.')
showNewsletterFor('Ladislaus', 'Mr.')
