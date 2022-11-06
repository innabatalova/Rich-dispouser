$(document).ready(function(){
  $(".carousel").owlCarousel();
});

$(".carousel").owlCarousel({
    items: 1,
    margin: -40,
    loop: true,
    dots: false,
    nav: true,
    touchDrag: true,
    smartSpeed: 850,
    navContainer: ".carousel-item__nav",
    navText: [
      "<img src='img/arrow-top.svg' class='carousel-item__prev'>",
      "<img src='img/arrow-top.svg' class='carousel-item__next'>",
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