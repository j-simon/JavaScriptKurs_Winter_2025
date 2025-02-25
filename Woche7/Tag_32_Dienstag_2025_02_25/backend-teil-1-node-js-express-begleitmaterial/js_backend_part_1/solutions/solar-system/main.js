'use strict';

(() => {
  // === DOM & VARS =======
  const DOM = {};
  DOM.template = document.querySelector('#template');
  DOM.planetsContainer = document.querySelector('.planets-container');

  const PLANETS = [
    'Venus',
    'Mars',
    'Mercury',
    'Earth',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune',
    'Pluto',
    'Sun',
  ];

  // === INIT =============
  const init = () => {
    getPlanetData();
  };

  // === EVENTHANDLER =====

  // === XHR/FETCH ========
  const getPlanetData = () => {
    fetch(
      'https://api.le-systeme-solaire.net/rest/bodies?data=englishName,bodyType,avgTemp,gravity,density'
    )
      .then((resp) => resp.json())
      .then((data) => recordToHtml(filterPlanets(data)))
      .catch((err) => console.error(err));
  };
  // === FUNCTIONS ========
  const recordToHtml = (filteredArr) => {
    filteredArr.forEach((planet) => {
      const templateClone = DOM.template.content.cloneNode(true);

      templateClone.querySelector(
        '.planet-img'
      ).src = `https://placehold.co/286x100?text=${planet.englishName}`;
      templateClone.querySelector('.english-name').textContent =
        planet.englishName;
      templateClone.querySelector(
        '.body-type'
      ).textContent = `Body type: ${planet.bodyType}`;
      templateClone.querySelector(
        '.avg-temp'
      ).textContent = `Average temperature: ${planet.avgTemp} Kelvin`;
      templateClone.querySelector(
        '.gravity'
      ).textContent = `Gravity: ${planet.gravity} m.s-2`;
      templateClone.querySelector(
        '.density'
      ).textContent = `Density: ${planet.density} g.cm3`;

      DOM.planetsContainer.appendChild(templateClone);
    });
  };

  const filterPlanets = (data) => {
    const filteredPlanets = data.bodies.filter((obj) =>
      PLANETS.find((planet) => obj.englishName === planet)
    );
    return filteredPlanets;
  };
  init();
})();
