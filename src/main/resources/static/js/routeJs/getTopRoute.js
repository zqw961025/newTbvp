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
            var img1 = data["topRoute"][0].routeImg;
            $("#img1")[0].src = img1;

            var h2 = data["topRoute"][1].routeCitys;
            $("#h2").text(h2);
            var s2 = data["topRoute"][1].routePrice;
            $("#s2").text(s2);
            var img2 = data["topRoute"][1].routeImg;
            $("#img2")[0].src = img2;

            var h3 = data["topRoute"][2].routeCitys;
            $("#h3").text(h3);
            var s3 = data["topRoute"][2].routePrice;
            $("#s3").text(s3);
            var img3 = data["topRoute"][2].routeImg;
            $("#img3")[0].src = img3;

        },
        error:function(err){
        }
    });
});