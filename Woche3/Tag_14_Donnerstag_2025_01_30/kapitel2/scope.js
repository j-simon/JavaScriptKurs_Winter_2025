// 'use strict' ;
b=10;
// global scope
 const a = 10;
{
    // Bereich lokal , local scope
    a = 20;
    console.log(a); // 20
    {
        a = 30;
        console.log(a); // 30
            
    }
    console.log(a); // 20
}
// global scope
console.log(a) // 10

// if()
// {

// }else {

// }

 let fkt =() => a

// }