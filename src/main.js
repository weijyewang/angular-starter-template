(function() {
  'use strict';

  require.config({
    paths: {
      'angular' : 'libs/angular/angular.min',
      'ngAnimate': 'libs/angular/angular-animate.min',
      'ngAria': 'libs/angular/angular-aria.min',
      'ngCookies': 'libs/angular/angular-cookies.min',
      'ngResource': 'libs/angular/angular-resource.min',
      'ngProgress': 'libs/ngProgress/ngProgress.min',
      'ngMaterial': 'libs/angular-material/angular-material.min',
      'uiRouter': 'libs/ui-router/angular-ui-router.min'
    },
    shim: {
      ngAnimate: {
        deps: ['angular']
      },
      ngAria: {
        deps: ['angular']
      },
      ngCookies: {
        deps: ['angular']
      },
      ngResource: {
        deps: ['angular']
      },
      ngProgress: {
        deps: ['angular']
      },
      ngMaterial: {
        deps: ['angular', 'ngAnimate', 'ngAria']
      },
      uiRouter: {
        deps: ['angular']
      },
      angular: {
        exports : 'angular'
      }
    },
    baseUrl: ''
  });

  require(['app'], function (app) {
    app.init();
  });
})();
