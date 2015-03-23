'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AddbatchCtrl
 * @description
 * # AddbatchCtrl
 * Controller of the yeomanApp
 */

angular.module('yeomanApp')
.controller('AddbatchCtrl', function ($scope, $location, diskdb) {
  $scope.init = function() {
    diskdb.connect('data','index');
  }

  $scope.init();

  $scope.createBatch = function() {
    var batch = {
      course: $scope.course,
      year: $scope.year,
      current: false,
      type: "batch"
    };

    if ( batch.course == null ) {
      alert("course cannot be empty");
    }
    else if( batch.year == null ) {
      alert("year cannot be empty");
    }
    else {
      if(_.isEmpty(diskdb.find('index', batch))) {
        diskdb.save('index', batch);
        alert('batch created');
        $location.path( '/batchlist' );
      }
      else {
        alert('batch already exists');
      }
    }
  }
});
