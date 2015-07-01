var myApp=angular.module('myapp',['ngRoute']);
//debugger;
myApp.config(function ($routeProvider){

    $routeProvider.
    when('/',{
        templateUrl:'index.html'
//        controller:'login_controller'
    }).
    when('/login',{
        templateUrl:'login.html'
//        controller:'login_controller'
    }).
    when('/register',{
        templateUrl:'register.html'
//        controller:'register_controller'
    
    });
});
myApp.controller('main_controller',['$scope',function($scope){
 $scope.message="hello world";
    
    
}]);
