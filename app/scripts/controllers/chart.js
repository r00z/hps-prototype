'use strict';

angular.module('hpsApp')
    .controller('ChartCtrl', function ($scope, Chartservice) {
        var chart = nv.models.lineWithFocusChart();

        $scope.dt = new Date();
        $scope.dt2 = new Date();
        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'shortDate'];
        $scope.format = $scope.formats[0];

        $scope.open = function($event) {
           $event.preventDefault();
           $event.stopPropagation();

           $scope.opened = true;
         };

        $scope.open2 = function($event) {
           $event.preventDefault();
           $event.stopPropagation();

           $scope.opened2 = true;
         };

        $scope.dateOptions = {
          'year-format': "'yy'",
          'starting-day': 1,
          'show-button-bar':false
        };

        nv.addGraph(function () {
            chart.xAxis
                .tickFormat(d3.format(',f'));
            chart.x2Axis
                .tickFormat(d3.format(',f'));

            chart.yAxis
                .tickFormat(d3.format(',.2f'));
            chart.y2Axis
                .tickFormat(d3.format(',.2f'));

            d3.select('#chart svg')
                .call(chart);

            nv.utils.windowResize(chart.update);

            return chart;
        });

        $scope.refreshData = function () {
            Chartservice.testData().then(function (data) {
                d3.select('#chart svg')
                    .datum(data.points);

                chart.update();
            }).catch(function (error) {
                console.log(error.message);
            });
        };

        $scope.refreshData();
    });