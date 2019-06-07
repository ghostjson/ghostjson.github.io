
$(document).ready(function () {

	let isMenuDrop = false;

	// mobile menu drop down
	$(".menu-menu-btn").click(function (e) { 
		e.preventDefault();
		$('.dropdown-menu').fadeToggle();
		if(!isMenuDrop){
			$('.menu-menu-btn').html('<i class="fas fa-times"></i>');
			isMenuDrop = true;
		}else{
			$('.menu-menu-btn').html('<i class="fas fa-bars"></i>');
			isMenuDrop = false;
		}
	});
	
	//mobile chat button
	$('.mobile-chat').click(function (e) { 
		e.preventDefault();
		$(".chats, .bottom,.chatbox header").fadeIn();
		$(this).fadeOut();
	});

});


$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	let position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position - 20
	},600 );
});