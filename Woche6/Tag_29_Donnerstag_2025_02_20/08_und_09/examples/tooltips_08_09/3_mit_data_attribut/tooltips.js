'use strict';

{

  
  const MOUSE_TO_TOOLTIP = 20;

// alternativ zu data-attributes kann man auch array oder objekt definieren,
// es ist dann aber schwierig die texte zuzuordnen

 const tootltipText=[
  "Hier beschreibe ich den cel...",
  "lkjfsdjfdslk",
  "lökdkfldösfk"
 ];

 const tootltipTexte={
  "celebral cortex" : "Hier beschreibe ich den cel...",
  "neurons": "lkjfsdjfdslk",
  
 };

  const init = () => $on($on($$('.keyword'), 'mousemove', showTooltip), 'mouseleave', hideTooltip);

  const showTooltip = (e) => {
    $('#tooltip').style.display = 'block';
    $('#tooltip').style.top = e.clientY + MOUSE_TO_TOOLTIP + 'px';
    $('#tooltip').style.left = e.clientX + MOUSE_TO_TOOLTIP + 'px';

    // data-attribut für tooltip inhalt nutzen 
    // <span data-tooltip-text="Hier beschreiben den celecbral...." 
    console.log(e.target.dataset.tooltipText);
    $('#tooltip').innerHTML = e.target.dataset.tooltipText;

  };

  const hideTooltip = () => ($('#tooltip').style.display = 'none');

  init();
}
