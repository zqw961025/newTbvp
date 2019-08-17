$(document).ready(function(){
    $("#searchScene").click(function(){
        var sceneCity = $("#sceneCity").val();
        $.ajax({
            url: "searchScene",
            type: "GET",
            data:{
                sceneCity:sceneCity
            },
            cache:false,
            dataType: "json",
            success: function(data){
                var p4 = data["scenes"][0].sceneName;
                $("#p4").text(p4);
                var p5 = data["scenes"][1].sceneName;
                $("#p5").text(p5);
                var p6 = data["scenes"][2].sceneName;
                $("#p6").text(p6);
                var p7 = data["scenes"][3].sceneName;
                $("#p7").text(p7);
                var p8 = data["scenes"][4].sceneName;
                $("#p8").text(p8);
                var p9 = data["scenes"][5].sceneName;
                $("#p9").text(p9);
            },
            error:function(err){
            }
        });

    });
});