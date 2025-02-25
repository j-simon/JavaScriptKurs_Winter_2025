// 'use strict';

// const r = () => $('#red').value;
// const g = () => $('#green').value;
// const b = () => $('#blue').value;

// $on(
//   $$("input[type='range']"),
//   'input', // "change" , "focus", "select"
//   () => ($('body').style.backgroundColor = `rgb(${r()}, ${g()}, ${b()})`)
// );


document.querySelector("#red")
  .addEventListener("input", () => $("body").style.backgroundColor = `rgb(${$('#red').value},${$('#green').value},${$('#blue').value})`);

document.querySelector("#green")
  .addEventListener("input", () => $("body").style.backgroundColor = `rgb(${$('#red').value},${$('#green').value},${$('#blue').value})`);

document.querySelector("#blue")
  .addEventListener("input", () => $("body").style.backgroundColor = `rgb(${$('#red').value},${$('#green').value},${$('#blue').value})`);
