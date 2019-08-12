$(document).ready(function(){
    $("#search").click(function(){
        var start = $("#start").val();
        var stop = $("#stop").val();
        var startDay = $("#startDay").val();
        var stopDay = $("#stopDay").val();
        $.ajax({
            url: "searchRoute",
            type: "POST",
            data:{
                start:start,
                stop:stop,
                startDay:startDay,
                stopDay:stopDay
            },
            cache:false,
            dataType: "json",
            success: function(data){

            },
            error:function(err){
            }
        });

    });
});