'use strict';


// mindestens 3 Beispiele:
// 100 90
// 100 110
// 100 100

let weightYesterday = Number(prompt('What was your weight yesterday?'));
let weightToday = Number(prompt('And what´s your weight today?'));

// (100 -90) /90 =0.111 * 100 == 11
let weightChangeInPercent = (weightToday - weightYesterday) / weightYesterday * 100;

if (weightYesterday < weightToday) {
    console.log(`zugenommen! I can't believe it! You are ${weightChangeInPercent} percent heavier than yesterday!\nYou have to run ten times around your house!`);
} else if (weightYesterday > weightToday) {
    console.log(`abgenommen! Congrats! I am so proud of you. Your weight is ${weightChangeInPercent} percent less than yesterday!!!\nDo you wanna have a cookie? (There is an delicious recipe in this book...)`);
} if (weightYesterday === weightToday) {
    console.log('unverändert! Your weight is still the same. Nothing changed. Now, take a deep breath, look inside yourself, think about your goals and now:\nJUMP OUT OF YOUR CHAIR AND START A WORKOUT');
}
