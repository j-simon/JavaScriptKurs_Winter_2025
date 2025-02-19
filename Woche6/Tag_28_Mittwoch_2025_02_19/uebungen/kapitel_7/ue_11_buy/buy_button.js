'use strict';
{
    const init = () => {
        const handleClick = (e) => {
            //console.log("click!");
            e.target.disabled = true
            e.target.setAttribute("disabled", true);
            // $("button").disabled = true;
            //$("button").setAttribute("disabled", true);
        }

        $("button").addEventListener("click", handleClick);
    }
    
    init();
}