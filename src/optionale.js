/*jshint node:true */

'use strict';

/**
 * Returns the package for the given name if found or undefined otherwise
 *
 * @param {String} The name of the package to try to load
 *
 * @return {*}
 */
module.exports = function optionale(optionalDependency) {
  try {
    return require(optionalDependency);
  } catch (ignore) {
  }
};
