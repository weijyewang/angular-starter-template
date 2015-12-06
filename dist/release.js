define(function (require) {
  'use strict';

  var angular = require('angular');
  require('ngMaterial');
  require('uiRouter');

  angular.module('app', ['ngMaterial', 'ui.router']);
  var app = angular.module('app');
  app.config(appConfig);

  appConfig.$inject = ['$compileProvider', '$urlRouterProvider', '$stateProvider'];
  function appConfig($compileProvider, $urlRouterProvider, $stateProvider) {
    // Disable ng-scope to be generated in the html tag, make it more concise.
    $compileProvider.debugInfoEnabled(false);
    // For any unmatched url, redirect to home.
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'modules/home/home.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'modules/about/about.html'
      });
  }

  app.init = function () {
    // Bootstrap the app manually with Strict DI mode.
    angular.bootstrap(document, ['app'], {
      strictDi: true
    });
  };

  return app;
});
define(function(require) {
  'use strict';

  var angular = require('angular');

  angular.module('home', []);
  return angular.module('home');
});
define(function(require) {
  'use strict';

  var homeModule = require('modules/home');
  homeModule.controller('HomeController', HomeController);

  HomeController.$inject = [];
  function HomeController() {

  }
});