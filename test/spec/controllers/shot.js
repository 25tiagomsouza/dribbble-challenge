'use strict';

describe('Controller: ShotctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var ShotctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShotctrlCtrl = $controller('ShotctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ShotctrlCtrl.awesomeThings.length).toBe(3);
  });
});
