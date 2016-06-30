var R = require('ramda');

function mergeFlights(providerArray) {
  let mergedArrays = [];
  let sorted = {
    results: []
  };

  providerArray.map(function (provider) {
    provider.results.map(function (flights) {
      mergedArrays.push(flights);
    });
  });

  sorted.results = R.sortBy(R.prop('agony'), mergedArrays);
  return sorted;
}

exports.mergeFlights = mergeFlights;
