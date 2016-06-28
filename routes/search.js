'use strict';

var flights = require('../common/scraper.js');

module.exports = function(server) {
    server.get('/flights/search', function(req, res, next) {
        console.log('get flights');
        var flightData = flights.sorted();
        res.send(flightData);
    });

};
