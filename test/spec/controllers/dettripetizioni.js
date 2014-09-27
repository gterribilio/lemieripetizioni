'use strict';

describe('Controller: DettripetizioniCtrl', function () {

  // load the controller's module
  beforeEach(module('lemieripetizioniApp'));

  var DettripetizioniCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DettripetizioniCtrl = $controller('DettripetizioniCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
