'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:BatchlistCtrl
 * @description
 * # BatchlistCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')
.controller('BatchlistCtrl', function ($scope, $location, diskdb) {

  $scope.init = function() {
    diskdb.connect('data','index');
    var batch = {
      type: "batch",
      current: true
    }
    $scope.batches = diskdb.find('index', batch);
  }

  $scope.init();

  $scope.go = function ( path ) {
    $location.path( path );
  };
});
