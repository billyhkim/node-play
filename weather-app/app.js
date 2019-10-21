/* Async Example
console.log('Starting');

setTimeout(() => console.log('2 second timer'), 2000);

setTimeout(() => console.log('0 second timer'), 0);

console.log('Stopping');
*/

const chalk = require('chalk');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Irvine California', (err, data) => {
  console.log('Error: ', err);
  console.log('Data: ', data);
});

forecast(-75.7088, 44.1545, (err, data) => {
  console.log('Error: ', err)
  console.log('Data: ', data)
})