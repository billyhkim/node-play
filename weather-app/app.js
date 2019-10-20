/* Async Example
console.log('Starting');

setTimeout(() => console.log('2 second timer'), 2000);

setTimeout(() => console.log('0 second timer'), 0);

console.log('Stopping');
*/

const request = require('request');
const chalk = require('chalk');

const url = 'https://api.darksky.net/forecast/081adf3326f39a684339e12e3c742b8d/37.8267,-122.4233';

request({ url, json: true }, (err, res) => {
  console.log(res.body.currently);
});