// const color = require('chalk');
// const validator = require('validator');
import color from 'chalk';
import validator from 'validator';

// JavaScript: The Definitive Guide, 6th Edition
console.log(color.green(validator.isISBN('978-0596805524'))); //=> true | false

// Hoppla Zahlendreher
console.log(color.red(validator.isISBN('987-0596805524'))); //=> true | false
