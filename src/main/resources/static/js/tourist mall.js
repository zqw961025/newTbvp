
		//二级导航
		$('.subnav li').click(function(){
			$(this).addClass('cbttom').siblings().removeClass('cbttom');
		})
		

		//输入框
		$(".leave").click(function(e){
            $(".chioce2").hide();
			if($(".chioce").css("display")=="none"){
					$(".chioce1").show();
				}else{
					$(".chioce1").hide();
				}
			//阻止冒泡	
			e.stopPropagation();
			
		})
        $(".leavea").click(function(e){
     	    $(".chioce1").hide();
			if($(".chioce").css("display")=="none"){
					$(".chioce2").show();
				}else{
					$(".chioce2").hide();
			}
		
			e.stopPropagation();
		})
        $(document).click(function(){
        	$(".chioce").hide();
        })
        

	        
        
        
        
         
         $('.myaside>li').mouseenter(function(){
         	    $('.myaside>li').css('border-right','none'); 
         		$(this).children().css('transform','translate(2px)');
	      	    $(this).children('.character').show().css({'border-top':'2px solid #ff9d00','border-bottom':'2px solid #ff9d00','border-right':'2px solid #ff9d00'});
         })
 
          $('.myaside>li').mouseleave(function(){
          	   $(this).children().css('transform','translate(-2px)');
          	  $('.myaside>li').css('border-right','2px solid #ff9d00'); 
	      	   $(this).children('.character').hide();
         })
        
        
        

         //换一换
        $(".changes").click(function(){
            $(this).parents(".desc").siblings().toggle();	
           
        })
        
        //price效果
        $('.price').hover(function(){
        	$(this).css("background","#F5F5F5");
        	$(this).children('p').animate({"margin-top":"-40px","height":"100px"});
        	$(this).children('p').css("background","#F5F5F5");
        },
         function(){
         	$(this).css("background","white");
        	$(this).children('p').animate({"margin-top":"0px","height":"50px"});
        	$(this).children('p').css("background","white");
         }
        )
        
       
      
        //主题推荐
        $('.transform li').hover(function(){
        	$(this).addClass('current');
        	$(this).siblings().removeClass('current');
        	var change=$(this).index();  
          $(this).parents(".descInfo").siblings('.picS').find('ul').eq(change).show(); 
           $(this).parents(".descInfo").siblings('.picS').find('ul').eq(change).siblings().hide();
        })
        



         //机酒自由行
        $('#chas li').hover(function(){
        	$(this).addClass('apperant1');
        	$(this).siblings().removeClass('apperant1');
        
        })
        
        
          //出行必备
        $('#chas1 li').hover(function(){
        	$(this).addClass('apperant2');
        	$(this).siblings().removeClass('apperant2');
        
        })
        
        
        
          //当地玩乐
        $('#chas2 li').hover(function(){
        	$(this).addClass('apperant3');
        	$(this).siblings().removeClass('apperant3');
        
        })
          
        
          //畅销签证
        $('#chas3 li').hover(function(){
        	$(this).addClass('apperant4');
        	$(this).siblings().removeClass('apperant4');
        
        })

        
          
          
  
      
      
      
      
      
	      
	      //当地游
	      
	      //左右箭头点击
	      var num=0;
	      $('.myright').click(function(){
	      	  num++;
	      	  if(num>5){
	      	  	$(this).hide();
	      	  	$('.myleft').show();
	      	  }
	      	  $('.move').css('left',-num*123.5+'px');
	      })
	      
	       $('.myleft').click(function(){
	      	  num--;
	      	  if(num==0){
	      	    $(this).hide();
	      	  	$('.myright').show();
	      	  }
	      	  $('.move').css('left',-num*123.5+'px');
	      })
	      
	      
	      
	      
	      
	      $('.move li').hover(function(){
	      	
	      	  var oindex=$(this).index();
	      	  if(oindex==0||oindex==3||oindex==7){
	          	  	$(this).css('background','#f97a2c');
	      	  }else if(oindex==1||oindex==9||oindex==11||oindex==13){
	          	  	$(this).css('background','#21c9c3');	  	
	      	  }else if(oindex==2||oindex==4){
	          	  	$(this).css('background','#41c3ff');	  	
	      	  }else if(oindex==5||oindex==12){
	          	  	$(this).css('background','#2296f0');	  	
	      	  }else if(oindex==6){
	      	        $(this).css('background','#ec5775');	
	      	  }else{
	      	  	    $(this).css('background','#6159ef');
	      	  }
	      	   //获取图片的宽度
	      	   var n=$('.nav-inco').width();
	           $(this).children().children('.nav-inco').css('background-position-x',-n+'px');
	      	   $(this).children().children('p').addClass('white');
	      },
	        function(){
	        	$(this).css('background','#fafafa');
	            $(this).children().children('.nav-inco').css('background-position-x',n*'2'+'px');
	          	$(this).children().children('p').removeClass('white');
	        	
	        }
	      )
	      
	      
	      
	      
	      $('.transforms li').click(function(){
	      	  $(this).addClass('current').siblings().removeClass('current');
	      	  var n=$(this).index();
	      	  $('.pic').eq(n).show().siblings('ul').hide();
	      })
	      
	      
	      
	      //自由行攻略左右点击
	      $('.rigs').click(function(){
	          	num++;
	          	if(num==16){
	          		$('.rigs').hide();
	          	}
	          	$('.lfs').show();
	          	$('.strategy').animate({'left':num*-336+'px'});
	      })
	      
	      $('.lfs').click(function(){
	          	num--;
	          	if(num==0){
	          		$('.lfs').hide();
	          	}
	          	if(num==15){
	          		$('.rigs').hide();
	          	}
	          	$('.rigs').show();
	          	$('.strategy').animate({'left':num*-336+'px'});
	          })
	          
	   
	   
	   
	   
	       $('.item').hover(function(){
	       	     $(this).children('.imgas').children().css('transform',' scale(1.2)');
	       },
	           function(){
	           	  $(this).children('.imgas').children().css('transform',' scale(1)');
	        })
	      
	      
	      $('.mytransforms li').click(function(){
	      	 $(this).addClass('current').siblings().removeClass('current');
	      	 var num=$(this).index();
	      	 $('.piclist').eq(num).show().siblings('.piclist').hide();
	      })
	      

	     
	     
	     
	     
	         
         $('.other>li').mouseenter(function(){
	      	    $(this).children('.character').show().css('border','2px solid #ff9d00');
         })

		
		  