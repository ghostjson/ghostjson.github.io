
// Router
window.onload = ()=> Route({
    '': 'banner.html',
    '/contact': 'contact.html',
    '/faq': 'faq.html',
    '/isqip': 'isqip.html',
    '/ticket': 'ticket.html',
});
/////


// SIDE BAR MOBILE
$(document).ready(()=> {
    $('#sidebar-btn').click(()=>{
        $(".sidebar").fadeIn(300);
        $(".mob-topbar, .content-side").css({opacity:0.5});
    });
    $(window).on('resize', function(){
        var win = $(window);
        if (win.width() >= 575.98) {
            $(".sidebar").fadeIn(300);
            $(".mob-topbar, .content-side").css({opacity:1});
        }
        if (win.width() < 575.98) {
            $(".sidebar").fadeOut(300);
        }
    });

    // side bar active change
    $(window).on('hashchange load', ()=>{
        let currentPage = window.location.hash.substring(1).slice(1);
        if(currentPage == ''){
            $('.menu li').removeClass('active');
            $('.menu li div.selected').remove();
            $('.home-btn').append('<div class="selected"></div>');
        }else{
            $('.menu li').removeClass('active');
            $('.menu li div.selected').remove();
            currentPage ='.' + currentPage + '-btn';
            $(currentPage).append('<div class="selected"></div>');
        }
    });

});
$(document).mouseup(function (e) {
        if($(window).width() < 575.98){
            if (!$('.sidebar').is(e.target) && $('.sidebar').has(e.target).length === 0){
                $('.sidebar').fadeOut();
                $(".mob-topbar, .content-side").css({opacity:1});
        }
    }
});



/////////////