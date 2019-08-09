/*目的地页面——热门目的地js*/
for(var i=0;i<list.children.length;i++){
	list.children[i].setAttribute('kk',i)
	list.children[i].onmouseenter=function(){
		var index=this.getAttribute('kk')
		for(var j=0;j<list.children.length;j++){
			list.children[j].removeAttribute('class','current');
			box.children[j].removeAttribute('class','current')
		}
		this.setAttribute('class','current')
		box.children[index].setAttribute('class','current')
	}
}
/*目的地页面——当季推荐*/
for(var i=0;i<list2.children.length;i++){
	list2.children[i].setAttribute('kk',i)
	list2.children[i].onmouseenter=function(){
		var index=this.getAttribute('kk')
		for(var j=0;j<list2.children.length;j++){
			list2.children[j].removeAttribute('class','current2');
			box2.children[j].removeAttribute('class','current2')
		}
		this.setAttribute('class','current2')
		box2.children[index].setAttribute('class','current2')
	}
}		
/*目的地页面——主题精选*/
for(var i=0;i<list3.children.length;i++){
	list3.children[i].setAttribute('kk',i)
	list3.children[i].onmouseenter=function(){
		var index=this.getAttribute('kk')
		for(var j=0;j<list3.children.length;j++){
			list3.children[j].removeAttribute('class','current2');
			box3.children[j].removeAttribute('class','current2')
		}
		this.setAttribute('class','current2')
		box3.children[index].setAttribute('class','current2')
	}
}	
//顶部封图右下角日历内日期获取及显示
function getday(){
	var day = new Date().getDate();
	document.getElementsByClassName('mdd-ti1')[2].innerHTML = day;
}
getday();

//顶部封图的底部向下按钮事件
$('.img').click(function(event){
	$('html,body').animate({'scrollTop':$('.mdd-con1').eq(0).offset().top},1000);
})
