'use strict'

module.exports = function*(gen, fn) {
  let i = 0;
  for (let x of gen)
    yield fn(x, i++);
}
