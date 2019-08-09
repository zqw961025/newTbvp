$(window).scroll(function(){
	var st = $(window).scrollTop();
	var st2 = $('footer').offset().top - $(window).height();
	var st3 = $('.zyx-l').height() - $(window).height();
	
	if(st<90){
		$('#zyx-rnav').removeClass('current')
		$('#zyx-rnav').addClass('zyx-rn');
		$('#zyx-rnav').removeClass('two');
	}else if(st>90 && st<st2){
		$('#zyx-rnav').removeClass('zyx-rn');
		$('#zyx-rnav').removeClass('current')
		$('#zyx-rnav').addClass('two');
	}else if(st>st2){
		$('#zyx-rnav').removeClass('zyx-rn');
		$('#zyx-rnav').removeClass('two');
		$('#zyx-rnav').addClass('current');
	}
})	
	
/*click事件*/
$('.nav-nlist li').eq(0).click(function(){
	console.log(111)
	$('html,body').stop().animate({'scrollTop':$('.zyx-txt h2').eq(0).offset().top},1000);
	$('.nav-nlist').children('i').eq(0).css('display','block');
	$('.nav-nlist').children('i').eq(0).siblings('i').css('display','none');
	$('.nav-nlist').children('span').eq(0).css('opacity','0');
	$('.nav-nlist').children('span').eq(0).siblings('span').css('opacity','1');
})
$('.nav-nlist li').eq(1).click(function(){
	$('html,body').stop().animate({'scrollTop':$('section').eq(0).children('h3').offset().top},1000)
	$('.nav-nlist').children('i').eq(1).css('display','block');
	$('.nav-nlist').children('i').eq(1).siblings('i').css('display','none');
})
$('.nav-nlist li').eq(2).click(function(){
	$('html,body').stop().animate({'scrollTop':$('section').eq(1).children('h3').offset().top},1000)
	$('.nav-nlist').children('i').eq(2).css('display','block');
	$('.nav-nlist').children('i').eq(2).siblings('i').css('display','none');
})
$('.nav-nlist li').eq(3).click(function(){
	$('html,body').stop().animate({'scrollTop':$('section').eq(2).children('h3').offset().top},1000)
	$('.nav-nlist').children('i').eq(3).css('display','block');
	$('.nav-nlist').children('i').eq(3).siblings('i').css('display','none');
})
$('.nav-nlist li').eq(4).click(function(){
	$('html,body').stop().animate({'scrollTop':$('section').eq(3).children('h3').offset().top},1000)
	$('.nav-nlist').children('i').eq(4).css('display','block');
	$('.nav-nlist').children('i').eq(4).siblings('i').css('display','none');
})
$('.nav-nlist li').eq(5).click(function(){
	$('html,body').stop().animate({'scrollTop':$('.zyx-txt h2').eq(1).offset().top},1000)
	$('.nav-nlist').children('i').eq(5).css('display','block');
	$('.nav-nlist').children('i').eq(5).siblings('i').css('display','none');
	$('.nav-nlist').children('span').eq(1).css('opacity','0');
	$('.nav-nlist').children('span').eq(1).siblings('span').css('opacity','1');
})
$('.nav-nlist li').eq(6).click(function(){
	$('html,body').stop().animate({'scrollTop':$('section').eq(4).children('h3').offset().top},1000)
	$('.nav-nlist').children('i').eq(6).css('display','block');
	$('.nav-nlist').children('i').eq(6).siblings('i').css('display','none');
})
$('.nav-nlist li').eq(7).click(function(){
	$('html,body').stop().animate({'scrollTop':$('section').eq(5).children('h3').offset().top},1000)
	$('.nav-nlist').children('i').eq(7).css('display','block');
	$('.nav-nlist').children('i').eq(7).siblings('i').css('display','none');
})
$('.nav-nlist li').eq(8).click(function(){
	$('html,body').stop().animate({'scrollTop':$('.zyx-txt h2').eq(2).offset().top},1000)
	$('.nav-nlist').children('i').eq(8).css('display','block');
	$('.nav-nlist').children('i').eq(8).siblings('i').css('display','none');
	$('.nav-nlist').children('span').eq(2).css('opacity','0');
	$('.nav-nlist').children('span').eq(2).siblings('span').css('opacity','1');
})
$('.nav-nlist li').eq(9).click(function(){
	$('html,body').stop().animate({'scrollTop':$('.zyx-txt h2').eq(3).offset().top},1000)
	$('.nav-nlist').children('i').eq(9).css('display','block');
	$('.nav-nlist').children('i').eq(9).siblings('i').css('display','none');
	$('.nav-nlist').children('span').eq(3).css('opacity','0');
	$('.nav-nlist').children('span').eq(3).siblings('span').css('opacity','1');
})
$('.nav-nlist li').eq(10).click(function(){
	$('html,body').stop().animate({'scrollTop':$('section').eq(8).children('h3').offset().top},1000)
	$('.nav-nlist').children('i').eq(10).css('display','block');
	$('.nav-nlist').children('i').eq(10).siblings('i').css('display','none');
})
$('.nav-nlist li').eq(11).click(function(){
	$('html,body').stop().animate({'scrollTop':$('section').eq(9).children('h3').offset().top},1000)
	$('.nav-nlist').children('i').eq(11).css('display','block');
	$('.nav-nlist').children('i').eq(11).siblings('i').css('display','none');
})
$('.nav-nlist li').eq(12).click(function(){
	$('html,body').stop().animate({'scrollTop':$('section').eq(10).children('h3').offset().top},1000)
	$('.nav-nlist').children('i').eq(12).css('display','block');
	$('.nav-nlist').children('i').eq(12).siblings('i').css('display','none');
})
$('.nav-nlist li').eq(13).click(function(){
	$('html,body').stop().animate({'scrollTop':$('section').eq(11).children('h3').offset().top},1000)
	$('.nav-nlist').children('i').eq(13).css('display','block');
	$('.nav-nlist').children('i').eq(13).siblings('i').css('display','none');
})
$('.nav-nlist li').eq(14).click(function(){
	$('html,body').stop().animate({'scrollTop':$('section').eq(12).children('h3').offset().top},1000)
	$('.nav-nlist').children('i').eq(14).css('display','block');
	$('.nav-nlist').children('i').eq(14).siblings('i').css('display','none');
})
$('.nav-nlist li').eq(15).click(function(){
	$('html,body').stop().animate({'scrollTop':$('section').eq(13).children('h3').offset().top},1000)
	$('.nav-nlist').children('i').eq(15).css('display','block');
	$('.nav-nlist').children('i').eq(15).siblings('i').css('display','none');
})
$('.nav-nlist li').eq(16).click(function(){
	$('html,body').stop().animate({'scrollTop':$('.zyx-txt h2').eq(4).offset().top},1000)
	$('.nav-nlist').children('i').eq(16).css('display','block');
	$('.nav-nlist').children('i').eq(16).siblings('i').css('display','none');
	$('.nav-nlist').children('span').eq(4).css('opacity','0');
	$('.nav-nlist').children('span').eq(4).siblings('span').css('opacity','1');
})	
