var myappController=angular.module('myappController',[]);
app.controller('main_controller',function($scope){

      $scope.message="Hello world";

});
app.controller('home_controller',function($scope){

      $scope.message="Hello world";

});
app.controller('login_controller',function($scope){

 function login(){
            var un=$('#usr').val();
            var pw=$('#pwd').val();
//        var username = "kaushik"; 
//        var password = "12345";
  $.ajax({
                url: 'userdata.php',
                type: "GET",
                dataType: "json",
                async: false
            })  
        
            .success( function(user) {
debugger;
                console.log(user);
                for (var i = 0; i < user.user.length; i++) {
debugger;
                  if(un===user.user[i].userName && pw===user.user[i].password){
                   return true;
                  }else{
                    alert('Login was unsuccessful, please check your username and password');
                      return false;
                  }
                }
            })
            .error(function(status, response){
                alert('text error');
            });
         

};
});
app.controller('register_controller',function($scope){

//  $scope.name = 'register_controller';
//  scope.getUser().then(function(user) {
//    $scope.user = user;
//  });
// 
//  $scope.$on('handleSharedBooks', function(events, books) {
//    $scope.books = books;
//  });
// 
////  handling the submit button for the form
//  $scope.userRegistration = function(user) {
//    $params = $.param({
//      "userName": user.username,
//      "emailId": user.useremailId,
//      "contactNo": user.usercntactNo,
//        "password":user.userpassword
//    })
//    scope.saveUserdata($params);
//  }
//});
//
});
app.controller('home_controller',function(){
    debugger;
     $(document).ready(function(){

  $.ajax({
                url: 'userdata.php',
                type: "GET",
                dataType: "json",
                async: false
            })  
            .success( function(user) {
//debugger;
                console.log(user);
                for (var i = 0; i < user.user.length; i++) {
//debugger;
                  $('#post_').append('<blockquote><dl><dt>'+user.user[i].userName+'</dt><dd>' + user.user[i].post + '</dd></dl><footer><img src="" alt="like"/>'+' '+'<img src="" alt="comment"/>'+ '</footer></blockquote>');
                }
            })
            .error(function(status, response){
                alert('text error');
            });
         
        
         
//           $.ajax({
//                url: 'post.json',
//                type: "POST",
//                dataType: "json",
//                async: false
//            })  
//            .success( function(post) {
//debugger;
//                $('#btn_post').click(function(){
//            var getpost=$('#usr-post').val();
//         });
//                console.log(getpost);
//                
//            })
//            .error(function(status, response){
//                alert('text error');
//            });
         
         
});
});
app.controller('sidebar_controller',function($scope){

      $scope.message="Hello world";

});