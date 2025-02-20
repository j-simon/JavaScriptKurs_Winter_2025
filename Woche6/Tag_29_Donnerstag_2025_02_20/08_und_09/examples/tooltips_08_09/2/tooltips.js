'use strict';

{
  const init = () => $on($on($$('.keyword'), 'mouseenter', showTooltip), 'mouseleave', hideTooltip);

  const showTooltip = () => ($('#tooltip').style.display = 'block');
  const hideTooltip = () => ($('#tooltip').style.display = 'none');

  init();
}
