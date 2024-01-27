// *************** PRELOADER
$(window).on('load', function () {
  $("#preloader").fadeOut('slow');
});
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


// ************* GSAP

gsap.registerPlugin(SplitText);

    const flou = gsap.timeline( {  });
    mySplitText = new SplitText(".section-principal", { type: "words,chars" }),
    chars = mySplitText.chars; //an array of all the divs that wrap each character

    flou
    .from(chars, {
      duration: 1.2,
      opacity: 0,
      ease: "back",
      stagger: 0.0025
    });
