'use strict';

var expect = require('chai').expect;
var restify = require('restify');


// init the test client
var client = restify.createJsonClient({
    url: 'http://localhost:8000'
});


describe('Endpoints', function() {

    describe('/flights/search', function() {
        it('should return a 200 response', function(done) {
            client.get('/flights/search', function(err, req, res) {
                expect(res.statusCode).to.equal(200);
                done();
            });
        });
    });

    describe('/bananas', function() {
        it('should return 404', function() {
            client.get('/bananas', function(err, req, res) {
                expect(res.statusCode).to.equal(404);
                done();
            });
        });
    });
});
