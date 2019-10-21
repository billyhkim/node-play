/* Async Example
console.log('Starting');

setTimeout(() => console.log('2 second timer'), 2000);

setTimeout(() => console.log('0 second timer'), 0);

console.log('Stopping');
*/

const request = require('request');
const chalk = require('chalk');

const darkskyUrl = 'https://api.darksky.net/forecast/081adf3326f39a684339e12e3c742b8d/33.8366,-117.9143?lang=ko&units=us';

request({ url: darkskyUrl, json: true }, (err, res) => {
  // console.log(res.body.currently);
  console.log(`${chalk.bold.magenta(res.body.daily.data[0].summary)}`);
  console.log(`It is currently ${chalk.bold.green(res.body.currently.temperature)} degrees. There is a ${chalk.bold.blue(res.body.currently.precipProbability)}% chance of rain.`);
});

// Geocoding
// Goal: Address -> Lat/Long -> Weather

const mapboxGeocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYmlsbHloa2ltIiwiYSI6ImNrMXpnaWZ2ejB1eGYzaG80cTM0N3N6amoifQ.Jmy5hJVkidza14aFCloW6A&limit=1';

request({ url: mapboxGeocodeUrl, json: true }, (err, res) => {
  const longitude = res.body.features[0].center[0];
  const latitude = res.body.features[0].center[1];
  console.log(chalk.yellow.bold(`latitude: ${latitude}, longitude: ${longitude}`));
})