'use strict';

angular.module('hpsApp')
    .controller('ChartCtrl', ['$scope', 'Chartservice', function ($scope, chartservice) {
        var chart;

        $scope.refreshData = function () {
            d3.select('#chart svg')
              .datum(chartservice.testData());

            chart.update();
        };

        nv.addGraph(function () {
            chart = nv.models.lineWithFocusChart();
            // chart.transitionDuration(500);
            chart.xAxis
                .tickFormat(d3.format(',f'));
            chart.x2Axis
                .tickFormat(d3.format(',f'));

            chart.yAxis
                .tickFormat(d3.format(',.2f'));
            chart.y2Axis
                .tickFormat(d3.format(',.2f'));

            d3.select('#chart svg')
                .datum(chartservice.testData())
                .call(chart);

            nv.utils.windowResize(chart.update);

            return chart;
        });
    }]);