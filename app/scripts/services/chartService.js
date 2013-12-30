'use strict';

angular.module('hpsApp')
    .service('Chartservice', ['$http', '$q', function ($http, $q) {
        var stream_index = function (d, i) {
            return {x: i, y: Math.max(0, d)};
        };

        var stream_layers = function (n, m, o) {
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
        };

        var getPoints = function () {
            return stream_layers(3, 128, 0.1).map(function (data, i) {
                return {
                    key: 'Stream' + i,
                    values: data
                };
            });
        };

        this.testData = function () {
            var deferred = $q.defer();
            $http.get('/api/chart').
                success(function(data) {
                    deferred.resolve({points: getPoints()});
                }).
                error(function(error){
                    deferred.resolve({message: 'Sorry, error occurred while signing up, please try again.'});
                });

            return deferred.promise;
        };

    }]);
