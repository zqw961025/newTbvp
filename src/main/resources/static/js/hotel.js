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
//搜索框
$('#search').focus(function(){
	borderChange(this);
	$(this).animate({'width':'382px'});
	$(this).css('background','#fff')
	$(this).siblings('.find').addClass('findTwo');
})
$('#search').blur(function(){
	borderNo(this);
	$(this).animate({'width':'130px'});
	$(this).css('background','#efefef')
	$(this).siblings('.find').removeClass('findTwo');
})
$('.addDate input').focus(function(){
	borderChange(this);
})
$('.addDate input').blur(function(){
	borderNo(this);
})
//主题酒店的table栏
$(".theme .title-list li").click(function(){
	var index = $(this).index();
	$(this).addClass('active').siblings().removeClass('active');
//	$('.theme .city-list').eq(index).addClass('current').siblings(".city-list").removeClass('current');
	$('.theme .img-list').eq(index).fadeIn(1000).siblings(".img-list").fadeOut();
	
})
//特价酒店的table栏
$(".theme .sale-list li").click(function(){
	var index = $(this).index();
	$(this).addClass('active').siblings().removeClass('active');
	$('.theme .city-list').eq(index).fadeIn(1000).siblings(".city-list").fadeOut();	
})
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
//目的地
$('.dest').click(function(e){
	borderChange(this);
	$('.addDest').slideDown();
	e.stopPropagation();
})
//人数
   $('.person').click(function(e){
		borderChange(this);
   		$('.addNum').fadeIn();
   		e.stopPropagation();
   })  
   $('.personMsg').click(function(e){
   	e.stopPropagation();
   })
   $('.duty').click(function(e){
   	$(this).children('ul').fadeIn();
   })
   $('.perNum li').click(function(e){
   		var oper = $(this).html();
   		$('.adults').html(oper+'成人');
   		$(this).parent().fadeOut()
   		e.stopPropagation();
   	})
    $('.childNum li').click(function(e){
   		var oper = $(this).html();
   		$('.child').html(oper+'儿童');
   		$(this).parent().fadeOut()
   		e.stopPropagation();
   	})
     $('.childAges li').click(function(e){
   		var oper = $(this).html();
   		$('.childAge').html(oper+'岁');
   		$(this).parent().fadeOut()
   		e.stopPropagation();
   		
   	})
     $('.confirm a').click(function(e){
     	$('addNum').fadeOut();
     	$('.person').html();
     })
      
    
//阻止冒泡
$(document).click(function(e){
	$('.addDest').slideUp();
	$('.addNum').fadeOut();
	borderNo('.dest');
	borderNo('.person');
})

$('.addDest a').click(function(){
	var odest = $(this).html();
	$('.dest').val(odest);
})
  
   //边框变色
   function borderChange(a){
    	$(a).css({'border':'1px solid #FF9D00','box-shadow':'0 0 4px #ffa800'});
   }
    function borderNo(a){
    	$(a).css({'border':'1px solid #ddd','box-shadow':'none'});
   }  
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
 //日期插件  
$(function(){
	/* 日期插件的HTML元素 */
	var kui_div_date = '<div class="kui_d_pane" id="kui_d_pane" style="display:none;"><iframe id="kui_frame_d" width="370" height="203" frameborder="0"></iframe></iframe><div class="kui_data_content_pane"><div class="kui_prev_next_month"><a href="javascript:;" class="kui_prev_m"></a><span class="kui_today"></span><a href="javascript:;" class="kui_next_m"></a><span class="kui_tomorrow"></span></div><div id="left_table"><dl class="kui_data_tab"><dt class="d_th_bg">日</dt><dt>一</dt><dt>二</dt><dt>三</dt><dt>四</dt><dt>五</dt><dt class="d_th_bg">六</dt></dl><dl class="kui_date_info" id="kui_left_t"></dl></div><div id="right_table"><dl class="kui_data_tab"><dt class="d_th_bg">日</dt><dt>一</dt><dt>二</dt><dt>三</dt><dt>四</dt><dt>五</dt><dt class="d_th_bg">六</dt></dl><dl class="kui_date_info" id="kui_right_t"></dl></div><div class="kui_date_reset"><span class="off">清空</span><span class="close">关闭</span></div></div></div>';	
	$('.search-tab').after(kui_div_date);
})