	//二级导航
	$('.subnav li').click(function(){
		$(this).addClass('cbttom').siblings().removeClass('cbttom');
	})
	
     //换一换
    $(".changes").click(function(){
        $(this).parents(".desc").siblings().toggle();	
       
    })
    
    //price效果
    $('.price').hover(function(){
    	
    	$(this).children('p').css({"margin-top":"-40px","height":"100px","background":"white"});
    },
     function(){
     
    	$(this).children('p').css({"margin-top":"0px","height":"50px"});
     }
    )