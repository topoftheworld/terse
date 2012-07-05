var assert = require("assert")
var should = require("should")
var terse = require("../src/terse")

describe('terse', function(){

    describe('#sayWoot', function(){
        it('should return w00t', function() {
            assert.equal('w00t', terse.sayWoot())
        })
    })
})


/*
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      [1,2,3].indexOf(5).should.equal(-1);
      [1,2,3].indexOf(0).should.equal(-1);
    })
  })
})
*/