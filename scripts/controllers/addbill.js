'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:AddbillCtrl
 * @description
 * # AddbillCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')
.controller('AddbillCtrl', function ($scope, diskdb, $location) {

  $scope.init = function() {
  }

  $scope.init();

  $scope.submit = function() {
    var path = "data";
    var dbName = "index";

    diskdb.connect(path, dbName);

    var query = {
      current: true
    }

    var presentBatches = diskdb.find('index', query);
    var batches = [];
    for (var i in presentBatches) {
      var batch = {
        course: presentBatches[i].course,
        year: presentBatches[i].year
      }
      batches = batches.concat(batch);
    }

    var bill = {
      type: "batches",
      date: $scope.date,
      batches: batches
    }; 

    var billIndex = {
      type: "bill",
      date: $scope.date,
    }

    if(_.isEmpty(diskdb.find(dbName, bill))) {
      diskdb.save(dbName, billIndex);
      var path2 = "data/mess";
      var dbName2 = $scope.date;
      diskdb.connect(path2, dbName2)
      diskdb.save(dbName2, bill);
      alert('bill added');
      $location.path( "/billmonthwise" );
    }
    else {
      alert('bill already exits');
    }
  }
});
