'use strict';

/**
 * @ngdoc service
 * @name appApp.APIService
 * @description
 * # APIService
 * Factory in the appApp.
 */
angular.module('appApp')
.factory('APIService', function ($resource) {
    return {
      connect: function (params) {
        return $resource('https://api.dribbble.com/v1/'+params);
      }
    };
});
