'use strict'

module.exports = function*(gen, fn) {
  for (let x of gen) {
    yield fn(x);
  }
}
