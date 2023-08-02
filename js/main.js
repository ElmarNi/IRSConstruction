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
    $(window).on("scroll", function () {
        if ($(window).scrollTop() >= 170 && !$("#large-screens").hasClass("active")) {
            $("#large-screens").addClass("active")
        }
        if ($(window).scrollTop() < 170) {
            $("#large-screens").removeClass("active")
        }
    })

    $("#small-screens .open-menu").on("click", function (e) {
        e.preventDefault()
        $(this).find("i.fa-bars").toggleClass("active")
        $(this).find("i.fa-x").toggleClass("active")
        $("#small-screens nav").toggleClass("active")
        $("body").toggleClass("active")
        $(".overlay").toggleClass("active")
    })

    $(".overlay").on("click", function(e) {
        $('#small-screens nav').removeClass("active")
        $('#small-screens .open-menu i:last-child').removeClass("active")
        $('#small-screens .open-menu i:first-child').addClass("active")
        $("body").toggleClass("active")
        $(this).removeClass("active")
    })

});