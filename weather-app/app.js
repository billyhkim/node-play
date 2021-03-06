/* Async Example
console.log('Starting');

setTimeout(() => console.log('2 second timer'), 2000);

setTimeout(() => console.log('0 second timer'), 0);

console.log('Stopping');
*/

const chalk = require('chalk');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (!address) {
  console.log(`Please provide an address.`);
} else {
  geocode(address, (err, { latitude, longitude, location }) => {
    if (err) {
      return console.log(err);
    }
  
    forecast(latitude, longitude, (err, forecastData) => {
      if (err) {
        return console.log(err);
      }
  
      console.log(chalk.bold.green(location));
      console.log(forecastData);
    })
  });
}
