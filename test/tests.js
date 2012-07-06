var assert = require("assert")
var should = require("should")
var terse = require("../src/terse")


describe('terse', function(){

    describe('#createLocation', function() {

        describe('#getControllerName', function() {
            it('should return index', function() {
                var location = terse.createLocation({
                    'controller': 'index'
                })
                location.getControllerName().should.equal("index")
            })
        })

        describe('#getActionName', function() {
            it('should return get', function() {
                var location = terse.createLocation({
                    'action': 'get'
                })
                location.getActionName().should.equal('get')
            })
        })

        describe('#getParams', function() {
            it('should return params', function() {
                var params = {'test': 'bob'}
                var location = terse.createLocation({
                    'params': params
                })
                location.getParams().should.equal(params)
            })
        })
    })
})