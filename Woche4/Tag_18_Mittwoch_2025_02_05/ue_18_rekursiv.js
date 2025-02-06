'use strict';

const ARTICLE_NUMBER_LENGTH = 7;

const fillUp = (itemNumber) => // 477 // 0477 // 00477 // ....
    ARTICLE_NUMBER_LENGTH === (itemNumber + "").length
        ? String(itemNumber)
        : fillUp(`0${itemNumber}`); // 0477 // 00477



console.log(fillUp("477"));