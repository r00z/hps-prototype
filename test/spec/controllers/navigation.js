'use strict';

describe('Controller: NavbarController', function () {

    // load the controller's module
    beforeEach(module('hpsApp'));

    var NavbarController,
        scope;

    // Initialize the controller and a mock scope.
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        NavbarController = $controller('NavbarController', {
            $scope: scope
        });
    }));

//  it('should attach a list of awesomeThings to the scope', function () {
//    expect(scope.awesomeThings.length).toBe(3);
//  });
});
