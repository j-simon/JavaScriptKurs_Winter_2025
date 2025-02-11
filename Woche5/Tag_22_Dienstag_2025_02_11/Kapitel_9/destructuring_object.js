// // object
// let objekt = { 
//                 price:19,
//                 title:"XML Buch",
//                 author:"John Doe"
//             };
// let price = objekt["price"];
// let title = objekt['title'];
// let author = objekt['author'];

// price = objekt.price;
// title = objekt.title;
// author = objekt.author;

// console.log(price)
// console.log(title)
// console.log(author)

// destructuring
// mit 
// let {price:p, title:t, author: a} = { 
//     price:19,
//     title:"XML Buch",
//     author:"John Doe"
// };
// console.log(p)
// console.log(t)
// console.log(a)


// let {price:price, title:title, author:author} = { 
// let {price, title, author} = { 
//     price:19,
//     title:"XML Buch",
//     author:"John Doe"
// };
// console.log(price)
// console.log(title)
// console.log(author)


let { author } =  { 
    price:19,
    title:"XML Buch",
    author:"John Doe"
};

console.log(author)