'use strict';

var restify = require('restify'),
    assert = require('assert');

var client = restify.createJsonClient('http://localhost:9000');

var exports = module.exports = {};


var getFlights = function getFlights(providerURI, callback) {
    console.log('3 get flights from python (scraper)');
    // Performs an HTTP get; if no payload was returned, data defaults to {}
    client.get(providerURI, function(err, req, res, data) {
        assert.ifError(err);
        console.log('4 flights returned from api (scraper)');
        // console.log(data);
        callback(data.results);
    });
};



exports.getExpediaFlights = function(cb) { getFlights('/scrapers/expedia', cb); };
exports.getOrbitzFlights = function(cb) { getFlights('/scrapers/orbitz', cb); };
exports.getPricelineFlights = function(cb) { getFlights('/scrapers/priceline', cb); };
exports.getTravelocityFlights = function(cb) { getFlights('/scrapers/travelocity', cb); };
exports.getUnitedFlights = function(cb) { getFlights('/scrapers/united', cb); };
