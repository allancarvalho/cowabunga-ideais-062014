'use strict';

describe('Controller: AcelerometerCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var AcelerometerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AcelerometerCtrl = $controller('AcelerometerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
