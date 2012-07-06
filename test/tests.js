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
                assert.equal(location.getControllerName(), 'index')
            })
        })

        describe('#getActionName', function() {
            it('should return get', function() {
                var location = terse.createLocation({
                    'action': 'get'
                })
                assert.equal(location.getActionName(), 'get')
            })
        })

        describe('#getParams', function() {
            it('should return params', function() {
                var params = {'test': 'bob'}
                var location = terse.createLocation({
                    'params': params
                })

                assert.equal(params, location.getParams())
            })
        })
    })

})