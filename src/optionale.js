/*jshint node:true */

'use strict';

var isUndefined = require('lodash.isundefined');

exports.optionale = optionale;
exports.any = any;
exports.some = some;

/**
 * Returns the package for the given name if found or undefined otherwise
 *
 * @param {String} The name of the package to try to load
 *
 * @return {*}
 */
function optionale(optionalDependency) {
  try {
    return require(optionalDependency);
  } catch (ignore) {
  }
}

/**
 * Returns the first available package if it exists or undefined otherwise
 *
 * @param {Array} The names of the package to try to load
 *
 * @return {*}
 */
function any(optioanlDependencies) {
  var result;

  optioanlDependencies.every(function(optionalDependency) {
    result = optionale(optionalDependency);

    return isUndefined(result);
  });

  return result;
}

/**
 * Returns the first available package if it exists or throws Error otherwise
 *
 * @param {Array} The names of the package to try to load
 *
 * @return {*}
 *
 * @throws Error
 */
function some(optionalDependencies) {
  var result = any(optionalDependencies);

  if (isUndefined(result)) {
    throw new Error('None of the dependencies could be loaded');
  }

  return result;
}
