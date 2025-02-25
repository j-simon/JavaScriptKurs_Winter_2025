const fs = require('fs');
const zlib = require('zlib');

const inputStream = fs.createReadStream('data/products.html');
const outputStream = fs.createWriteStream('data/products.html.gz');

inputStream.on('data', (data) => {
  outputStream.write(zlib.gzipSync(data));
});
