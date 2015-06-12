'use strict';

/**
 * Returns the input hex string in base64.
 *
 * @param {String} the hex string to convert.
 * @return {String} the base64 string.
 */

module.exports = function(hexString) {
  return new Buffer(new Buffer(hexString, 'hex')).toString('base64');
};