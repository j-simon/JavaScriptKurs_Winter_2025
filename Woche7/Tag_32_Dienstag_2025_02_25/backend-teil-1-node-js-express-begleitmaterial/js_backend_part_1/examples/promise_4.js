const tryWork = (resolve, reject) => {
  const ergebnis = 21 * 2;
  if (Math.random() < 0.5) {
    resolve(ergebnis);
  } else {
    reject('nope');
  }
};

const p4 = new Promise(tryWork);

p4.then(
  (result) => console.log('OK: ' + result),
  (reason) => console.log('KO: ' + reason)
);
