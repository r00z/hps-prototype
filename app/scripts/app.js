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

        function stream_index(d, i) {
            return {x: i, y: Math.max(0, d)};
        }

        function stream_layers(n, m, o) {
            if (arguments.length < 3) o = 0;

            function bump(a) {
                var x = 1 / (0.1 + Math.random()),
                    y = 2 * Math.random() - 0.5,
                    z = 10 / (0.1 + Math.random());
                for (var i = 0; i < m; i++) {
                    var w = (i / m - y) * z;
                    a[i] += x * Math.exp(-w * w);
                }
            }

            return d3.range(n).map(function () {
                var a = [], i;
                for (i = 0; i < m; i++) a[i] = o + o * Math.random();
                for (i = 0; i < 5; i++) bump(a);
                return a.map(stream_index);
            });
        }

        function getPoints() {
            return stream_layers(3, 128, 0.1).map(function (data, i) {
                return {
                    key: 'Stream' + i,
                    values: data
                };
            });
        }

        $httpBackend.whenGET('/api/chart').respond(function (method, url, data) {
            return [200, {points: getPoints()}];
        });

        $httpBackend.whenGET(/views\/.*/).passThrough();
    });
