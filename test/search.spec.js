'use strict';

var expect = require('chai').expect;
var restify = require('restify');

var client = restify.createJsonClient('http://localhost:8000');

describe('Endpoints', function() {

    describe('/flights/search', function() {
        it('should return valid json data', function(done) {
            client.get('/flights/search', function(err, req, res) {
                expect(res.statusCode).to.equal(200);
                console.log(res.body);
                expect(res.body).to.have.length.above(0);
                done();
            });
        });
    });
    console.log('describe');
    describe('/bananas', function() {
        console.log('it');
        it('should return 404', function() {
            console.log('get');
            client.get('/bananas', function(err, req, res) {
                console.log('res head');
                console.log(res.head);
                // expect(res);
                expect(res.statusCode).to.equal(404);
                done();
            });
        });
    });
});
