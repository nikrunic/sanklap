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

		$(".tab_title_inner_blk li").on("click", function(e) {
			changeTab($(this));
		});
		
		if(window.location.hash)
		{
			var hash = window.location.hash;
			$(".tab_title_inner_blk li span a[href='"+hash+"']").parents("li").click();
		}
});

$(window).resize(function() {});

function initMap() {
    // Styles a map in night mode.
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 40.674, lng: -73.945 },
      zoom: 12,
      styles: [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#263c3f" }],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{ color: "#6b9a76" }],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#38414e" }],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#212a37" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9ca5b3" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#746855" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#1f2835" }],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{ color: "#f3d19c" }],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#2f3948" }],
        },
        {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#17263c" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#515c6d" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#17263c" }],
        },
      ],
    });
  }

  function changeTab(el)
	{
		el.parents(".tab_blk").find(".tab_title_inner_blk li").removeClass("active");
		el.addClass("active");
		var index = el.parents(".tab_blk").find(".tab_title_inner_blk li").index(el);
		el.parents(".tab_blk").find(".tab_cont_li").removeClass("active").eq(index).addClass("active");
		console.log(index);
	}
 