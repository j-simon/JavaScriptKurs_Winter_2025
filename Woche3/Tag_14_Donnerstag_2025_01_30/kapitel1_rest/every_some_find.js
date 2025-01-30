// console.log([1,2,3].some((element) => element % 2 == 0 ));

console.log([2,4,6,8].every((element) => element % 2 == 0 ));

// gibt es einen Text im Array mit 'a'? ja oder nein
console.log(['b', 'jens', 'n', 'ahoi'].some((text) => {
    // console.log(text, text.indexOf('a'))
    return text.indexOf('a') >= 0
})) // true

// wo gibt es einen Text im Array mit 'a'? ahoi
console.log(['b', 'jens', 'n', 'ahoi'].find((text) => {
    // console.log(text, text.indexOf('a'))
    return text.indexOf('a') >= 0
})) // ahoi 
