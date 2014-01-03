'use strict';

angular.module('hpsApp')
    .service('Chartservice', function ($http, $q) {

        this.testData = function () {
            var deferred = $q.defer();

            $http.get('/api/chart').
                success(function(data) {
                    deferred.resolve(data);
                }).
                error(function(error){
                    deferred.reject({message: 'Sorry, error occurred while getting data, please try again.'});
                });

            return deferred.promise;
        };
    });
