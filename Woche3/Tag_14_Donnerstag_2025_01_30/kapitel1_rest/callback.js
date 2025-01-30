
let value = "hallo!" // 1 // true;
let fkt = (x) => {console.log(x)};


// 1. Definition
let testFunktion = (x) => {
    console.log(x);

    // aufruf , ausführen, call 
    x("ich rufe dich")

};

// 2. Aufruf
// testFunktion(value) // nicht mehr möglich, mit einfachem Wert in value!
testFunktion(fkt,"333"); // High-Order

/*let map = (fkt) => {
    Array,forEach(wert => fkt(wert) )
         1 x*2 1*2 -> 2 ; push (2)
         2 x*2 2*2 -> 4 ; push (4)
         3 x*2 3*2 -> 6 ; push (6)

}
         */
[1,2,3].map((x) => x * 2)
