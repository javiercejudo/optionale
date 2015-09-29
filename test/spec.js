/*jshint node:true, mocha:true */

'use strict';

var should = require('should');
var api = require('../src/index');

var optionale = api.optionale;
var any = api.any;
var some = api.some;

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

describe('any', function() {
  describe('called with unavailable packages', function() {
    it('should return undefined', function() {
      should(any(['invalid-package', 'another-invalid-package']))
        .have.type('undefined');
    });
  });

  describe('called with at least one available package', function () {
    it('should return the first available package', function() {
      any(['util', 'invalid-package']).should.not.have.type('undefined');
      any(['invalid-package', 'util']).should.not.have.type('undefined');
    });
  });
});

describe('some', function() {
  describe('called with unavailable packages', function() {
    it('should throw Error', function() {
      (function() {
        some(['invalid-package', 'another-invalid-package']);
      }).should.throw(Error);
    });
  });

  describe('called with at least one available package', function () {
    it('should return the first available package', function() {
      some(['util', 'invalid-package']).should.not.have.type('undefined');
      some(['invalid-package', 'util']).should.not.have.type('undefined');
    });
  });
});
