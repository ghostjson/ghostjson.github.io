$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	let position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position - 20
	},600 );
});