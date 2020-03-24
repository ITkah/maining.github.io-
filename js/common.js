$(document).ready(function() {
    $(".menu-btn").on("click", function() {
        $("nav").slideToggle(200);
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('header').addClass("fixed-header");
        } else {
            $('header').removeClass("fixed-header");
        }
    });
});