'use strict';

{
  const $ = (q) => document.querySelector(q);
  const $$ = (q) => Array.from(document.querySelectorAll(q));
  
  
  const $on = (el, ev, fn) => {
    Array.isArray(el)
      ? el.forEach((o) => $on(o, ev, fn))
      : el.addEventListener(ev, fn);
    return el;
  };




  $on(
    $$('#keyfield > button'), // welche(s) Element(e) sollen das Ereignis auslösen?
    'click', // welches Ereignis? (Tabelle 5.9)
    (e) => $('#display').value += e.target.innerHTML // callback, was soll getan werden?
  );
}

// input text-Feld kann mit dem value-Attribut beschrieben bzw. += konkateniert werden
// $('#display').value += e.target.innerHTML