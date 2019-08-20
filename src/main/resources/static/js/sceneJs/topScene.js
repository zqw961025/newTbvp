$(document).ready(function(){
    $.ajax({
        url: "topScene",
        type: "GET",
        data:{},
        cache:false,
        dataType: "json",
        success: function(data){
            var a1 = data['sceneInfo'][0].sceneName;
            $("#a1").text(a1);
            var p1 = data['sceneInfo'][0].sceneCity;
            $("#p1").text(p1);
            var d1 = data['sceneInfo'][0].sceneDesc;
            $("#d1").text(d1);
            var e1 = data['sceneInfo'][0].sceneLevel;
            $("#e1").text(e1);
            var a2 = data['sceneInfo'][1].sceneName;
            $("#a2").text(a2);
            var p2 = data['sceneInfo'][1].sceneCity;
            $("#p2").text(p2);
            var d2 = data['sceneInfo'][1].sceneDesc;
            $("#d2").text(d2);
            var e2 = data['sceneInfo'][1].sceneLevel;
            $("#e2").text(e2);
            var a3 = data['sceneInfo'][2].sceneName;
            $("#a3").text(a3);
            var p3 = data['sceneInfo'][2].sceneCity;
            $("#p3").text(p3);
            var d3 = data['sceneInfo'][2].sceneDesc;
            $("#d3").text(d3);
            var e3 = data['sceneInfo'][2].sceneLevel;
            $("#e3").text(e3);

        },
        error:function(err){
        }
    });
});