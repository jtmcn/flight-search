'use strict';

var expect = require('chai').expect;
var merger = require('../common/merger.js').mergeFlights;
var unmerged = require('./mock-data-unmerged');
var premerged = require('./mock-data-merged');

  describe('Merged flight results', function () {

    it('should be identical to pre-merged', function () {

      var mergedResults = merger(unmerged);
      var arraysAreIdentical = compare(mergedResults, premerged);
      expect(arraysAreIdentical).to.be.true;

    });
  });

function compare(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (var i = arr1.length; i--;) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}



