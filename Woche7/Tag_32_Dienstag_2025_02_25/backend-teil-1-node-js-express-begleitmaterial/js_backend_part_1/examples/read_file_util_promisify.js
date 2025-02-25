const fs = require('fs');
const util = require('util');

const getFileContent = util.promisify(fs.readFile);

getFileContent('data/file.txt', 'UTF8')
  .then((data) => console.log(data))
  .catch((err) => console.error(`Something went wrong: ${err}`));
