import moment from 'moment'; // ES-Modulschreibweise zum Einbinden eines Moduls

const nextSaturday = moment().day('Saturday').format('DD.MM.YYYY');

console.log(nextSaturday);
