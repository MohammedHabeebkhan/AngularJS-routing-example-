
  /// <reference path="script.js" />

var app = angular.module('myapp');


app.service('CalcService', function() {
    console.log("tet")
    this.square = function(a) {
       return a*a;
    }
 });
