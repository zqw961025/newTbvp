$(document).ready(function(){
    $.ajax({
        url: "getTopScene",
        type: "GET",
        data:{},
        cache:false,
        dataType: "json",
        success: function(data){
            var i =0;
            var a1 = data["topScene"][0].sceneName;
            $("#a1").text(a1);
            var p1 = data["topScene"][0].scenePlace;
            $("#p1").text(p1);
            var d1 = data["topScene"][0].sceneDesc;
            $("#d1").text(d1);
            var a2 = data["topScene"][1].sceneName;
            $("#a2").text(a2);
            var p2 = data["topScene"][1].scenePlace;
            $("#p2").text(p2);
            var d2 = data["topScene"][1].sceneDesc;
            $("#d2").text(d2);
            var a3 = data["topScene"][2].sceneName;
            $("#a3").text(a3);
            var p3 = data["topScene"][2].scenePlace;
            $("#p3").text(p3);
            var d3 = data["topScene"][2].sceneDesc;
            $("#d3").text(d3);
        },
        error:function(err){
        }
    });
});