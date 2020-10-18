$(function() {
    $(".hamburgar").on("click", function() {
        $(".nav").toggleClass("open");
        $(this).toggleClass("open");
    });
    // $(".closeNav").on("click", function() {
    //     $(".bottomHeader").removeClass("open");
    // });
    var bannerHeight = $(window).height() - $("header").height();
    $(".banner_blk").height(bannerHeight);
    $('.bannerSlider').slick({
        infinite: true,
        arrows: false
    });

});

$(window).resize(function() {});