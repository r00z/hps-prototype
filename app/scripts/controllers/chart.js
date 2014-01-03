'use strict';

angular.module('hpsApp')
    .controller('ChartCtrl', function ($scope, Chartservice) {
        var chart = nv.models.lineWithFocusChart();

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