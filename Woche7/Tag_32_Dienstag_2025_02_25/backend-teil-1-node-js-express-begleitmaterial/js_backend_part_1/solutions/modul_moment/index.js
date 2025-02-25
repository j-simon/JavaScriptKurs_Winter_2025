const moment = require('moment'); // Node Common Schreibweise zum Einbinden eines Moduls

const nextSaturday = moment().day('Saturday').format('DD.MM.YYYY');

console.log(nextSaturday);
