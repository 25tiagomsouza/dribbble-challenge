'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
angular
  .module('appApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngResource'
  ])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {
    var accessToken = '61d9c13fd5d8d884e64a856a9d1c477f088079a4205f79e500da6c0bd10f4821';
    $httpProvider.defaults.headers.common.Authorization = 'Bearer ' + accessToken;
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/shot/:id', {
        templateUrl: 'views/shotctrl.html',
        controller: 'ShotCtrl',
        controllerAs: 'shotCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
