'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:BillmonthwiseCtrl
 * @description
 * # BillmonthwiseCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')
.controller('BillmonthwiseCtrl', function ($scope, $location, diskdb) {

  $scope.go = function ( path ) {
    $location.path( path );
  };

  $scope.init = function() {
    diskdb.connect('data', 'index');
    var bill = {
      type: "bill"
    };
    $scope.dates = diskdb.find('index', bill);
  };

  $scope.init();
});
