'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:BillfullCtrl
 * @description
 * # BillfullCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')
  .controller('BillfullCtrl', function ($scope, $routeParams, $location) {

    $scope.regno = $routeParams.regno;

    $scope.go = function ( path ) {
      $location.path( path );
    };

    $scope.bills = [
      {
        id: "123",
        date: "jan 2014",
        mess: "A",
        cost: "3000",
        status: "not paid"
      },
      {
        id: "132",
        date: "feb 2014",
        mess: "A",
        cost: "1000",
        status: "not paid"
      },
      {
        id: "13",
        date: "mar 2014",
        mess: "B",
        cost: "2000",
        status: "paid"
      },
      {
        id: "12",
        date: "apr 2014",
        mess: "B",
        cost: "3030",
        status: "paid"
      }
    ];
  });
