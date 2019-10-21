const request = require('request');

const forecast = (lat, long, callback) => {
  const url = `https://api.darksky.net/forecast/081adf3326f39a684339e12e3c742b8d/${lat},${long}`;

  request({ url, json: true }, (err, res) => {
    if (err) {
      callback(`Unable to connect to weather service.`);
    } else if (res.body.error) {
      callback(`Unable to find location.`);
    } else {
      callback(undefined, {
        summary: res.body.daily.data[0].summary,
        temperature: res.body.currently.temperature,
        precipitation: res.body.currently.precipProbability
      });
    }
  })
};

module.exports = forecast;