'use strict';

import color from 'chalk';
import validator from 'validator';
import fs from 'fs';

const data = fs.readFileSync('books.csv', 'utf8');

const books = data
  .split('\n')
  .filter((row) => row != '')
  .map((row) => row.trim()); //filter entfernt leere Einträge
books.shift(); //löscht ersten (Kopf)Eintrag

const extractISBN = (entry) => entry.split(',')[1];

const badRecords = books.filter(
  (entry) => !validator.isISBN(extractISBN(entry))
); //(speicher Einträge in badboks, wenn Validator fehlschlägt)

console.log(
  color.redBright(`warning: data contains ${badRecords.length} wrong ISBNs`)
);
badRecords.forEach((entry) => console.log(color.red(entry)));
