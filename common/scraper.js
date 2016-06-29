'use strict';

var rp = require('request-promise');

exports.getFlights = function (provider) {
  var options = {
    uri: 'http://localhost:9000/scrapers/' + provider,
    json: true
  };
  return rp(options);
};
