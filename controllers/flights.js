'use strict';

var scraper = require('../common/scraper.js');

function scrapeFlights() {
  return Promise.all([
    scraper.getFlights('expedia'),
    scraper.getFlights('orbitz'),
    scraper.getFlights('priceline'),
    scraper.getFlights('travelocity'),
    scraper.getFlights('united')
  ]);
}

function sortFlights(providerArray) {

  // console.log(providerArray[0]);

  var sortedResults;

  providerArray.forEach(function (provider) {
    // var rando = Math.floor(Math.random() * 100 + 1);
    console.log(provider);
  });


  // console.log(providerArray.length);

  return sortedResults;
}

function handleError(error) {
  console.log(error.message);
}

function getAllFlights(send) {
  scrapeFlights()
    .then(function (results) {
      var sorted = sortFlights(results);
      send(sorted);
    })
    .catch(handleError);
}

exports.getAllFlights = getAllFlights;
exports.sortFlights = sortFlights; // for testing purposes

