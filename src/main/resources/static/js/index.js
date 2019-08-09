    var index = 0;
	var timer = null;
	var num = 0;
	//日期
	var date = new Date();
	$('.day').html(date.getDate())
    date = date.toDateString();
    var  m = date.slice(3,7);  
    $('.month').html(m);
    var y = date.slice(11,date.length)
    $('.year').html(y);
	//导航栏的hover
	$('.dropMenu').hover(function(){
		$('.dropdown').css('display','block');
	},function(){
		$('.dropdown').css('display','none');
	})
	$('.society').hover(function(){
		$('.drop-menu').css('display','block');
	},function(){
		$('.drop-menu').css('display','none');
	})
	//轮播图	
	$(".btn-list").click(function(){
		index = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".img-list").eq(index).fadeIn().siblings().fadeOut();
	})	
	//侧栏轮播图
	$(".btn-li").click(function(){
		index = $(this).index();
		$(this).addClass("slideBtn").siblings().removeClass("slideBtn");
		$(".pic-ul").animate({'left': -index*260+'px'});
	})
	function run(){
		timer = setInterval(function(){
			index++;
			if (index>4) {
				index=0;
			}
			$(".btn-list").eq(index).trigger("click");
			$('.btn-li').eq(index).trigger("click");			
		},2000)
	}
	run();
	$(".btn-list").click(function(){
		return false;
	})
	$(".btn-li").click(function(){
		return false;
	})
	$(".banner").mouseenter(function(){
		clearInterval(timer);
	})
	$('.banner').mouseleave(function(){
		run();
	})
	
	//搜索框	
	$('.search-list').click(function(){
		var index = 0;
		$(this).children("span").addClass('tab');
		$(this).siblings().children('span').removeClass('tab');
		index = $(this).index();
		$('.searchInput').eq(index).addClass('act').siblings().removeClass('act');
	})	    		    	
	//hover
	$(".hotTitle").hover(function(){	
		$(this).children("h3").stop().animate({"height":"80px"});
		$(this).css({"background":"rgb(248,248,248)",'color':'#FF9D00'});
		$(this).children('h3').css('background', 'rgb(248,248,248)');
	},function(){
		$(this).children("h3").stop().animate({"height":"40px"});
		$(this).css({"background":"#fff",'color':'#000'});
		$(this).children('h3').css('background', '#fff');
	})
	//热门推荐
	$('.hotNodes ul li').click(function(event) {
		 index = $(this).index();
		 $(this).addClass('hotCurrent').siblings().removeClass('hotCurrent');
		 $('.travelContent ul').eq(index).fadeIn(1000).siblings('.travelContent ul').fadeOut();
		 $('.paging a').eq(1).addClass('pageCurrent').siblings('a').removeClass('pageCurrent');
	});
	//筛选
	$('#screenBtn').click(function(e){
		$('.screen').fadeIn();	
		$('.screen').css('display','block');	
		e.stopPropagation();	
	})
	$(document).click(function(event) {
		 $('.screen').css('display','none');		
	})
	$('.screen').click(function(e){		
		e.stopPropagation();
	})
	//目的地搜索
	$('#searchBars').focus(function(){
		$(this).css('background','#fff');
		borderChange(this);
	})
	$('#searchBars').blur(function(){
		$(this).css('background','#efefef');
		borderNo(this);
	})
	console.log($('footer').offset().top)
	//回到顶部
	$(window).scroll(function(){
		var st = $(window).scrollTop();
		var st2 = $('footer').offset().top - $(window).height();
		var st3 = $('html body').height() - $(window).height();		
		if (st>=$('footer').offset().top-650) {
			$('#aside').removeClass('onekkk')
			$('#aside').addClass('twokkk');
			console.log(11111)
		}if(st<$('footer').offset().top-650){			
			$('#aside').addClass('onekkk')
			$('#aside').removeClass('twokkk');
		}
		if (st>=$(window).height()+100) {
			$('.backTop').fadeIn();
		}
		else{			
			$('.backTop').fadeOut();
		}
	})
	$('.backTop').click(function(){
		$('html,body').animate({'scrollTop':'0px'},2000);
	})
 //边框变色
   function borderChange(a){
    	$(a).css({'border':'1px solid #FF9D00','box-shadow':'0 0 4px #ffa800'});
   }
    function borderNo(a){
    	$(a).css({'border':'1px solid #ddd','box-shadow':'none'});
   }
    //分页
    $('.paging a').click(function(){
    	var a = $('.hotNodes').offset().top;
    	 index = $(this).index();
    	if(index>=1){
    		$('.prePage').css('display','inline-block');
    		$('html,body').animate({'scrollTop':a},2000);
    		$('.travelContent ul').eq(1).fadeIn(1000).siblings('.travelContent ul').fadeOut();
    	}
    	else{
    		$('.travelContent ul').eq(0).fadeIn(1000).siblings('.travelContent ul').fadeOut();
    	}
    	$(this).addClass('pageCurrent').siblings('a').removeClass('pageCurrent');
    })   
    $('.nextPage').click(function(){
    	num++;
    	if(num==9)num=0;
    	$('.paging a').eq(num).addClass('pageCurrent').siblings('a').removeClass('pageCurrent');
   
    })
    //qq wechat 
     $('.rightNav .spirit').hover(function(){
    	$(this).eq(0).addClass('Xl');
    },function(){
    	$(this).eq(0).removeClass('Xl');
    })
    $('.rightNav .qq').hover(function(){
    	$(this).addClass('qq2');
    },function(){
    	$(this).removeClass('qq2');
    })
    
      $('.rightNav .wechat').hover(function(){
    	$(this).addClass('wechat2');
    },function(){
    	$(this).removeClass('wechat2');
    })
    