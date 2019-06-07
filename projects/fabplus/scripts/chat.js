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
    $(window).resize(function () { 
        if ($('body').width() > 650){
            $(".chats, .bottom").hide();
            $(".chatbox header").click(function (e) { 
                e.preventDefault();
                $(".chats, .bottom").toggle();
            });
        }
        else{
            console.log('hit');
            $(".chats, .bottom, .chatbox header").hide();
            $(".chatbox header").click(function (e) { 
                e.preventDefault();
                $(".chats, .bottom,.chatbox header").fadeOut();
                $('.mobile-chat').fadeIn();
            }); 
        }
    });
});