'use strict';

function mergeFlights(providerArray) {
  let merged = {results: []};

  merged.results = providerArray
    .map(provider => provider.results)
    .reduce(mergeSorted) // merge two arrays at time
    .map(flightObj => flightObj);

  return merged;
}

function mergeSorted(a, b) {
  let aLen = a.length, bLen = b.length,
    i = 0, j = 0, k = 0,
    mergedArr = new Array(aLen + bLen);

  // as long as both provider arrays contain flight objects,
  // compare next agony value in each and store flight of smaller in mergedArr
  while (i < aLen && j < bLen)
    mergedArr[k++] = a[i].agony < b[j].agony ? a[i++] : b[j++];

  // if one array is empty store the rest of remaining array in mergedArr
  while (i < aLen)
    mergedArr[k++] = a[i++];
  while (j < bLen)
    mergedArr[k++] = b[j++];

  return mergedArr;
}

exports.mergeFlights = mergeFlights;
