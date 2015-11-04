$(document).ready(function(){
   debugger;
    var result=$('#result');
   var usrname= $('#reg_usr_name');
 var psswrd= $('#reg_pwd');
    
    $.ajax({
        type:'GET',
        url:"userdata.php",
        success:function(user){
            for (var i = 0; i < user.user.length; i++) {
        $result.append('userName:'+user.user[i].userName+"password"+user.user[i].password);
            }
        },
        error:function(){
            alert("error loading ");
        }
    });
    $('#new_reg').on("click", function(){
        debugger;
        var reg={
            userName: $usrname.val(),
            password: $psswrd.val()
        };
        $.ajax({
            type:'POST',
            url:"userdata.php",
            data:reg,
            success:function(reg){
                $('#result').append('userName:'+reg.userName+"password"+reg.password);
            },
            error:function(){
            alert("error saving ");
        }
            
        });
    });
});