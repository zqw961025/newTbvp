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
 //边框变色
   function borderChange(a){
    	$(a).css({'border':'1px solid #FF9D00','box-shadow':'0 0 4px #ffa800'});
   }
    function borderNo(a){
    	$(a).css({'border':'1px solid #ddd','box-shadow':'none'});
   }  