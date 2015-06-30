'use strict';
var chai = require('chai');
var expect = chai.expect;
var request = require('request');

describe('/user', function() {
  describe('get', function() {
    it('should be 200 OK', function(done) {
      request({
        url: 'https://api.uber.com/test/user',
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      },
      function(error, response, body) {
        chai.expect(body).to.have.property('name');
        done();
      });
    });

    it('should be 400 NOT OK', function(done) {
      request({
        url: 'https://api.uber.com/test/user',
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      },
      function(error, response, body) {
        chai.expect(body).to.have.property('name');
        done();
      });
    });

    it('should be 500 SERVER ERROR', function(done) {
      request({
        url: 'https://api.uber.com/test/user',
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      },
      function(error, response, body) {
        chai.expect(body).to.have.property('name');
        done();
      });
    });

  });

  describe('post', function() {
    it('should be 200 OK', function(done) {
      request({
        url: 'https://api.uber.com/test/user',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        json: {
          latitude: 'DATA GOES HERE'
        }
      },
      function(error, res, body) {
        chai.expect(body).to.have.property('name');
        done();
      });
    });

    it('should be 400 NOT OK', function(done) {
      request({
        url: 'https://api.uber.com/test/user',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        json: {
          latitude: 'DATA GOES HERE'
        }
      },
      function(error, res, body) {
        chai.expect(body).to.have.property('name');
        done();
      });
    });

    it('should be 500 SERVER ERROR', function(done) {
      request({
        url: 'https://api.uber.com/test/user',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        json: {
          latitude: 'DATA GOES HERE'
        }
      },
      function(error, res, body) {
        chai.expect(body).to.have.property('name');
        done();
      });
    });

  });

});
