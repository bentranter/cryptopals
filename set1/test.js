'use strict';

var challenge1 = require('./challenge1');
var challenge2 = require('./challenge2');
var assert = require('assert');

describe('convert hex to base64', function() {
  it('should return the input hex string in base64', function() {
    assert.equal('SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t', challenge1('49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d'));
  });
});

describe('XOR two hex strings', function() {
  it('should return the XOR combination of two hexidecimal strings', function() {
    assert.equal('746865206b696420646f6e277420706c6179', challenge2('1c0111001f010100061a024b53535009181c','686974207468652062756c6c277320657965'));
  });
});
