// print a phrase, a word at a time:
// use promises to avoid the pyramid of doom

const printDelay = (time, str) =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log(str);
      resolve();
    }, time)
  );

printDelay(1000, 'The')
  .then(() => printDelay(1000, 'pyramid'))
  .then(() => printDelay(1000, 'of'))
  .then(() => printDelay(1000, 'doom'))
  .then(() => printDelay(1000, 'is'))
  .then(() => printDelay(1000, 'defeated.'));
