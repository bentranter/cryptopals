'use strict';

/**
 * Takes two equal length hexadecimal strings and returns their XOR combination.
 *
 * @param {String} a hexadecimal string
 * @param {String} another hexdecimal string
 * @return {String} the XOR combination of the two strings
 */

module.exports = function(a, b) {
  a = new Buffer(a, 'hex');
  b = new Buffer(b, 'hex');
  var res = [];

  if (a.length !== b.length) {
    throw new Error('Strings must have the same length');
  }

  for (var i = 0; i < b.length; i++) {
    res.push(a[i] ^ b[i]);
  }
  
  return new Buffer(res, 'hex').toString('hex');
};