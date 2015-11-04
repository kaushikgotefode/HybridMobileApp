//$("#loginform").parsley(option);
var app=angular.module('myApp', ['ui.router']);

app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/login');
        $stateProvider
//            .state('welcome',{
//              url:'/welcome',
//              templateUrl: 'pages/welcome/_welcome.html'
//    //          controller: 'home_controller'      
//              })
              .state('login',{
              url:'/login',
              templateUrl: 'pages/login/_login.html',
                controller: 'login_controller'      
              })
              .state('register',{
              url:'/register',
              templateUrl: 'pages/register/_register.html'
              //controller: 'register_controller'
              })
              .state('home',{
              url:'/home',
              templateUrl: 'pages/home/_home.html',
                controller: 'home_controller'
    //         
              })
              .state('forgotPass',{
              url:'/forgot',
              templateUrl: 'pages/forgotpassword/_forgotPassword.html'
            //  controller: 'login_controller'
              })
              .state('sidebar',{
              url:'/sidebar',
              templateUrl: 'pages/_sidebar.html'
            //  controller: 'login_controller'
              });

});

