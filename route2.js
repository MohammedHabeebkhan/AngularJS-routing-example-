(function () {

  var app = angular.module('myapp');

  app.controller('route2ctrl',
    function ($scope, CalcService) {
      $scope.items = [{ name: 'Syed', email: 'syed@gmail.com' }, { name: 'Omer', email: 'Omer@gmail.com' }, { name: 'Mohammed', email: 'test@gmail.com' }];

      $scope.squarew = function (input) {
        $scope.output = CalcService.square(input);
      }
    }
  );
})();