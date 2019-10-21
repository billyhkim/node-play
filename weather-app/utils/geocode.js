const request = require('request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYmlsbHloa2ltIiwiYSI6ImNrMXpnaWZ2ejB1eGYzaG80cTM0N3N6amoifQ.Jmy5hJVkidza14aFCloW6A&limit=1`;

  request({ url, json: true }, (err, { body }) => {
    if (err) {
      callback(`Unable to connect to geocoding service.`);
    } else if (body.features.length === 0) {
      callback(`Not a valid location.`);
    } else {
      callback(undefined, {
        longitude: body.features[0].center[0],
        latitude: body.features[0].center[1],
        location: body.features[0].place_name
      });
    }
  })
};

module.exports = geocode;