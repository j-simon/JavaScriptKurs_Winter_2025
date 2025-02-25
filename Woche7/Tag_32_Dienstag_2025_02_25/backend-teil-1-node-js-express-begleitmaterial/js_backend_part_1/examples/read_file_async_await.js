const fs = require('fs');

const getFileContent = async (path, encoding = 'utf-8') => {
  try {
    const data = await fs.promises.readFile(path, encoding);
    console.log(data);
  } catch (error) {
    console.error(`Something went wrong: ${error}`);
  }
};

getFileContent('data/file.txt');
