'use strict'

var isGen = require('is-generator');

module.exports = function*(gen, fn) {
  gen = isGen.fn(gen)? gen() : gen;
  for (let x of gen) {
    yield fn(x);
  }
}
