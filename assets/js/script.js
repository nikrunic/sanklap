$(function() {
    $(".hamburgar").on("click", function(){
        $(".bottomHeader").addClass("open");
    });
    $(".closeNav").on("click", function(){
        $(".bottomHeader").removeClass("open");
    });
    var bannerHeight = $(window).height() - $("header").height();
    $(".banner_blk").height(bannerHeight);
  
    
});

$( window ).resize(function() {
});

 