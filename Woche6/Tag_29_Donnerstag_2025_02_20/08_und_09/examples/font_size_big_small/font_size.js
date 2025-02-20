'use strict';

{
  const init = () => {
    $on($('#very_big'), 'click', () => ($('p').style.fontSize = '36px'));
    $on($('#big'), 'click', () => ($('p').style.fontSize = '24px'));
    $on($('#normal'), 'click', () => ($('p').style.fontSize = '16px'));
    $on($('#small'), 'click', () => ($('p').style.fontSize = '14px'));
  };

  init();
}
