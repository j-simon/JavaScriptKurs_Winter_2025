const getElementById = (id) => document.getElementById(id);

const historyContainer = getElementById('history');
const historyIcon = getElementById('icon');
const historyInner = getElementById('historyinner');
const OUTPUT = getElementById('output');
const CALCULATION = getElementById('calculation');
const history = [];
let historyIndex = null;

function calculate() {
  let a = OUTPUT.innerHTML;
  history.push(a);
  CALCULATION.innerHTML = OUTPUT.innerHTML + ' =';
  OUTPUT.innerHTML = eval(OUTPUT.innerHTML);
  let b = OUTPUT.innerHTML;
  history.push(b);
  historyIndex = history.length - 1;
  historyAdd(a, b, historyIndex - 1, historyIndex);
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
  historyIcon.addEventListener('click', () => showHistory());
  document.addEventListener('click', (e) => {
    if (e.target !== historyContainer && e.target !== historyIcon) {
      historyIcon.style.color = 'rgb(112, 112, 112)';
      historyContainer.style.display = 'none';
    }
  });
}

function keyHandler(event) {
  if (event.key == '0') OUTPUT.innerHTML += '0';
  if (event.key == '1') OUTPUT.innerHTML += '1';
  if (event.key == '2') OUTPUT.innerHTML += '2';
  if (event.key == '3') OUTPUT.innerHTML += '3';
  if (event.key == '4') OUTPUT.innerHTML += '4';
  if (event.key == '5') OUTPUT.innerHTML += '5';
  if (event.key == '6') OUTPUT.innerHTML += '6';
  if (event.key == '7') OUTPUT.innerHTML += '7';
  if (event.key == '8') OUTPUT.innerHTML += '8';
  if (event.key == '9') OUTPUT.innerHTML += '9';
  if (event.key == '+') OUTPUT.innerHTML += '+';
  if (event.key == '-') OUTPUT.innerHTML += '-';
  if (event.key == '*') OUTPUT.innerHTML += '*';
  if (event.key == '/') OUTPUT.innerHTML += '/';
  if (event.key == 'Escape') {
    OUTPUT.innerHTML = '';
    CALCULATION.innerHTML = '';
  }
  if (event.key == 'Enter') calculate();
  if (event.key == 'Backspace') OUTPUT.innerHTML = OUTPUT.innerHTML.substr(0, OUTPUT.innerHTML.length - 1);
  if (event.key == 'ArrowUp') {
    OUTPUT.innerHTML = history[historyIndex - 1] ?? '';
    CALCULATION.innerHTML = history[historyIndex - 2] ?? '';
    historyIndex !== -1 ? historyIndex-- : null;
  }
  if (event.key == 'ArrowDown') {
    OUTPUT.innerHTML = history[historyIndex + 1] ?? '';
    CALCULATION.innerHTML = history[historyIndex] ?? '';
    historyIndex !== history.length ? historyIndex++ : null;
  }
}

function showHistory() {
  if (historyInner.innerHTML.replace(/\s/g, '') != '') {
    historyIcon.style.color = 'dodgerblue';
    historyContainer.style.display = 'block';
  }
}

function historyClickHandler(index) {
  if (index % 2 == 0) {
    OUTPUT.innerHTML = history[index] ?? '';
    CALCULATION.innerHTML = '';
  } else {
    OUTPUT.innerHTML = history[index] ?? '';
    CALCULATION.innerHTML = history[index - 1] + ' =' ?? '';
  }
  historyIndex = index;
}

function historyAdd(a, b, indexA, indexB) {
  historyInner.innerHTML += `<div class="historyitm" id="historyitm"><div class="historyBtn" onclick="historyClickHandler(${indexA})">
    ${a}
    </div><span>=</span><div class="historyBtn" onclick="historyClickHandler(${indexB})">
    ${b}
    </div></div>`;
}

addButtonEventListeners();
document.body.addEventListener('keydown', keyHandler);
