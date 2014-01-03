'use strict';

describe('Controller: ChartCtrl', function () {

    // load the controller's module
    beforeEach(module('hpsApp'));

    var ChartCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();

        ChartCtrl = $controller('ChartCtrl', {
            $scope: scope,
            Chartservice: {}
        });

    }));

//    it('should attach a list of awesomeThings to the scope', function ($q, $rootScope) {
//        expect(scope.refreshData).toBeDefined();
//    });
});
