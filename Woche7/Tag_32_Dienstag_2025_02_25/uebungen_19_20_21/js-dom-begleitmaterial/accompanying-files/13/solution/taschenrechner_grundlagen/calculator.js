const getElementById = (id) => document.getElementById(id);

const OUTPUT = getElementById('output');
const CALCULATION = getElementById('calculation');

function calculate() {
  CALCULATION.innerHTML = OUTPUT.innerHTML + ' =';
  OUTPUT.innerHTML = eval(OUTPUT.innerHTML);
}

function addButtonEventListeners() {
  getElementById('0').addEventListener('click', () => (OUTPUT.innerHTML += '0'));
  getElementById('1').addEventListener('click', () => (OUTPUT.innerHTML += '1'));
  getElementById('2').addEventListener('click', () => (OUTPUT.innerHTML += '2'));
  getElementById('3').addEventListener('click', () => (OUTPUT.innerHTML += '3'));
  getElementById('4').addEventListener('click', () => (OUTPUT.innerHTML += '4'));
  getElementById('5').addEventListener('click', () => (OUTPUT.innerHTML += '5'));
  getElementById('6').addEventListener('click', () => (OUTPUT.innerHTML += '6'));
  getElementById('7').addEventListener('click', () => (OUTPUT.innerHTML += '7'));
  getElementById('8').addEventListener('click', () => (OUTPUT.innerHTML += '8'));
  getElementById('9').addEventListener('click', () => (OUTPUT.innerHTML += '9'));
  getElementById('÷').addEventListener('click', () => (OUTPUT.innerHTML += '/'));
  getElementById('x').addEventListener('click', () => (OUTPUT.innerHTML += '*'));
  getElementById('+').addEventListener('click', () => (OUTPUT.innerHTML += '+'));
  getElementById('-').addEventListener('click', () => (OUTPUT.innerHTML += '-'));
  getElementById('=').addEventListener('click', () => calculate());
  getElementById('AC').addEventListener('click', () => {
    OUTPUT.innerHTML = '';
    CALCULATION.innerHTML = '';
  });
}

addButtonEventListeners();
