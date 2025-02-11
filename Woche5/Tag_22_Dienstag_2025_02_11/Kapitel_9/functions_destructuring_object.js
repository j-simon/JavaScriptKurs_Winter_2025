'use strict';




// const myFunktion = (array) => { // Variable = Wert
//     let price = array[0];
//     let title = array[1];
//     let author = array[2];
//     console.log(price)
//     console.log(title)
//      console.log(author)
// }

// default Werte und Rest-Parameter
const myFunktion = ({ author, title = "da fehlt der Titel", ...alleAnderen }) => {
    // console.log(price)
    console.log(title)
    console.log(author)
    console.log(alleAnderen)

}


myFunktion({
    volume: 40.67,
    price: 19,
    author: "John Doe",
    //title: "XML Buch",
    
    weight: 23.5,
   
}) // ein Wert