$(document).ready(function(){
    $.ajax({
        url: "getTopRoute",
        type: "GET",
        data:{},
        cache:false,
        dataType: "json",
        success: function(data){
            var i =0;
            var h1 = data["topRoute"][0].routeCitys;
            $("#h1").text(h1);
            var s1 = data["topRoute"][0].routePrice;
            $("#s1").text(s1);
            var h2 = data["topRoute"][1].routeCitys;
            $("#h2").text(h2);
            var s2 = data["topRoute"][1].routePrice;
            $("#s2").text(s2);
            var h3 = data["topRoute"][2].routeCitys;
            $("#h3").text(h3);
            var s3 = data["topRoute"][2].routePrice;
            $("#s3").text(s3);

        },
        error:function(err){
        }
    });
});