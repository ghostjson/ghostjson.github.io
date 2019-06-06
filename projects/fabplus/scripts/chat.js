$(function () {
    $(".chats, .bottom").hide();
    $(".chatbox header").click(function (e) { 
        e.preventDefault();
        $(".chats, .bottom").toggle();
    });
});