(function (context){

    var controllerName = ''
    var actionName = ''
    var params = {}

    context.createLocation = function (options) {

        controllerName = options.controller
        actionName = options.action
        params = options.params

        return {
            getControllerName: function() {
                return controllerName
            },

            getActionName: function() {
                return actionName
            },

            getParams: function() {
                return params
            }
        }
    }

})(this)