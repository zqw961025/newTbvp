$(document).ready(function(){
    $.ajax({
        url: "getSession",
        type: "GET",
        data:{
        },
        cache:false,
        dataType: "json",
        success: function(data){
            var userID = data["userInfo"];
            if(data["userInfo"]==null){
                $.ajax({
                    url: "http://localhost:8080/Lfm/GetRecDataOfSceneByTop",
                    type: "GET",
                    data:{
                    },
                    cache:false,
                    dataType: "json",
                    success: function(data){
                        var p10= data["scenes"][0].sceneName;
                        $("#p10").text(p10);
                        var img10 = data["scenes"][0].sceneImg;
                        $("#img10")[0].src = img10;

                        var p11= data["scenes"][1].sceneName;
                        $("#p11").text(p11);
                        var img11 = data["scenes"][1].sceneImg;
                        $("#img11")[0].src = img11;

                        var p12= data["scenes"][2].sceneName;
                        $("#p12").text(p12);
                        var img12 = data["scenes"][2].sceneImg;
                        $("#img12")[0].src = img12;

                        var p13= data["scenes"][3].sceneName;
                        $("#p13").text(p13);
                        var img13 = data["scenes"][3].sceneImg;
                        $("#img13")[0].src = img13;

                        var p14= data["scenes"][4].sceneName;
                        $("#p14").text(p14);
                        var img14 = data["scenes"][4].sceneImg;
                        $("#img14")[0].src = img14;

                        var p15= data["scenes"][5].sceneName;
                        $("#p15").text(p15);
                        var img15 = data["scenes"][5].sceneImg;
                        $("#img15")[0].src = img15;

                    },
                    error:function(err){
                    }
                });
            }
            else {
                $("#er").text("");
                $.ajax({
                    url: "http://localhost:8080/Lfm/GetRecDataOfScene",
                    type: "GET",
                    data:{
                        userID:userID
                    },
                    cache:false,
                    dataType: "json",
                    success: function(data){
                        var p10= data["scenes"][0].sceneName;
                        $("#p10").text(p10);
                        var img10 = data["scenes"][0].sceneImg;
                        $("#img10")[0].src = img10;

                        var p11= data["scenes"][1].sceneName;
                        $("#p11").text(p11);
                        var img11 = data["scenes"][1].sceneImg;
                        $("#img11")[0].src = img11;

                        var p12= data["scenes"][2].sceneName;
                        $("#p12").text(p12);
                        var img12 = data["scenes"][2].sceneImg;
                        $("#img12")[0].src = img12;

                        var p13= data["scenes"][3].sceneName;
                        $("#p13").text(p13);
                        var img13 = data["scenes"][3].sceneImg;
                        $("#img13")[0].src = img13;

                        var p14= data["scenes"][4].sceneName;
                        $("#p14").text(p14);
                        var img14 = data["scenes"][4].sceneImg;
                        $("#img14")[0].src = img14;

                        var p15= data["scenes"][5].sceneName;
                        $("#p15").text(p15);
                        var img15 = data["scenes"][5].sceneImg;
                        $("#img15")[0].src = img15;
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