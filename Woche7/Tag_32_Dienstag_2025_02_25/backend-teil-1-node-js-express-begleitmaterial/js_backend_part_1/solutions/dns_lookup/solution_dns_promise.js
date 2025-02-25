const dns = require('dns');

const IP_V = 4; // we use IP protocol version 4
const URL = 'de.webmasters-europe.org';

// Solution 1: Detailed variant with Promise object
const getIp = (url, ip) => {
  return new Promise((resolve, reject) => {
    dns.lookup(url, ip, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve({ address: data, family: ip });
      }
    });
  });
};

getIp(URL, IP_V)
  .then((data) => console.log(`IP adress = ${data.address}`))
  .catch((err) => console.error(err));

// dns.lookup(URL, IP_V, (error, address) => {
//   if (error) {
//     console.log('error: could not lookup host');
//   } else {
//     console.log('IP address = ' + address);
//   }
// });
