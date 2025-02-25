const fs = require('fs');

const getFileContent = (name, encoding = 'UTF8') => {
  return new Promise((resolve, reject) => {
    fs.readFile(name, encoding, (error, content) => {
      if (error) {
        reject(`could not read file ${name}`);
      } else {
        resolve(content);
      }
    });
  });
};

Promise.all([
  getFileContent('data/file_1.txt'),
  getFileContent('data/file_2.txt'),
  getFileContent('data/file_3.txt'),
  getFileContent('data/file_4.txt'),
  getFileContent('data/file_5.txt'),
  getFileContent('data/file_6.txt'),
])
  .then((contents) =>
    contents.forEach((content) => {
      console.log(content);
    })
  )
  .catch((error) => {
    console.log(error);
  });
