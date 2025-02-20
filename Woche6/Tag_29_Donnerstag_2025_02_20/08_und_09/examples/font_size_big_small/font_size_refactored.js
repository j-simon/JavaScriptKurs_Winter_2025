'use strict';

{
  const SMALL = 14;
  const NORMAL = 16;
  const BIG = 24;
  const VERY_BIG = 36;

  const init = () => {
    $on($('#very_big'), 'click', () => setFontSizeTo(VERY_BIG));
    $on($('#big'), 'click', () => setFontSizeTo(BIG));
    $on($('#normal'), 'click', () => setFontSizeTo(NORMAL));
    $on($('#small'), 'click', () => setFontSizeTo(SMALL));
  };

  const setFontSizeTo = (size) => ($('p').style.fontSize = size + 'px');

  init();
}
