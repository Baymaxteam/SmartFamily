var simpleList = [{name: "Moroni", age: 50, money: 50} /*,*/];
(function() {
  "use strict";

  var app = angular.module("myApp", ["ngTable", "ngTableDemos"]);

  app.controller("demoController", demoController);
  demoController.$inject = ["NgTableParams", "ngTableSimpleList"];

  function demoController(NgTableParams, simpleList) {
    var self = this;
    self.tableParams = new NgTableParams({}, {
      dataset: simpleList
    });
  }
})();

