// print a phrase, a word at a time:
// workaround to avoid the pyramid of doom

const words = 'The pyramid of doom keeps growing.';

const printWords = (str = '', idx = 0) => {
  const words = str.split(/\s/);
  // Guard
  if (idx >= words.length) return '';

  console.log(words[idx]);

  setTimeout(() => {
    printWords(str, ++idx);
  }, 1000);
};

printWords(words);
