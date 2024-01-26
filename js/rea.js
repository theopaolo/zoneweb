// *************** PRELOADER
$(window).on('load', function () {
  $("#preloader").fadeOut('slow');
});
// ************** HIDE MENU ON SCROLL ************** 
let lastScrollTop =
  window.scrollY || document.documentElement.scrollTop;

window.addEventListener(
  'scroll',
  function handleScroll() {
    const scrollTopPosition =
      window.scrollY || document.documentElement.scrollTop;

    if (scrollTopPosition > lastScrollTop) {
      $('.navbar').addClass('slideUp');
    } else if (scrollTopPosition < lastScrollTop) {
      $('.navbar').removeClass('slideUp');
    }
    lastScrollTop =
      scrollTopPosition <= 0 ? 0 : scrollTopPosition;
  },
  false,
);

// *************** MENU 
$('.trigger').click(function() {
  // $('.footer').toggleClass('close');

    if ($(document).innerHeight() < $(window).height() * 3 ) {
       $('html, body').animate({
           scrollTop: $('.footer').offset().top
        }, 900);
    }
    else {
       $('html, body').animate({
           scrollTop: $('.footer').offset().top
        }, 2000);
    }
});
// *************** MENU MOBILE
$(".btn-nav").on("click tap", function() {
    $(".st0").toggleClass("fill");
    $(".nav-content").toggleClass("showNav hideNav").removeClass("hidden");
    $(this).toggleClass("animated");
    $(".icon-bar").toggleClass("efr");
});
$('.mobile .trigger').on("click tap", function() {
    $(".nav-content").toggleClass("showNav hideNav").removeClass("hidden");
    $(".btn-nav").toggleClass("animated");
    $('html, body').animate({
        scrollTop: $(".footer").offset().top
    }, 2000);
    return false;
});