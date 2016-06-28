'use strict';

var scraper = require('../common/scraper.js');

var exports = module.exports = {};


var getAllFlights = function getAllFlights(callback) {
    console.log("2 getAllFlights (ctrl)");
    scraper.getExpediaFlights(function(flightData) {
        // console.log(flightData[0]);
        console.log("5 returning flightData (ctrl)");
        callback(flightData);
    });


};

var sortFlights = function sortFlights() {
    getAllFlights();
};


exports.sorted = sortFlights;
exports.getAllFlights = getAllFlights;
