const showInfo = (e) =>
  ($('#info').innerHTML = `
  <h3>
     <img src="${country(e)}.png" alt="${flagName(e)}" title="${flagName(e)}" />
     ${name(e)}
  </h3>
  <p>${desc(e)}</p>`);

const name = (e) => e.target.alt;
const desc = (e) => e.target.dataset.description;
const country = (e) => e.target.dataset.countryCode;
const flagName = (e) => e.target.dataset.flagName;

$on($$('img[data-description]'), 'mouseenter', showInfo);
