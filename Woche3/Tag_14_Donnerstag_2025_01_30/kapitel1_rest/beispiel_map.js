let double = (n) => {
    console.log(n,2 * n);
    
    return 2 * n;
}

let rueckgabeWert = [1, 2, 3].map(double); // => [2, 4, 6]
console.log(rueckgabeWert);

