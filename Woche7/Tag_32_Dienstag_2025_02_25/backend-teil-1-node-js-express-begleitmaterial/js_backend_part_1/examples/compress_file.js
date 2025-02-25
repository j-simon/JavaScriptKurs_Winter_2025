const fs = require('fs');
const zlib = require('zlib');

const data = fs.readFileSync('data/products.html', 'UTF8');
fs.writeFileSync('data/products.html.gz', zlib.gzipSync(data));
