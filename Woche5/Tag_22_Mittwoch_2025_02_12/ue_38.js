'use strict';

// 1. Definition
const distance = ({x : xDestination, y: yDestination},{x : xOrigin, y: yOrigin}) => {
    return Math.sqrt((yDestination - yOrigin) ** 2 + (xDestination - xOrigin) ** 2);
}

// 2. Aufruf
console.log(distance({ x: 1, y: 1 }, { x: 5, y: 1 })); // => 4
