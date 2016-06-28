'use strict';

var scraper = require('../common/scraper-promise.js');

module.exports.getAllFlights = function (cb) {

    scrapeFlights(cb);
};

function scrapeFlights(callback) {

  Promise.all([
    scraper.getFlights('expedia'),
    scraper.getFlights('orbitz'),
    scraper.getFlights('priceline'),
    scraper.getFlights('travelocity'),
    scraper.getFlights('united')
  ]).then((flights)=> {
    let allFlights = [];
    flights.forEach(function (provider) {
      // let rando = Math.floor((Math.random() * 100) + 1);
      allFlights.push(provider.results);
    });

    let flightsOut = sortFlights(allFlights);
    // console.log(flightsOut);
    callback(flightsOut);

  }).catch((error) => {
    // handle error later
  });
}

function sortFlights(providerArray){
  console.log(providerArray.length);
  return providerArray;
}
