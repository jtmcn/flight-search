'use strict';
const flightsCtrl = require('../controllers/flights.js');

module.exports = function (server) {
  server.get('/flights/search', (req, res) =>
    flightsCtrl.getAllFlights((allFlights) =>
      res.send(allFlights)
    )
  );
};
