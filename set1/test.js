'use strict';

var challenge1 = require('./challenge1');
var assert = require('assert');

describe('convert hex to base64', function() {
  it('should return the input hex string in base64', function() {
    assert.equal('SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t', challenge1('49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d'));
  });
});