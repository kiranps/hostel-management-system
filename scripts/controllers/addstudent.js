'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AddstudentCtrl
 * @description
 * # AddstudentCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')
.controller('AddstudentCtrl', function ($scope, $location, diskdb, share) {
  $scope.addStudent = function() {
    var student = {
      name: $scope.name,
      regno: $scope.regno,
      room: $scope.room,
      branch: $scope.branch,
      phone: $scope.phone,
      hostel: $scope.hostel,
      mess: $scope.mess 
    };

    var course = share.batch.course;
    var year = share.batch.year;

    var path = "data/" + course;
    console.log(course+year);
    console.log(student);
    diskdb.connect(path, year);
    diskdb.save(year, student);
    alert("student added");
    $location.path( '/batchdetail/' + share.batch._id );
  }
});
