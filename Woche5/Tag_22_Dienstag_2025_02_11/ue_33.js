'use strict';
const text = 'In cryptology, a code is a method used to encrypt an undefined message that operates at the level of meaning; that is, words or phrases are converted into something else. A code might transform "change" into "CVGDK" or "cocktail lounge". A codebook is needed to encrypt, and decrypt the phrases or words.';


const wordOccurrance = (text = "") => {
    //console.log('text --->', text);
    let leeresObjekt = {};

    text
        .toLowerCase()
        .replace(/[.,"';]/g, "")
        .split(" ")
        .forEach(word => leeresObjekt[word] = word in leeresObjekt  ?   leeresObjekt[word] + 1 : 1)
        return leeresObjekt
}
console.log(wordOccurrance(text));