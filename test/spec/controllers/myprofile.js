'use strict';

describe('Controller: MyprofileCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var MyprofileCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyprofileCtrl = $controller('MyprofileCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MyprofileCtrl.awesomeThings.length).toBe(3);
  });
});
