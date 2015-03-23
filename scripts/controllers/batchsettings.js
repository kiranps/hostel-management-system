'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:BatchsettingsCtrl
 * @description
 * # BatchsettingsCtrl
 * Controller of the yeomanApp
 */

angular.module('yeomanApp')
.controller('BatchsettingsCtrl', function ($scope, $location, diskdb, _) {

  $scope.init = function() {
    diskdb.connect('data','index');
    var batch = {
      type: "batch"
    };
    $scope.batches = diskdb.find('index', batch);
  }

  $scope.init();

  $scope.go = function ( path ) {
    $location.path( path );
  };

  $scope.saveChanges = function() {
    var batches = $scope.batches;
    for(var i in batches) {
      var query = {
        _id: batches[i]._id
      };
      var dataToBeUpdate  = {
        current: batches[i].current
      };
      console.log(dataToBeUpdate._id+" "+query.current);
      diskdb.update('index', query, dataToBeUpdate);
    }
  }
});
