'use strict';
const rp = require('request-promise');

exports.getFlights = provider => {
  let options = {
    uri: 'http://localhost:9000/scrapers/' + provider,
    json: true
  };
  return rp(options);
};
