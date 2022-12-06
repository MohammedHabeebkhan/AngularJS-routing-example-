

var app = angular.module('myapp');

app.controller('homeCtrl',
  function ($scope, CalcService) {
    $scope.items = [{ name: 'Mohammed', email: 'mohammed@gmail.com' }, { name: "Habeeb", email: 'Habeeb@gmail.com' }, { name: "Khan", email: 'Khan@gmail.com' }];

    //   $scope.square = function () {
    //     $scope.result = myServ.square($scope.number);

    //  }

    // $scope.oprationFun = function(input){
    // $scope.output = CalcService.square(input);

    // }

    $scope.squarew = function (input) {
      console.log($scope.input)
      $scope.output = CalcService.square(input);
    }


  }


);



