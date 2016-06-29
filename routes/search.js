'use strict';

var flightsCtrl = require('../controllers/flightsCtrl.js');

module.exports = function(server) {
    server.get('/flights/search', function(req, res, next) {
      flightsCtrl.getAllFlights(function(allFlights) {
        res.send(allFlights);
      });
    });
};
