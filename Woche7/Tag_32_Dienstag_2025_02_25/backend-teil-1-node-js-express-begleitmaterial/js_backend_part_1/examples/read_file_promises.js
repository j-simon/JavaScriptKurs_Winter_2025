const fs = require('fs');

const getFileContent = (path, encoding = 'utf-8') => {
  return fs.promises.readFile(path, encoding);
};

getFileContent('data/file.txt')
  .then((data) => console.log(data))
  .catch((err) => console.error(`Something went wrong: ${err}`));
