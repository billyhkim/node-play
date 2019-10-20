/* Async Example
console.log('Starting');

setTimeout(() => console.log('2 second timer'), 2000);

setTimeout(() => console.log('0 second timer'), 0);

console.log('Stopping');
*/

const request = require('request');
const chalk = require('chalk');

const url = 'https://api.darksky.net/forecast/081adf3326f39a684339e12e3c742b8d/33.8366,-117.9143';

request({ url, json: true }, (err, res) => {
  // console.log(res.body.currently);
  console.log(`It is currently ${chalk.bold.green(res.body.currently.temperature)} degrees. There is a ${chalk.bold.blue(res.body.currently.precipProbability)}% chance of rain.`);
});