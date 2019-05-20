
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