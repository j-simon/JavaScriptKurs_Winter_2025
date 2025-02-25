'use strict';

(() => {
  // === DOM & VARS =======
  const DOM = {};
  DOM.stockInfo = document.querySelector('.stock-info');
  DOM.spanPrice = DOM.stockInfo.querySelector('.price');
  DOM.spanVolume = DOM.stockInfo.querySelector('.volume');
  DOM.time = DOM.stockInfo.querySelector('.time');

  // console.log(DOM);

  // === INIT =============
  const init = () => {
    // Funktion mit asynchonem Prozess
    getStockInfo();
  };

  // === EVENTHANDLER =====

  // === XHR/FETCH ========
  const getStockInfo = () => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
    fetch('/info')
      .then((res) => {
        console.log(res); // HTTP-Response Objekt
        return res.json(); // HTTP-Body wird verarbeitet (asynchron)
      })
      .then((data) => updateStockInfo(data)) // HTTP-Response Body -> {price: XX, volume: XX, time: XX:XX.XX}
      .catch((err) => console.error(err));

    setTimeout(getStockInfo, 2000);
  };

  // === FUNCTIONS ========
  const updateStockInfo = (data) => {
    const { price, volume, time } = data;

    DOM.spanPrice.textContent = price;
    DOM.spanVolume.textContent = volume;
    DOM.time.textContent = time;
  };

  init();
})();
