'use strict';

var expect = require('chai').expect;
var merger = require('../common/merger.js').mergeFlights;
var unmerged = require('./mock-data-unmerged');
var R = require('ramda');

describe('Merged flight results', function () {
  it('should be identical results sorted by Ramda', function () {

    let mergedResults = merger(unmerged);
    let sortedWithLib = mergeAndSortWithRamda(unmerged);
    let arraysAreIdentical = compareAgony(mergedResults.results, sortedWithLib.results);
    expect(arraysAreIdentical).to.be.true;
  });
});

function mergeAndSortWithRamda(resultsArray) {
  let mergedArrays = [];
  let sorted = {results: []};
  resultsArray.map((arr) =>
    arr.results.map((agonyObj) =>
      mergedArrays.push(agonyObj)));
  sorted.results = R.sortBy(R.prop('agony'), mergedArrays);
  return sorted;
}

function compareAgony(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;

  for (var i = arr1.length; i--;) {
    if (arr1[i].agony !== arr2[i].agony)
      return false;
  }
  return true;
}



