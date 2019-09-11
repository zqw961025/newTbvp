$(document).ready(function(){
    $("#login").click(function(){
        var userName = $("#username").val();
        var password = $("#password").val();
        $.ajax({
            url: "login",
            type: "GET",
            data:{
                userName:userName,
                password:password,
            },
            cache:false,
            dataType: "json",
            success: function(data){
                alert(data["loginInfo"]);
                if(data["loginInfo"]=='登录失败'){
                    alert("账号或密码错误");
                }else{
                    window.location.href="index";
                }

            },
            error:function(err){
            }
        });

    });
});