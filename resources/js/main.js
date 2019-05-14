$(document).ready(()=>{
    $('.menu').click(()=>{
        $('.menu-content').fadeToggle();

        if($('#menu-btn').text() == 'menu'){
            $('#menu-btn').text('close');
        }else{
            $('#menu-btn').text('menu');
        }

    });
});


// scroll
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    });
});