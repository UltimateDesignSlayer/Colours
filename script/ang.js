var angularStart = angularStart || {};

angularStart = {
    init: function () {
        this.controller();
    },
    dataModel: {
        title: 'Foobar',
        text: 'This is some text here.'
    },
    controller: function () {
        var that = this;

        var app = angular.module('textOutputter', []);

        app.controller('textController', function ($scope) {
            $scope.heading = that.dataModel.title;
            $scope.text = that.dataModel.text;
        });
    }
}

angularStart.init();