var R = require('ramda');

function mergeFlights(providerArray) {
  let mergedArrs = [];
  let sorted = {
    results: []
  };

  providerArray.map(function (provider) {
    provider.results.map(function (flights) {
      mergedArrs.push(flights);
    });
  });

  sorted.results = R.sortBy(R.prop('agony'), mergedArrs);
  return sorted;
}

exports.mergeFlights = mergeFlights;
