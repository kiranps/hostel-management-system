'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:BatchdetailCtrl
 * @description
 * # BatchdetailCtrl
 * Controller of the yeomanApp
 */

angular.module('yeomanApp')
.controller('BatchdetailCtrl', function ($scope, $routeParams, $location, diskdb, share) {

  $scope.init = function() {
    diskdb.connect('data','index');
    console.log("init");
    batchDetails();
    var path = 'data/' + $scope.batch.course;
    var year = $scope.batch.year;
    diskdb.connect(path, year);
    $scope.students = diskdb.find(year);
  }

  function batchDetails() {
    var query = {
      _id: $routeParams.batch
    };
    var batch = diskdb.findOne('index', query);
    $scope.batch = batch;
    share.batch = batch;
  };

  $scope.go = function ( path ) {
    $location.path( path );
  };

  //remove batch
  $scope.clickOk = function() {
    var query = {
      _id: $routeParams.batch
    };
    diskdb.remove('index', query);
    $location.path( '/batchlist' );
    $("#myModal").modal('hide');
  };

  $scope.init();
});
