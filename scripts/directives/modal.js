'use strict';

/**
 * @ngdoc directive
 * @name yeomanApp.directive:modal
 * @description
 * # sam
 */
angular.module('yeomanApp')
.directive('modal', function () {
  return {
    scope: { 
      body: '@modalBody',
      btname: '@toggleButton',
      onClic: '&'
    },
    templateUrl: 'views/modal.html',
    restrict: 'E',
  };
});
