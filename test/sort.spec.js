'use strict';

var expect = require('chai').expect;
var flightsCtrl = require('../controllers/flights.js');
var unsorted = require('./mock-data-unsorted');
var presorted = require('./mock-data-sorted');
var presorted2 = require('./mock-data-sorted');


var compare = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (var i = arr1.length; i--;) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};



  describe('Sorted flight results', function () {
    it('should be identical to pre-sorted', function () {

      var sorted = flightsCtrl.sortFlights(unsorted);
      var arraysAreIdentical = compare(sorted, presorted);
      expect(arraysAreIdentical).to.be.true;

    });
  });




