'use strict';

/**
 * Attacks a single-charcter-XOR-encrypted hex string based on character frequency.
 *
 * @param {String} the string you wish to attack
 * @return {Array} the possible decoded messages
 */

var message = '1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736';
// Common freqs = ETAOIN SHRDLU

var xor = require('./challenge2');

/**
 * Splits a string `a` into segments that are `n` characters long.
 *
 * @param {String} the string you wish to split
 * @param {Int} the desired length of split segments
 * @return {Array} the resulting split string
 */
function splitString(a, n) {
  var chunks = [];
  for (var i = 0; i < a.length; i += n) {
    chunks.push(a.substring(i, i + n));
  }
  return chunks;
}

function getFreq(a) {
  var freq = {};
  for (var i = 0; i < a.length;i++) {
    var character = a.charAt(i);
    if (freq[character]) {
      freq[character]++;
    } else {
      freq[character] = 1;
    }
  }

  return freq;
}