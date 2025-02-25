const dns = require('dns');

const IP_V = 4; // we use IP protocol version 4
const URL = 'de.webmasters-europe.org';

// Solution 2: Variant with promises subobject
const getIpPromises = (url, ip) => {
  return dns.promises.lookup(url, ip);
};

getIpPromises(URL, IP_V)
  .then((data) => console.log(`IP adress = ${data.address}`))
  .catch((err) => console.error(err));

// dns.lookup(URL, IP_V, (error, address) => {
//   if (error) {
//     console.log('error: could not lookup host');
//   } else {
//     console.log('IP address = ' + address);
//   }
// });
