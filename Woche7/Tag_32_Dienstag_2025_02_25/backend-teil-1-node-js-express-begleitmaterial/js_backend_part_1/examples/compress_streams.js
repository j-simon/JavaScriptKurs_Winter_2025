const fs = require('fs');
const zlib = require('zlib');

const gzipCompressor = zlib.createGzip();

const inputStream = fs.createReadStream('data/products.html');
const outputStream = fs.createWriteStream('data/products.html.gz');

inputStream.pipe(gzipCompressor).pipe(outputStream);
