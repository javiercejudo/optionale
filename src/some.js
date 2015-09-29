/*jshint node:true */

'use strict';

var isUndefined = require('lodash.isundefined');
var assert = require('assert-error');
var any = require('./any');

/**
 * Returns the first available package if it exists or throws Error otherwise
 *
 * @param {Array} The names of the package to try to load
 *
 * @return {*}
 *
 * @throws Error
 */
module.exports = function some(optionalDependencies) {
  var result = any(optionalDependencies);

  assert(!isUndefined(result), new Error('None of the dependencies could be loaded'));

  return result;
};
