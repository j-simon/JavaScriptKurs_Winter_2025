const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

wait()
  .then(() => {
    console.log('The');
    return wait();
  })
  .then(() => {
    console.log('pyramid');
    return wait();
  });
// etc...
