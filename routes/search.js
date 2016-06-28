'use strict';

var flights = require('../controllers/flightsCtrl.js');

module.exports = function(server) {
    server.get('/flights/search', function(req, res, next) {
        console.log('1 flights requested (route)');

        flights.getAllFlights(function(flightData) {
            console.log('6 sending flights (route)');
            res.send(flightData);
        });

        console.log('7 server get complete (route)');
    });

};
