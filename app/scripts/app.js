'use strict';

angular.module('hpsApp', [
        'ngRoute',
        'ngMockE2E'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/chart', {
                templateUrl: 'views/chart.html',
                controller: 'ChartCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }).run(function ($httpBackend) {
        $httpBackend.whenGET('/api/chart').respond(function (method, url, data) {
            return [200, {registered: true, message: 'Thank you for signing up.'}];
        });

        $httpBackend.whenGET(/views\/.*/).passThrough();
    });
