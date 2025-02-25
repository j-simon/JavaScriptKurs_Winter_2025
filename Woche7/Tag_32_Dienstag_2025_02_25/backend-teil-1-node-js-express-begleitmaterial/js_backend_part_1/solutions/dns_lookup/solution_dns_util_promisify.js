const dns = require('dns');
const util = require('util');

const IP_V = 4; // we use IP protocol version 4
const URL = 'de.webmasters-europe.org';

// Solution 3: Variant with util module
const getIpPromisify = util.promisify(dns.lookup);

getIpPromisify(URL, IP_V)
  .then((data) => console.log(`IP adress = ${data.address}`))
  .catch((err) => console.error(err));

// dns.lookup(URL, IP_V, (error, address) => {
//   if (error) {
//     console.log('error: could not lookup host');
//   } else {
//     console.log('IP address = ' + address);
//   }
// });
