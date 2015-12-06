define(function(require) {
  'use strict';

  var homeModule = require('modules/home');
  homeModule.controller('HomeController', HomeController);

  HomeController.$inject = [];
  function HomeController() {

  }
});