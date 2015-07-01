//$("#loginform").parsley(option);
var app=angular.module('myApp',['ngRoute']);


app.config(['$routeProvider',function($routeProvider){


      $routeProvider
          .when('/',{
          templateUrl: 'pages/login.html',
          controller: 'home_controller'      
          })
          .when('/register',{
          templateUrl: 'pages/register.html',
          controller: 'register_controller'
          })
          .when('/home',{
          templateUrl: 'pages/home.html',
          controller: 'login_controller'
          });


}]);


