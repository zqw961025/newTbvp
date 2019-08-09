	//二级导航
	$('.subnav li').click(function(){
		$(this).addClass('cbttom').siblings().removeClass('cbttom');
	})
	
	
	//点击input
	$('.inputs input').eq(0).click(function(){
		$('.leavePlace').eq(0).show().parent('.inputs').siblings('.inputs').children('.leavePlace').hide();
		$(this).css({'border-color':'#ff9d00','border-bottom-color':'#f6f6f6'});
	})
	$('.inputs input').eq(1).click(function(){
		$('.place2').show();
		$(this).css({'border-color':'#ff9d00','border-bottom-color':'#f6f6f6'});
	})
	$('.inputs input').eq(2).click(function(){
		$(this).css({'border-color':'#ff9d00','border-bottom-color':'#f6f6f6'});
	})
	
    $(document).click(function(){
    	$('.leavePlace').hide();
    	$('.inputs input').css('border-color','#f6f6f6');
    })
    //阻止冒泡
    $('.inputs input').click(function(e){
    	e.stopPropagation();
    })	
	$('.leavePlace').click(function(e){
		e.stopPropagation();
	})
	
	
	//国内热门
	$('.place1 .list li').click(function(){
		$(this).addClass('changeColor').siblings().removeClass('changeColor');
		var n=$(this).index();
		$('.lists').eq(n).show().siblings('.lists').hide();
	})
	$('.place2 .list li').click(function(){
		$(this).addClass('changeColor').siblings().removeClass('changeColor');
		var n=$(this).index();
		$('.listss').eq(n).show().siblings('.listss').hide();
	})

	//点击leavePlace下的a，把它的值放入input中
	$('.lists a').click(function(){
		if($(this).parents('.leavePlace').hasClass('place2')){
			 $('.inputs input[type=text]').eq(1).val($(this).text());
		}else{
			 $('.inputs input[type=text]').eq(0).val($(this).text());
		}
		$('.leavePlace').hide();
	    $('.inputs input').css('border-color','#f6f6f6');
		 
	})
	
	
	
	//鼠标移入图片
	$('.main-right img').hover(function(){
		$('.arrow').fadeIn(300);
	},
	  function(){
	  	$('.arrow').fadeOut(300);
	  }
	)
					
		
     //placeList
     $('.placeList li').click(function(){
     	 var num=$(this).index();
     	$(this).children('.arrs').show();
     	$(this).siblings().children('.arrows').hide()
     	$(this).addClass('changeOrange').siblings().removeClass('changeOrange');
        $('.ticketPrice').eq(num).show().siblings('.ticketPrice').hide();
     })
