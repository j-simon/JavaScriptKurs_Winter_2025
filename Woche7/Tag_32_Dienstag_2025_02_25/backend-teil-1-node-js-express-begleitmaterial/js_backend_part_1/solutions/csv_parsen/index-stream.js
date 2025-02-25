import fs from 'fs';
import { parse } from 'csv-parse';

const parser = parse({
  columns: (header) =>
    header.map((col) => {
      return col
        .toLowerCase() // convert the string to lower case
        .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase()); // replace any group of non-alphanumeric characters followed by a character with the uppercase version of the character
    }),
  skip_empty_lines: true,
});

const readStream = fs.createReadStream('data/products.csv', 'utf8');
const writeStream = fs.createWriteStream('data/products.json');

let data = [];
readStream
  .pipe(parser)
  .on('data', (record) => {
    data.push(record);
  })
  .on('end', () => {
    writeStream.write(JSON.stringify(data, null, 2));
    console.log('CSV file successfully processed');
  })
  .on('error', (err) => console.error('Something went wrong.', err));
