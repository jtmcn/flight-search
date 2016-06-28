'use strict';

var rp = require('request-promise');

module.exports.getFlights = function (provider) {
  var options = {
    uri: 'http://localhost:9000/scrapers/' + provider,
    json: true
  };
  console.log(provider);
  return rp(options);
};
