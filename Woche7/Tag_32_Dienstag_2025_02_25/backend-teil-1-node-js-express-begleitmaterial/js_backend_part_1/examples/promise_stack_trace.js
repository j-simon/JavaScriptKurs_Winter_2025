const tryWork = (resolve, reject) => {
  const ergebnis = 21 * 2;
  if (Math.random() < 0.5) {
    resolve(ergebnis);
  } else {
    reject(new Error('nope'));
  }
};

new Promise(tryWork)
  .then(() => new Promise(tryWork))
  .then(() => new Promise(tryWork))
  .then((result) => console.log('OK: ' + result))
  .catch((err) => {
    console.log('KO: ' + err.message);
    console.log(err.stack);
  });
