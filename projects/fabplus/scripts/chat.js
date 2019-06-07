// $(function () {
    
//     $(".chats, .bottom").hide();
//     $(".chatbox header").click(function (e) { 
//         e.preventDefault();
//         if ($('body').width() > 650){
//             $(".chats, .bottom").toggle();
//         }else{
//             $(".chats, .bottom,.chatbox header").toggle();
//         }
//     });
//     // $(window).resize(function(){     
// 	// if ($('body').width() <= 650){
// 	// 	$(".chatbox header").click(function (e) { 
// 	// 		e.preventDefault();
// 	// 		$(".chats, .bottom,.chatbox header").fadeOut();
// 	// 	});		

// 	// }
// });
// });

$(document).ready(function () {
    $(".chats, .bottom").hide();
    $(".chatbox header").click(function (e) { 
        e.preventDefault();
        if ($('body').width() > 650){
            $(".chats, .bottom").toggle();
        }
        else{
            $(".chats, .bottom,.chatbox header").fadeOut();
            $('.mobile-chat').fadeIn();
        }
    });
    $(window).bind ('orientationchange', function ()
        {
        if ($(window).width() > 650){
            $('.mobile-chat').fadeOut();
            $(".chatbox header").show(function () {
                $(".chats, .bottom").hide();    
            });
        }
        else{
            $(".chats, .bottom, .chatbox header").hide();
        }
    });
});