'use strict';

angular.module('hpsApp')
    .service('Chartservice', ['$http', '$q', function ($http, $q) {

        this.testData = function () {
            var deferred = $q.defer();

            $http.get('/api/chart').
                success(function(data) {
                    deferred.resolve(data);
                }).
                error(function(error){
                    deferred.resolve({message: 'Sorry, error occurred while signing up, please try again.'});
                });

            return deferred.promise;
        };
    }]);
