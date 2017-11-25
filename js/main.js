'use strict';

$(function(){

	// 轮播图代码
	function resize(){
		//获取屏幕宽度
	var windowWidth = $(window).width();
	var isSmallScreen = windowWidth < 768;
	// each遍历dom数组JQ方法
	$('#main_ad > .carousel-inner > .item').each(function(i,item){
		var $item = $(item);//获取是dom对象要转换成jq对象
		var imgSrc = $item.data(isSmallScreen ? 'image-xs' : 'image-lg');
		if(isSmallScreen){
			$item.html('<img src="'+ imgSrc +'" alt="" />');
			$item.css("backgroundImage","");
		}else{
			$item.html('');
			$item.css("backgroundImage","url('" + imgSrc +"')" );
		}
	})
	}

	$(window).on('resize',resize).trigger('resize');

	var $ulContainer = $('.nav-tabs');

	//获取所有子元素的宽度和
	var width = 30;
	$ulContainer.children().each(function(index,element){
		// console.log(element.clientWidth);
		width += element.clientWidth;
	})

	$ulContainer.css('width',width)

});