$(document).ready(function(){
    $("#recommend").click(function(){
        $.ajax({
            url: "getSession",
            type: "GET",
            data:{
            },
            cache:false,
            dataType: "json",
            success: function(data){
                // alert("111");
                // alert(data["userInfo"]);
                var userID = data["userInfo"];
                if(data["userInfo"]==null){
                    alert("你尚未为登录，请先登录")
                    window.location.href="loginIndex";
                }
                else {
                    $.ajax({
                        url: "http://localhost:8080/Lfm/GetRecDataOfRoute",
                        type: "GET",
                        data:{
                            userID:userID
                        },
                        cache:false,
                        dataType: "json",
                        success: function(data){
                            // alert(data["routes"][0].routeCitys);
                            var dt5 = data["routes"][0].routeCitys;
                            $("#dt5").text(dt5);
                            var dd5 = data["routes"][0].routeName;
                            $("#dd5").text(dd5);
                            var i5 = data["routes"][0].routePrice+"元";
                            $("#i5").text(i5);

                            var dt6 = data["routes"][1].routeCitys;
                            $("#dt6").text(dt6);
                            var dd6 = data["routes"][1].routeName;
                            $("#dd6").text(dd6);
                            var i6 = data["routes"][1].routePrice+"元";
                            $("#i6").text(i6);

                            var dt7 = data["routes"][2].routeCitys;
                            $("#dt7").text(dt7);
                            var dd7 = data["routes"][2].routeName;
                            $("#dd7").text(dd7);
                            var i7 = data["routes"][2].routePrice+"元";
                            $("#i7").text(i7);

                            var dt8 = data["routes"][3].routeCitys;
                            $("#dt8").text(dt8);
                            var dd8 = data["routes"][3].routeName;
                            $("#dd8").text(dd8);
                            var i8 = data["routes"][3].routePrice+"元";
                            $("#i8").text(i8);
                        },
                        error:function(err){
                        }
                    });
                }

            },
            error:function(err){
            }
        });
    });
});