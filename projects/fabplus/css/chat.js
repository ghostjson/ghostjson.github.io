$(function () {
    $(".chatbox header").click(function (e) { 
        e.preventDefault();
        $(".chats, .bottom").toggle();
    });
});