'use strict';

$on(
  $$('button'), // alle Buttons selektieren und 
  'click', // klick 
  (e) => ($('body').style.backgroundColor = e.target.innerHTML.toLowerCase()) // handler  aktivieren
);
