var index=0;
var timer;
$('.btnList li').click(function(){
	index = $(this).index();
	$(this).addClass('active').siblings().removeClass('active');
	$('.imgList').animate({'left':-index*187+'px'});
})

function run(){
	timer = setInterval(function(){
		index++;
		if (index>5) {
			index=0;
			$('.imgList').css('left',-index*187+'px');
			index=1;			
		}
		if (index==5) {
			$('.btnList li').eq(0).addClass('active').siblings().removeClass('active');
		}
		$('.imgList').animate({'left':-index*187+'px'});
		$('.btnList li').eq(index).addClass('active').siblings().removeClass('active');
	},3000)
	
}
run();
$('.preview').mouseenter(function(){
	clearInterval(timer);
})
$('.preview').mouseleave(function(){
	run();
})

//下载
$('.linkDown').hover(function(){
	$('.downloadLink').slideDown();
},function(){
	$('.downloadLink').slideUp();
})
setTimeout(function(){
	$('.preview').removeClass('one');
	$('.preview').fadeIn();  
},1000)


//var imgs = $('.rightbg img');
//console.log(imgs);
//for (var i=0;i<imgs.length;i++) {
//	console.log(imgs[i]);
//	if (i==0) {
//		$('.rightbg img').eq(i).animate({'left':i+1*121+'px','top':i+1*14+'px'},2000);
//	}
// 	$('.rightbg img').eq(i).animate({'left':i*121+'px','top':i*14-10+'px'},2000);
//}
$('.rightbg img').eq(0).animate({'left':'484px','top':'16px'},2000)
$('.rightbg img').eq(1).animate({'left':'428px','top':'22px'},2000)
$('.rightbg img').eq(2).animate({'left':'378px','top':'40px'},2000)
$('.rightbg img').eq(3).animate({'left':'346px','top':'66px'},2000)
$('.rightbg img').eq(4).animate({'left':'296px','top':'82px'},2000)
$('.rightbg img').eq(5).animate({'left':'254px','top':'102px'},2000)
$('.rightbg img').eq(6).animate({'left':'210px','top':'126px'},2000)
$('.rightbg img').eq(7).animate({'left':'172px','top':'134px'},2000)
$('.rightbg img').eq(8).animate({'left':'126px','top':'128px'},2000)
$('.rightbg img').eq(9).animate({'left':'88px','top':'120px'},2000)
$('.rightbg img').eq(10).animate({'left':'46px','top':'96px'},2000)
$('.rightbg img').eq(11).animate({'left':'18px','top':'76px'},2000)
$('.rightbg img').eq(12).animate({'left':'0px','top':'36px'},2000)
$('.rightbg img').eq(13).animate({'left':'536px','top':'108px'},2000)
$('.rightbg img').eq(14).animate({'left':'494px','top':'76px'},2000)
$('.rightbg img').eq(15).animate({'left':'442px','top':'82px'},2000)
$('.rightbg img').eq(16).animate({'left':'400px','top':'106px'},2000)
$('.rightbg img').eq(17).animate({'left':'356px','top':'128px'},2000)
$('.rightbg img').eq(18).animate({'left':'316px','top':'156px'},2000)
$('.rightbg img').eq(19).animate({'left':'270px','top':'170px'},2000)
$('.rightbg img').eq(20).animate({'left':'206px','top':'198px'},2000)
$('.rightbg img').eq(21).animate({'left':'152px','top':'208px'},2000)
$('.rightbg img').eq(22).animate({'left':'106px','top':'186px'},2000)
$('.rightbg img').eq(23).animate({'left':'66px','top':'168px'},2000)
$('.rightbg img').eq(24).animate({'left':'26px','top':'136px'},2000)
$('.rightbg img').eq(25).animate({'left':'400px','top':'242px'},2000)
$('.rightbg img').eq(26).animate({'left':'358px','top':'248px'},2000)
$('.rightbg img').eq(27).animate({'left':'312px','top':'258px'},2000)
$('.rightbg img').eq(28).animate({'left':'250px','top':'268px'},2000)
$('.rightbg img').eq(29).animate({'left':'198px','top':'282px'},2000)
$('.rightbg img').eq(30).animate({'left':'136px','top':'272px'},2000)
$('.rightbg img').eq(31).animate({'left':'92px','top':'256px'},2000)
$('.rightbg img').eq(32).animate({'left':'62px','top':'226px'},2000)
$('.rightbg img').eq(33).animate({'left':'38px','top':'192px'},2000)
