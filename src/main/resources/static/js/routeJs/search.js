$(document).ready(function(){
    $("#search").click(function(){
        var start = $("#start").val();
        var stop = $("#stop").val();
        var startDay = $("#startDay").val();
        var stopDay = $("#stopDay").val();
        $.ajax({
            url: "searchRoute",
            type: "GET",
            data:{
                start:start,
                stop:stop,
                startDay:startDay,
                stopDay:stopDay
            },
            cache:false,
            dataType: "json",
            success: function(data){
                var dt1 = data["finalRoutes"][0].routeCitys;
                $("#dt1").text(dt1);
                var dd1 = data["finalRoutes"][0].routeName;
                $("#dd1").text(dd1);
                var i1 = data["finalRoutes"][0].routeTime+"日游";
                $("#i1").text(i1);
                var dt2 = data["finalRoutes"][1].routeCitys;
                $("#dt2").text(dt2);
                var dd2 = data["finalRoutes"][1].routeName;
                $("#dd2").text(dd2);
                var i2 = data["finalRoutes"][1].routeTime+"日游";
                $("#i2").text(i2);;
                var dt3 = data["finalRoutes"][2].routeCitys;
                $("#dt3").text(dt3);
                var dd3 = data["finalRoutes"][2].routeName;
                $("#dd3").text(dd3);
                var i3 = data["finalRoutes"][2].routeTime+"日游";
                $("#i3").text(i3);
                var dt4 = data["finalRoutes"][3].routeCitys;
                $("#dt4").text(dt4);
                var dd4 = data["finalRoutes"][3].routeName;
                $("#dd4").text(dd4);
                var i4 = data["finalRoutes"][3].routeTime+"日游";
                $("#i4").text(i4);
            },
            error:function(err){
            }
        });

    });
});