// Router
window.onload = () => Route({'': 'banner.html', '/contact': 'contact.html', '/faq': 'faq.html', '/isqip': 'isqip.html', '/ticket': 'ticket.html'});
// ///

// SIDE BAR MOBILE
$(document).ready(() => {
    $('#sidebar-btn').click(() => {
        $(".sidebar").fadeIn(300);
        $(".mob-topbar, .content-side").css({opacity: 0.5});
    });
    $(window).on('resize', function () {
        var win = $(window);
        if (win.width() >= 575.98) {
            $(".sidebar").fadeIn(300);
            $(".mob-topbar, .content-side").css({opacity: 1});
        }
        if (win.width() < 575.98) {
            $(".sidebar").fadeOut(300);
        }
    });

});

// side bar active change
$(window).on('hashchange load', () => {
    let currentPage = window.location.hash.substring(1).slice(1);
    if(currentPage != ''){
        $('.menu li').removeClass('active');
        $('.menu li div.selected').remove();
        currentPage ='.' + currentPage + '-btn';
        $(currentPage).append('<div class="selected"></div>');
    }else{
        $('.menu li').removeClass('active');
        $('.menu li div.selected').remove();
        $('.home-btn').append('<div class="selected"></div>');
    }
});

$(document).mouseup(function (e) {
    if ($(window).width() < 575.98) {
        if (!$('.sidebar').is(e.target) && $('.sidebar').has(e.target).length === 0) {
            $('.sidebar').fadeOut();
            $(".mob-topbar, .content-side").css({opacity: 1});
        }
    }
});
// ///////////

/**
 * contact page global variables
 */
var textCurtains = null;
var textToReveal = null;
var textCurtainEffect = null;
// Page Scripts //
let pageScript = () => {
    // trigger loading animation
    $(window).ready(function() {
        pageRevealerLower.play();
    });

    // FAQ PAGE
    $('.faq-question').click(function () {

        $(this).next('.faq-answer').fadeToggle();
    });

    /**
     * Contact page scripts
     */
    console.log('yes it fires');
    // text curtain reveal animation
    textCurtains = document.getElementsByClassName('text-reveal-curtain');
    textToReveal = document.getElementsByClassName('text-to-reveal');
    textCurtainEffect = anime.timeline({
        easing: 'easeInOutSine',
        duration: 100,
        delay: anime.stagger(50),
        endDelay: 50,
        autoplay: false
    });

    textCurtainEffect
    .add({
        targets: textCurtains,
        scaleX: [0, 1],
        direction: 'alternate',
        complete: function () {
            for (var i = 0; i < textToReveal.length; ++ i) {
                textToReveal[i].classList.toggle('make-invisible');
                textCurtains[i].style.transformOrigin = 'right';
            }
        }
    })
    .add({
        targets: textCurtains,
        scaleX: [1, 0]
    });
    $('.contact-container').ready(function(){
        setTimeout(function () {
            textCurtainEffect.play();
        }, 500);
    });


    // FAQ PAGE

    //FAQ POP UP
    $('.open').click(function(){
        let question = $(this).children('.question').text();
        let answer = $(this).children('.answer').text();
        let $popup = `<div class="faq-pop-wrapper">
                        <div class="faq-pop-body">
                            <div class="close-btn"><a><i class="fas fa-times"></i></a></div>
                            <div class="faq-pop-question">${question}</div>
                            <div class="faq-pop-answer">${answer}</div>
                        </div>
                    </div>`;
        $('.overlay').show();
        $('body').prepend($popup);
        $('.close-btn').click(()=> {
            $('.faq-pop-wrapper').remove();
            $('.overlay').hide();
        });
    });
    //FAQ POPUP END

    // PAGINATION
    let crt_faq_page = 0;
    let total_page = $('.page').length;
    let pageNumber = function(crt, tot){
        return `${crt+1}\\${tot}`;
    }

    $('.page').hide();
    $(`.page:eq(${crt_faq_page})`).show();
    $('.page-number').text(pageNumber(crt_faq_page, total_page));

    $('#faq-btn-next').click(()=>{
        $('.page').hide();
        crt_faq_page += 1;
        if(crt_faq_page == total_page){crt_faq_page = 0;}
        $(`.page:eq(${crt_faq_page})`).show();
        $('.page-number').text(pageNumber(crt_faq_page, total_page));
    });
    $('#faq-btn-prev').click(()=>{
        $('.page').hide();
        if(crt_faq_page == 0){crt_faq_page = total_page;}
        crt_faq_page -= 1;
        $(`.page:eq(${crt_faq_page})`).show();
        $('.page-number').text(pageNumber(crt_faq_page, total_page));
    });
    //PAGINATION END

};
// //////////////

// PRE PAGE LOADING SCRIPT
let preScirpt = () =>{

}

/**
 * Page revealing animation
 */
let pageRevealerElement = document.getElementsByClassName('page-revealer-element');
let pageRevealerRaise = anime.timeline({
    easing: 'easeInOutSine',
    duration: 500,
    delay: anime.stagger(50),
    endDelay: 50,
    autoplay: false
});
pageRevealerRaise
.add({
    targets: pageRevealerElement,
    scaleY: [0, 1],
    complete: function() {
        for (let i = 0; i < pageRevealerElement.length; ++i) {
            pageRevealerElement[i].style.transformOrigin = 'left bottom';
        }
        console.log('complete raise');
    }
});

let pageRevealerLower = anime.timeline({
    easing: 'easeInOutSine',
    duration: 500,
    delay: anime.stagger(50),
    endDelay: 50,
    autoplay: false
});
pageRevealerLower
.add({
    targets: pageRevealerElement,
    scaleY: [1, 0],
    duration: 500,
    complete: function() {
        for (let i = 0; i < pageRevealerElement.length; ++i) {
            pageRevealerElement[i].style.transformOrigin = 'left top';
        }
        console.log('complete lowering');
    }
});

// Pre Request Script
let preRequestScript = function (firstLoad, callback) {

    // script here
    if (firstLoad) {
        callback();
    }
    else {
        pageRevealerRaise.play();
        pageRevealerRaise.finished.then(callback);
    }
}
