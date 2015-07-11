'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:StudentdetailCtrl
 * @description
 * # StudentdetailCtrl
 * Controller of the yeomanApp
 */

angular.module('yeomanApp')
.controller('StudentdetailCtrl', function ($scope, $routeParams, $location, diskdb, share) {

  $scope.init = function() {
    var path = 'data/' + share.batch.course;
    var year = share.batch.year; 
    var query = {
      _id: $routeParams.regno
    };
    diskdb.connect(path, year);
    $scope.student = diskdb.findOne(year, query);
    console.log($routeParams.regno);
    console.log($scope.student);
  }

  $scope.saveDetails = function() {
    var year = share.batch.year; 
    var query = {
      _id: $scope.student._id
    };
    var dataToBeUpdate = $scope.student;

    diskdb.update(year, query, dataToBeUpdate);
    alert("changes saved successfully");
  }

  $scope.deleteStudent = function() {
    var year = share.batch.year; 
    var query = {
      _id: $scope.student._id
    };
    diskdb.remove(year, query);
    alert("student deleted");
    $location.path( 'batchdetail/' + share.batch._id);
  }

  $scope.init();
});
