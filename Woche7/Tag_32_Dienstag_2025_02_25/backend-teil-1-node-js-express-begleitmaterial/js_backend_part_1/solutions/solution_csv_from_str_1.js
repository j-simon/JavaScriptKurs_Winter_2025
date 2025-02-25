// all fields are quoted

const quotedCSV =
  '"very big, soft computer mouse","the cutest peripheral ever","10","39.90"';

const fields = quotedCSV.split('","');
console.log(fields);
