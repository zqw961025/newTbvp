var num=0;
var timer
/*滚动图片*/
function go(){
	timer=setInterval(function(){
		num++;
		if(num>5){
			num=0;
			$('.title-r ul').css({'left':-num*700+'px'});
			num=1;
		}
		if(num==5){
				$('ol li').eq(0).addClass('current');
				$('ol li').eq(0).children().addClass('current2');
				$('ol li').eq(0).siblings().removeClass('current');
				$('ol li').eq(0).siblings().children().removeClass('current2');
		}
		$('.title-r ul').animate({'left':-num*700+'px'},500);
		$('ol li').eq(num).addClass('current');
		$('ol li').eq(num).siblings().removeClass('current');
		$('ol li').eq(num).children().addClass('current2');
		$('ol li').eq(num).siblings().children().removeClass('current2');
	},2000)
}
go();
/*滚动图片 ol click事件*/
$('ol li').click(function(){
	num = $(this).index();
	$('.title-r ul').animate({'left':-num*700+'px'},500);
		$('ol li').eq(num).addClass('current');
		$('ol li').eq(num).siblings().removeClass('current');
		$('ol li').eq(num).children().addClass('current2');
		$('ol li').eq(num).siblings().children().removeClass('current2');
})
/*滚动图片鼠标悬停事件*/
$('.title-r').hover(function() {
	clearInterval(timer)
}, function() {
	go()
});

//title导航栏hover事件
$('.list>li').hover(function(){
	if(!$(this).children('ul').length) return;
	$(this).children('a').addClass('current');
	$(this).children('ul').show();
	$(this).children('span').addClass('current');
},function(){
	$(this).children('ul').hide();
	$(this).children('a').removeClass('current');
	$(this).children('span').removeClass('current');
})

//旅游攻略导航二级导航点击
var change = 0;
$('.navg').click(function(){
	if(change == 0){
		$(this).children('small').css('color','#FFA800');
		$(this).children().children().removeClass('nav-down1');
		$(this).children().children().addClass('nav-down2');
		$('.nav-scd').eq($(this).index()).css('display','block')
		change++;
	}else{
		$(this).children('small').css('color','#666666');
		$(this).children().children().addClass('nav-down1');
		$(this).children().children().removeClass('nav-down2');		
		$('.nav-scd').eq($(this).index()).css('display','none')
		change--;
	}
	
	
	
})


//文章hover事件
$('.r-con').hover(function(){
	$(this).css('background','#EEEEEE');
	$(this).children('.txt-r2').children('p').eq(0).css('color','#FFA800');
	$(this).children('.txt-r2-2').children('p').eq(0).css('color','#FFA800');
},function(){
	$(this).css('background','white');
	$(this).children('.txt-r2').children('p').eq(0).css('color','#666666');	
	$(this).children('.txt-r2-2').children('p').eq(0).css('color','#666666');	
})