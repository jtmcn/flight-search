'use strict';
const scraper = require('../common/scraper.js');
const merger = require('../common/merger.js');
const providers = require('../models/providers.js').all;

let scrapeProviders = providers.map(provider => scraper.getFlights(provider));

function getAllFlights(send) {
  Promise.all(scrapeProviders)
    .then(results => send(merger.mergeFlights(results)))
    .catch(handleError);
}

function handleError(error) {
  console.log(error.message);
}

exports.getAllFlights = getAllFlights;


