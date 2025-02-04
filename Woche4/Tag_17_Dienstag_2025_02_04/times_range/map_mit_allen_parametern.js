'use strict';

console.log([10, 20, 30].map((element, index, result) => {
    console.log(element, index, result);
    return result[result.length - index - 1];
}))
