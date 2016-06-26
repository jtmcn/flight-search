'use strict';

module.exports = function(server) {
    server.get('/flights/search', function(req, res, next) {
        console.log('get flights');

        var flightData = [];

        res.send(flightData);
    });

};
