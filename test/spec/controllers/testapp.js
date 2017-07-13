'use strict';

describe('Controller: TestappCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var TestappCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestappCtrl = $controller('TestappCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TestappCtrl.awesomeThings.length).toBe(3);
  });
});
