'use strict';

{
    const init = () => {
        $('#click_me').addEventListener('click', handleButtonClick);
     
    // $("div").addEventListener("click",e=>alert("geklickt!"))
        //  Alternative Variante:
    //  $on($("#click_me"), "click", handleButtonClick);
    };

    const handleButtonClick = (event) => {
      console.log("event=>",event)
        changeButtonTextTo(
            event.target,
            event.altKey === true // console.log im browser anschauen!
                ? 'Cool, you found an easteregg!'
                : 'Hey I like it when you click me!',
        );
    };
    const changeButtonTextTo = (button, text) => { button.innerHTML = text; };

    const $ = (qs) => document.querySelector(qs);
    //  const $$ = (qs) => Array.from(document.querySelectorAll(qs));
    
    const $on = (el, ev, fn) => {
        Array.isArray(el)
            ? el.forEach(ae => $on(ae, ev, fn))
            : el.addEventListener(ev, fn);
        return el;
    };

    init();
}
