/**
 * 
 */

$(function(){
	$(".collapsible:first a").addClass("selected");
	
	/* $(".collapsible:eq(1) .content").hide();
	$(".collapsible:eq(2) .content").hide(); */
	
	/* collapsible 첫번째를 제외한 collapsible를 가지고 오는데, 그 안에 있는 .content를 숨긴다 */
	$(".collapsible").not(".collapsible:first").find(".content").hide();
	
	$(".collapsible .dokdo_title a").click(function(){
		if( $(this).hasClass("selected") == true ){
			$(this).removeClass("selected");
		} else{
			$(this).addClass("selected");
		}
		//나를 제외한 a태그들의 selected 클래스를 제거한다.
		$(".collapsible .dokdo_title a").not(this).removeClass("selected");
		
		$(this).parents(".collapsible").find(".content").stop().slideToggle(500);
		
		//나(a)를 제외한 부모 collapsible을 찾고, 부모에 있는 .content를 slideup시킨다.
		$(".collapsible .dokdo_title a").not(this).parents(".collapsible").find(".content").stop().slideUp(500);
		
	})
	
	$("#dokdo_index").click(function(){
		location.href = 'index.html';
	})
	
})