$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	let position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position - 20
	},600 );
});

$(document).ready(function () {
	// mobile menu drop down
	$(".menu-menu-btn").click(function (e) { 
		e.preventDefault();
		$('.dropdown-menu').fadeToggle();
	});

	//mobile chat button
	$('.mobile-chat').click(function (e) { 
		e.preventDefault();
		$(".chats, .bottom,.chatbox header").fadeIn();
		$(this).fadeOut();
	});
});

