'use strict';

const NUMBER_OF_WINNERS = 3;

const mayAddCutie = (cutie) =>
  $$('#cutest li').length < NUMBER_OF_WINNERS && !isInCutest(cutie);

const isInCutest = (cutie) =>
  $$('#cutest li span').filter(
    (span) => span.textContent === cutie.textContent.trim()
  ).length > 0;

$on($$('#candidates li'), 'click', (e) => {
  const cutie = e.currentTarget;
  if (!mayAddCutie(cutie)) return;

  $('#cutest').appendChild(
    $on(cutie.cloneNode(true), 'click', (e) => e.currentTarget.remove())
  );
});
