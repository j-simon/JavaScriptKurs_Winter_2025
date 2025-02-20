'use strict';

{
  const init = () => {
    $on($('#inc'), 'click', incFontSize);
    $on($('#dec'), 'click', decFontSize);
  };

  const incFontSize = () => {
    // setFontSizeTo(currentFontSize() + 5);
    let auslesenString = getComputedStyle(document.querySelector("p")).fontSize // "14px"
    console.log('auslesenString --->', auslesenString);
    // console.log('auslesenStyle --->', document.querySelector("p").style);
    document.querySelector("p").style.fontSize = parseInt(auslesenString) + 44 + "px" // 14 +44 / 58 + px

  }
  const decFontSize = () => setFontSizeTo(currentFontSize() - 5);

  const currentFontSize = () => parseInt(getComputedStyle($('p')).fontSize);

  const setFontSizeTo = (size) => ($('p').style.fontSize = size + 'px');

  init();
}
