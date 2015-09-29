/*jshint node:true */

'use strict';

var isUndefined = require('lodash.isundefined');
var optionale = require('./optionale');

/**
 * Returns the first available package if it exists or undefined otherwise
 *
 * @param {Array} The names of the package to try to load
 *
 * @return {*}
 */
module.exports = function any(optionalDependencies) {
  var result;

  optionalDependencies.every(function(optionalDependency) {
    result = optionale(optionalDependency);

    return isUndefined(result);
  });

  return result;
};
