'use strict';

/**
 * @ngdoc service
 * @name diskApp.diskdb
 * @description
 * # diskdb
 * Factory in the diskApp.
 */

angular.module('yeomanApp')
.factory('diskdb', function () {

  var db = require('./node_modules/diskdb');

  // Public API here
  return {
    connect: function (dir, dbname) {
      db.connect(dir, [dbname]);
    },
    save: function(dbname, object) {
      db[dbname].save(object);
    },
    update: function(dbname, query, dataToBeUpdate, options) {
      db[dbname].update(query, dataToBeUpdate, options);
    },
    find: function(dbname, query) {
      return db[dbname].find(query);
    },
    findOne: function(dbname, query) {
      return db[dbname].findOne(query);
    },
    remove: function(dbname, query) {
      db[dbname].remove(query, false);
    }
  };
});
