const fs = require('fs');

fs.readFile('data/file.txt', 'UTF8', (error, content) => {
  if (error) {
    console.log('could not read file');
  } else {
    console.log(content);
  }
});
