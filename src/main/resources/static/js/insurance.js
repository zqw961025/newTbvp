   //二级导航
	$('.subnav li').click(function(){
		$(this).addClass('cbttom').siblings().removeClass('cbttom');
	})
	
	//轮播图
	var num=0;
	var timer;
	function show(){
		timer=setInterval(function(){
	     	num++;
	        if(num>2){
	        	num=0;
	        }
	        $('.change-pic li').eq(num).addClass('active').siblings().removeClass('active');
	        $('ol li').eq(num).addClass('current').siblings().removeClass('current');
        },2000)
	}
     show();
    
    //点击
    $('.round li').click(function(){
    	clearInterval(timer);
    	//把点击和自动轮播联系起来
    	num=$(this).index();
    	$(this).addClass('current').siblings().removeClass('current');
    	$('.change-pic li').eq(num).addClass('active').siblings().removeClass('active');
    })
    
    $('.top-pic').mouseenter(function(){
    	clearInterval(timer);
    })
     $('.top-pic').mouseleave(function(){
    	show();
    })