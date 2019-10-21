/* Async Example
console.log('Starting');

setTimeout(() => console.log('2 second timer'), 2000);

setTimeout(() => console.log('0 second timer'), 0);

console.log('Stopping');
*/

const request = require('request');
const chalk = require('chalk');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// const darkskyUrl = 'https://api.darksky.net/forecast/081adf3326f39a684339e12e3c742b8d/33.8366,-117.9143?lang=ko&units=us';

// request({ url: darkskyUrl, json: true }, (err, res) => {
//   if (err) {
//     console.error(`Unable to connect to weather service.`);
//   } else if (res.body.error) {
//     console.error(`Unable to find location.`)
//   } else {
//     console.log(`${chalk.bold.magenta(res.body.daily.data[0].summary)}`);
//     console.log(`It is currently ${chalk.bold.green(res.body.currently.temperature)} degrees. There is a ${chalk.bold.blue(res.body.currently.precipProbability)}% chance of rain.`);
//   }
// });

geocode('Irvine California', (err, data) => {
  console.log('Error: ', err);
  console.log('Data: ', data);
});

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(-75.7088, 44.1545, (error, data) => {
  console.log('Error: ', error)
  console.log('Data: ', data)
})