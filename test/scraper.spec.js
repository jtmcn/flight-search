'use strict';

var expect = require('chai').expect;
var scraper = require('../common/scraper.js');


describe('Scrapers', function() {

    describe('get all flights from python api server', function() {
        it('should return valid json', function(done) {

            scraper.getAllFlights(function(allFlights) {

                console.log(allFlights);

                // expect(allFlights).to.have.length.above(0);


                done();

            });


        });
    });

});
