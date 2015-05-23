/*jshint node:true, mocha:true */

'use strict';

var should = require('should');
var sinon = require('sinon');
var optionale = require('../src/optionale').optionale;

describe('optionale', function() {
  describe('called with the name of an unavailable package', function() {
    it('should return undefined', function() {
      should(optionale('invalid-package')).have.type('undefined');
    });
  });

  describe('called with the name of an available package', function () {
    it('should return it', function() {
      optionale('util').should.not.have.type('undefined');
    });
  });
});
