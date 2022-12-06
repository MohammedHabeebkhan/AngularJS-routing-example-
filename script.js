(function(){
  
    var myapp = angular.module('myapp', ["ui.router"]);
    
      myapp.config(function($stateProvider, $urlRouterProvider){
        
        // For any unmatched url, send to /route1
        $urlRouterProvider.otherwise("/home")
        
        $stateProvider
          .state('route1', {
            url: "/home",
            templateUrl: "home.html",
            controller: "homeCtrl"
          })
            
            
          .state('route2', {
            url: "/aboutUs",
            templateUrl: "aboutUs.html",
            controller: "route2ctrl"
          })
      });
    
    })();
    
  