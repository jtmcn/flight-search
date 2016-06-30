'use strict';

var scraper = require('../common/scraper.js');
var merger = require('../common/merger.js');

function scrapeFlights() {
  return Promise.all([
    scraper.getFlights('expedia'),
    scraper.getFlights('orbitz'),
    scraper.getFlights('priceline'),
    scraper.getFlights('travelocity'),
    scraper.getFlights('united')
  ]);
}

function handleError(error) {
  console.log(error.message);
}

function getAllFlights(send) {
  scrapeFlights()
    .then(function (results) {
      var merged = merger.mergeFlights(results);
      send(merged);
    })
    .catch(handleError);
}

exports.getAllFlights = getAllFlights;


