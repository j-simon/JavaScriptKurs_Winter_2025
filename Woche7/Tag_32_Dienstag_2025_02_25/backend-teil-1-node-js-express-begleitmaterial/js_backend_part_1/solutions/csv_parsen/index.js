import fs from 'fs';
import { parse } from 'csv-parse/sync';
let data;

try {
  data = fs.readFileSync('data/products.csv', 'utf8');
  console.log(data);
} catch (err) {
  console.log('Something went wrong.', err);
}

const records = parse(data, {
  columns: (header) =>
    header.map((col) => {
      return col
        .toLowerCase() // convert the string to lower case
        .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase()); // replace any group of non-alphanumeric characters followed by a character with the uppercase version of the character
    }),
  skip_empty_lines: true,
});

try {
  fs.writeFileSync('data/products.json', JSON.stringify(records, null, 2));
} catch (err) {
  console.log('Something went wrong.', err);
}
console.log('CSV file successfully processed');
