'use strict';

var scraper = require('../common/scraper.js');
var R = require('ramda');
// var premerged = require('../test/mock-data-merged');


function scrapeFlights() {
  return Promise.all([
    scraper.getFlights('expedia'),
    scraper.getFlights('orbitz'),
    scraper.getFlights('priceline'),
    scraper.getFlights('travelocity'),
    scraper.getFlights('united')
  ]);
}

function mergeFlights(providerArray) {
  var mergedArrs = [];
  var sortedResults = {
    results: []
  };

  providerArray.map(function (provider) {
    provider.results.map(function (flights) {
      mergedArrs.push(flights);
    });
  });

  // unsortedResults.map(function (flights) {
  //   console.log(flights);
  //   sortedResults.results.push(flights[0]);
  // });

  sortedResults.results = R.sortBy(R.prop('agony'), mergedArrs);


  // console.log('premerged');
  // console.log(JSON.stringify(premerged, null, 2));
  // console.log('mergedArrs');
  // console.log(JSON.stringify(mergedArrs, null, 2));
  // console.log('sortedResults');
  // console.log(JSON.stringify(sortedResults, null, 2));

  return sortedResults;
}

function handleError(error) {
  console.log(error.message);
}

function getAllFlights(send) {
  scrapeFlights()
    .then(function (results) {
      var merged = mergeFlights(results);
      send(merged);
    })
    .catch(handleError);
}
exports.getAllFlights = getAllFlights;
exports.mergeFlights = mergeFlights; // for testing purposes

