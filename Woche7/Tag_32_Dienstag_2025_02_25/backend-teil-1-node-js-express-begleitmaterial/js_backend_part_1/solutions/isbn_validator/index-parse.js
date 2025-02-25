import fs from 'fs';
import validator from 'validator';
import { parse } from 'csv-parse/sync';
import color from 'chalk';

const data = fs.readFileSync('books.csv', 'utf-8');

const recordsAr = parse(data, {
  delimiter: ',',
  columns: true,
  skip_empty_lines: true,
});

console.log(recordsAr);

const booksNotValid = recordsAr.filter((book) => {
  return !validator.isISBN(book.ISBN);
});

console.log(color.redBright(`warning: data contains ${booksNotValid.length} wrong ISBNs`));
console.log(booksNotValid);

fs.writeFileSync('books.json', JSON.stringify(booksNotValid), 'utf-8');
