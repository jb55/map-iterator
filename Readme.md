
# map-iterator

  Transform iterator values by applying a function to each one.

  [Other useful functions](https://github.com/jb55/generators)

  [![Build Status](https://travis-ci.org/jb55/map-iterator.png)](https://travis-ci.org/jb55/map-iterator)

## Installation

  Install with npm

    $ npm install map-iterator

## Example

```js
'use strict';

let map = require('map-iterator')

function* fibonacci(){
  let fn1 = 1;
  let fn2 = 1;
  while (1){
    let current = fn2;
    fn2 = fn1;
    fn1 = fn1 + current;
    yield current;
  }
}

let strFib = map(fibonacci(), function(n){
  return "Fib number: " + n;
})

for (let str of strFib) {
  console.log(str);
  if (str === "Fib number: 5") break;
}

// "Fib number: 1"
// "Fib number: 1"
// "Fib number: 2"
// "Fib number: 3"
// "Fib number: 5"

```

## API

### map([Iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/The_Iterator_protocol), Function)

returns: [Iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/The_Iterator_protocol)

## License

  The MIT License (MIT)

  Copyright (c) 2014 William Casarin

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
