/*jshint node:true */

'use strict';

/**
 * Returns the package for the given name if found or undefined otherwise
 *
 * @param  {String} The name of the package to load
 *
 * @return {*}
 */
exports.optionale = function optionale(optioanlDependency) {
  try {
    return require(optioanlDependency);
  } catch (er) {
    return;
  }
};
