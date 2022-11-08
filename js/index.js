$(document).ready(function(){
  $(".carousel-top").owlCarousel();
});

$(document).ready(function(){
  $(".carousel-bottom").owlCarousel();
});

$(".carousel-top").owlCarousel({
    items: 1,
    margin: -40,
    loop: true,
    dots: false,
    nav: true,
    touchDrag: true,
    smartSpeed: 850,
    navContainer: ".carousel-item__nav_top",
    navText: [
      "<img src='img/arrow-top.svg' class='carousel-top__prev'>",
      "<img src='img/arrow-top.svg' class='carousel-top__next'>",
    ],
    responsive: {
      320: {
        items: 1,
        margin: 20,
      },
      1150: {
        items: 1,
        margin: 0,
      },
    },
  });

$(".carousel-bottom").owlCarousel({
    items: 1,
    margin: -40,
    loop: true,
    dots: false,
    nav: true,
    touchDrag: true,
    smartSpeed: 850,
    navContainer: ".carousel-item__nav_bottom",
    navText: [
      "<img src='img/arrow-bottom.svg' class='carousel-bottom__prev'>",
      "<img src='img/arrow-bottom.svg' class='carousel-bottom__next'>",
    ],
    responsive: {
      320: {
        items: 1,
        margin: 20,
      },
      1150: {
        items: 1,
        margin: 0,
      },
    },
  });