'use strict';

/**
 * @ngdoc overview
 * @name yeomanApp
 * @description
 * # yeomanApp
 *
 * Main module of the application.
 */
angular
  .module('yeomanApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/billpay', {
        templateUrl: 'views/billpay.html',
        controller: 'BillpayCtrl'
      })
      .when('/billfull/:regno', {
        templateUrl: 'views/billfull.html',
        controller: 'BillfullCtrl'
      })
      .when('/batchlist', {
        templateUrl: 'views/batchlist.html',
        controller: 'BatchlistCtrl'
      })
      .when('/batchdetail/:batch', {
        templateUrl: 'views/batchdetail.html',
        controller: 'BatchdetailCtrl'
      })
      .when('/studentdetail/:regno', {
        templateUrl: 'views/studentdetail.html',
        controller: 'StudentdetailCtrl'
      })
      .when('/addstudent', {
        templateUrl: 'views/addstudent.html',
        controller: 'AddstudentCtrl'
      })
      .when('/addbatch', {
        templateUrl: 'views/addbatch.html',
        controller: 'AddbatchCtrl'
      })
      .when('/billmonthwise', {
        templateUrl: 'views/billmonthwise.html',
        controller: 'BillmonthwiseCtrl'
      })
      .when('/addbill', {
        templateUrl: 'views/addbill.html',
        controller: 'AddbillCtrl'
      })
      .when('/billdetail/:id', {
        templateUrl: 'views/billdetail.html',
        controller: 'BilldetailCtrl'
      })
      .when('/showbill/:billid', {
        templateUrl: 'views/showbill.html',
        controller: 'ShowbillCtrl'
      })
      .when('/batchsettings', {
        templateUrl: 'views/batchsettings.html',
        controller: 'BatchsettingsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
