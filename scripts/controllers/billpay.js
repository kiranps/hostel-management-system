'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:BillpayCtrl
 * @description
 * # BillpayCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')
  .controller('BillpayCtrl', function ($scope, $location) {

    $scope.go = function ( path ) {
      $location.path( path );
    };

    $scope.students = [
    {
      name: "kiran",
      regno: "etalecs033",
      room: "A4",
      bill: "2800",
      status: "paid"
    },
    {
      name: "rony",
      regno: "etalecs033",
      room: "A4",
      bill: "2800",
      status: "not paid"
    },
    {
      name: "raigon",
      regno: "etalecs033",
      room: "A4",
      bill: "2800",
      status: "paid"
    },
    {
      name: "smith",
      regno: "etalecs033",
      room: "A4",
      bill: "2800",
      status: "not paid"
    }
    ];

    $scope.months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
  });
