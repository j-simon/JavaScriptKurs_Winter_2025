'use strict';

{
  const init = () => $on($$('.keyword'), 'mouseenter', showTooltip);

  const showTooltip = (e) => console.log(e.target.innerHTML);

  init();
}
