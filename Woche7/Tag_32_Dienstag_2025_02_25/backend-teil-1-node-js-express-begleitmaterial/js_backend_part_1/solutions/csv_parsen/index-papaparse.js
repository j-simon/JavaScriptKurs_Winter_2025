import fs from 'fs';
import Papa from 'papaparse/papaparse.js';

const csvFile = fs.readFileSync('data/products.csv', 'utf-8');

const parseData = Papa.parse(csvFile, {
  header: true,
  dynamicTyping: true,
  transformHeader: (col) => {
    return col.toLowerCase();
  },
});

console.log(parseData.data);

try {
  fs.writeFileSync(
    'data/products.json',
    JSON.stringify(parseData.data, null, 2)
  );
} catch (err) {
  console.log('Something went wrong: ', err);
}
