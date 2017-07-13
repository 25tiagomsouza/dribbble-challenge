'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:ShotctrlCtrl
 * @description
 * # ShotctrlCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('ShotCtrl', function ($scope, APIService, $routeParams) {
    let path = 'shots/'+$routeParams.id;
    $scope.shot = APIService.connect(path).get();
  });
