function login(){
            var un=$('#usr').val();
            var pw=$('#pwd').val();
    var flag=0;
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
                   flag=1;
                      break;
                  }
                }if(flag===1){
                    return true;
                    
                }
                    else{
                    alert('Login was unsuccessful, please check your username and password');
                      return false;
                  }
            })
            .error(function(status, response){
                alert('text error');
            });
         

};