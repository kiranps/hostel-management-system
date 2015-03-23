'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:BilldetailCtrl
 * @description
 * # BilldetailCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')
.controller('BilldetailCtrl', function ($scope, diskdb, $routeParams) {


  //$scope.init = function() {
  //diskdb.connect('data','index');
  //var query = {
  //current: true
  //}
  //var batches = diskdb.find('index', query);
  //$scope.students = [];
  //for (var i in batches) {
  //var path = "data/" + batches[i].course;
  //var dbName = batches[i].year;
  //console.log(path+dbName);
  //diskdb.connect(path, dbName);
  //var stu = diskdb.find(dbName);
  //$scope.students =  $scope.students.concat(stu);
  //}
  //}

  //$scope.init();

  $scope.init = function() {
    diskdb.connect('data','index');
    var query = {
      _id: $routeParams.id
    }

    var bill = diskdb.findOne('index', query);
    var dbName = bill.date;
    console.log(batches);

    var path = "data/mess";
    diskdb.connect(path, dbName);
    query = {
      type: "batches"
    }
    var batches = diskdb.findOne(dbName, query).batches;

    $scope.students = [];
    for (var i in batches) {
      var path = "data/" + batches[i].course;
      var dbName = batches[i].year;
      console.log(path+dbName);
      diskdb.connect(path, dbName);
      var stu = diskdb.find(dbName);
      $scope.students =  $scope.students.concat(stu);
    }
  }

  $scope.init();

  $scope.hostels = [
    {
    group: "1",
    mess: "95",
    misc: "20",
    water: "20",
    electricity: "20"
  },
  {
    group: "2",
    mess: "95",
    misc: "20",
    water: "20",
    electricity: "20"
  },
  {
    group: "3",
    mess: "95",
    misc: "20",
    water: "20",
    electricity: "20"
  },
  {
    group: "4",
    mess: "95",
    misc: "20",
    water: "20",
    electricity: "20"
  }
  ];
});
