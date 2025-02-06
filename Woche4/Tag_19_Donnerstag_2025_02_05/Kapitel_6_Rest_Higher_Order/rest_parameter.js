// negativ Lösung : jeden Parameter auflisten
const unendlicheVieleParameter = (p1,p2,p3,p4,p5,p6,p7,p8 ) => {

}

unendlicheVieleParameter(1,2,3,4,5,6,7,8);


// EINEN Rest-Parameter(Array) ansetzen und damit unendlich viele Argumente auffangen
const unendlicheVieleParameterBesser = (...ps) => {
    console.log(ps)
}
/*
unendlicheVieleParameterBesser(1,2,3,4,5,6,7,8);

const begruesse = (msg, ...names) => {
   

    names.map( (name) =>  console.log(msg, name));
}

begruesse("Hallo","Jens","Anne","Kim");

*/
// const begruesseBesser = (msg1,msg2,msg3 , ...names) => {
   
//     names.map( (name , i) =>  console.log(i===0 ? msg1: i===1 ? msg2 :i===2?msg3:'' , name));
// }

// begruesseBesser("Hallo","Guten Morgen","Guten Abend","Jens","Anne","Kim");

// besser 2:
const begruesseBesser2 = (msgs , ...names) => {
   
    names.map( (name, i) =>  console.log(msgs[i] , name));
}

begruesseBesser2(["Hallo","Guten Morgen","Guten Abend"],"Jens","Anne","Kim");