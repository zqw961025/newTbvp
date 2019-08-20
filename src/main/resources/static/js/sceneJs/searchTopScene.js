$(document).ready(function(){
    $("#searchScene").click(function(){
        var sceneCity = $("#sceneCity").val();
        $.ajax({
            url: "searchTopScene",
            type: "GET",
            data:{
                sceneCity:sceneCity
            },
            cache:false,
            dataType: "json",
            success: function(data){
                var a1 = data['searchSceneInfo'][0].sceneName;
                $("#a1").text(a1);
                var p1 = data['searchSceneInfo'][0].sceneCity;
                $("#p1").text(p1);
                var d1 = data['searchSceneInfo'][0].sceneDesc;
                $("#d1").text(d1);
                var e1 = data['searchSceneInfo'][0].sceneLevel;
                $("#e1").text(e1);
                var a2 = data['searchSceneInfo'][1].sceneName;
                $("#a2").text(a2);
                var p2 = data['searchSceneInfo'][1].sceneCity;
                $("#p2").text(p2);
                var d2 = data['searchSceneInfo'][1].sceneDesc;
                $("#d2").text(d2);
                var e2 = data['searchSceneInfo'][1].sceneLevel;
                $("#e2").text(e2);
                var a3 = data['searchSceneInfo'][2].sceneName;
                $("#a3").text(a3);
                var p3 = data['searchSceneInfo'][2].sceneCity;
                $("#p3").text(p3);
                var d3 = data['searchSceneInfo'][2].sceneDesc;
                $("#d3").text(d3);
                var e3 = data['searchSceneInfo'][2].sceneLevel;
                $("#e3").text(e3);

                var p4 = data['searchSceneInfo'][3].sceneName;
                $("#p4").text(p4);
                var p5 = data['searchSceneInfo'][4].sceneName;
                $("#p5").text(p5);
                var p6 = data['searchSceneInfo'][5].sceneName;
                $("#p6").text(p6);
                var p7 = data['searchSceneInfo'][6].sceneName;
                $("#p7").text(p7);
                var p8 = data['searchSceneInfo'][7].sceneName;
                $("#p8").text(p8);
                var p9 = data['searchSceneInfo'][8].sceneName;
                $("#p9").text(p9);


            },
            error:function(err){
            }
        });

    });
});