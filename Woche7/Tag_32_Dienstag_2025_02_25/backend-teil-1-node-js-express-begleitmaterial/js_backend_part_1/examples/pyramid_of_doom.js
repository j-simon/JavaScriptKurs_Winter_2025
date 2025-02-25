// print a phrase, a word at a time:
// the pyramid of doom appears

setTimeout(() => {
  console.log('The');

  setTimeout(() => {
    console.log('pyramid');

    setTimeout(() => {
      console.log('of');

      setTimeout(() => {
        console.log('doom');

        setTimeout(() => {
          console.log('keeps');

          setTimeout(() => {
            console.log('growing.');
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
