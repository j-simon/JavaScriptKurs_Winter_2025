const fs = require('fs');

const getFileContent = (path, encoding = 'utf-8') => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

getFileContent('data/file.txt')
  .then((data) => console.log(data))
  .catch((err) => console.error(`Something went wrong: ${err}`));
