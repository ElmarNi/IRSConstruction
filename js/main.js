$(document).ready(function () {
    $("#slider .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        margin: 0,
        responsive: {
            0: {
                items: 1
            }
        }
    });
    $(window).on("scroll", function() {
        if ($(window).scrollTop() >= 170 && !$("#large-screens").hasClass("active")) {
            $("#large-screens").addClass("active")
        }
        if ($(window).scrollTop() < 170) {
            $("#large-screens").removeClass("active")
        }
    })
    
});