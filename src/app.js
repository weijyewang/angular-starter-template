/**
 * Created by Wei-Jye on 5/24/2015.
 */
(function() {
    'use strict';
    define(function (require) {
        var angular = require('angular');
        var ngMaterial = require('ngMaterial');

        angular.module('app', ['ngMaterial']);
        var app = angular.module('app');

        app.init = function () {
            angular.bootstrap(document, ['app']);
        };

        app.config([
            function () {

            }
        ]);

        return app;
    });

})();