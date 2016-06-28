'use strict';

var flights = require('../controllers/flightsCtrl.js');
// var scraper = require('../common/scraper-promise.js');

module.exports = function(server) {
    server.get('/flights/search', function(req, res, next) {

      flights.getAllFlights(function(allFlights) {
        console.log(allFlights);
        res.send(allFlights);
      });
        // .then(function (flightData) {
        //   return flightData;
        // })

        // console.log(flights);

        // res.send(flightData);
      // });
        // console.log('1 flights requested (route)');
        //
        // flights.getAllFlights(function(flightData) {
        //     console.log('6 sending flights (route)');
        //     res.send(flightData);
        // });
        //
        // console.log('7 server get complete (route)');
    });

};
