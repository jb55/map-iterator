'use strict';

let nats = require('naturals');
let expect = require('expect.js');
let map = require('./');

describe('map-iterator', function(){
  it('generator function doesnt work', function(){
    expect(function(){
      let run = map(nats, function(x) { return -x; });

      expect(run.next().value).to.be(0);
      expect(run.next().value).to.be(-1);
      expect(run.next().value).to.be(-2);
    }).to.throwException(function(e){
      expect(e).to.be.a(TypeError);
    });
  });

  it('iterator works', function(){
      let run = map(nats(), function(x) { return -x; });

      expect(run.next().value).to.be(0);
      expect(run.next().value).to.be(-1);
      expect(run.next().value).to.be(-2);
  });

});
