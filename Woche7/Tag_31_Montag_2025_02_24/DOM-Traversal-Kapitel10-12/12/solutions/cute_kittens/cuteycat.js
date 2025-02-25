// 'use strict';

const NUMBER_OF_WINNERS = 3;

const mayAddCutie = (cutie) =>
  $$('#cutest li').length < NUMBER_OF_WINNERS && !isInCutest(cutie);

const isInCutest = (cutie) =>
  $$('#cutest li span').filter(
    (span) => span.textContent === cutie.textContent.trim()
  ).length > 0;

// Original Lösung mit cloneNde und appenChild

// $on($$('#candidates li'), 'click', (e) => {
//   const cutie = e.currentTarget;
//   if (!mayAddCutie(cutie)) return;

//   $('#cutest').appendChild(
//     $on(cutie.cloneNode(true), 'click', (e) => e.currentTarget.remove())
//   );
// });

//  Lösung OHNE  cloneNde und appenChild
$on($$('#candidates li'), 'click', (e) => {
  const cutie = e.currentTarget;
  if (!mayAddCutie(cutie)) return;

  // Erstelle den HTML-Code für das neue li-Element
  const newCutieHTML = `<li>${cutie.innerHTML}</li>`;

  // Füge das neue HTML zum "cutest"-Container hinzu
  $('#cutest').innerHTML += newCutieHTML;

  
  // Füge die Click-Event-Listener für das Löschen der Elemente hinzu
  $on($$("#cutest li"), 'click', (e) => {
    e.currentTarget.remove();
  });
});
