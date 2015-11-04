//$(document).ready(function(){
//
//  $.ajax({
//                url: 'post.json',
//                type: "GET",
//                dataType: "json",
//                async: false
//            })  
//            .success( function(post) {
//debugger;
//                console.log(post);
//                for (var i = 0; i < post.post.length; i++) {
//debugger;
//                  $('#post_').append('<div><p>' + post.post[i].post + '</p></div>');
//                }
//            })
//            .error(function(status, response){
//                alert('text error');
//            });
//});