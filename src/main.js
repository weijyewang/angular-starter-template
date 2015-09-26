/**
 * Created by Wei-Jye on 5/24/2015.
 */
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
            'ngMaterial': 'libs/angular-material/angular-material.min'
        },
        shim: {
            ngAnimate: {
                deps: ['angular'],
                exports: 'angular'
            },
            ngAria: {
                deps: ['angular'],
                exports: 'angular'
            },
            ngCookies: {
                deps: ['angular'],
                exports: 'angular'
            },
            ngResource: {
                deps: ['angular'],
                exports: 'angular'
            },
            ngProgress: {
                deps: ['angular'],
                exports: 'angular'
            },
            ngMaterial: {
                deps: ['angular', 'ngAnimate', 'ngAria'],
                exports: 'angular'
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
