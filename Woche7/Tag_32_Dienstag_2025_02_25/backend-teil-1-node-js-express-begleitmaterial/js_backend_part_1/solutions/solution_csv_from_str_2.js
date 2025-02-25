// some, but not all fields are quoted - solution 1

const mixedCSV =
  '"very big, soft computer mouse","the cutest peripheral ever",10,39.90';

let fields = [];
let index = 0;
let state = 'outside';

mixedCSV.split('').forEach((char) => {
  if (state === 'quoted') {
    fields[index] += char; // => [",v,e,r,y..."]
    if (char === '"') {
      state = 'outside';
      index += 1;
    }
  } else if (state === 'unquoted') {
    if (char === ',') {
      state = 'outside';
      index += 1;
    } else {
      fields[index] += char;
    }
  } else if (state === 'outside') {
    fields[index] = char; //=> [",...
    if (char === '"') {
      state = 'quoted';
    } else if (char !== ',') {
      state = 'unquoted';
    }
  }
});

console.log(fields);
