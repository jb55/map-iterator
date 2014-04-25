'use strict'

module.exports = function(genFn, fn) {
  return function*() {
    for (let x of genFn()) {
      yield fn(x);
    }
  }
}
