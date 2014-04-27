'use strict';

let nats = require('naturals');
let expect = require('expect.js');
let map = require('./');

describe('map-generator', function(){
  it('works on multive invocations', function(){
    let negs = function() { return map(nats, function(x) { return -x; }) }
    let run = negs();

    expect(run.next().value).to.be(0);
    expect(run.next().value).to.be(-1);
    expect(run.next().value).to.be(-2);

    run = negs();

    expect(run.next().value).to.be(0);
    expect(run.next().value).to.be(-1);
    expect(run.next().value).to.be(-2);
  });

});
