// *************** PRELOADER
$(window).on('load', function () {
  $("#preloader").fadeOut('slow');
});
// *************** INDEX
$('.conta').on("click tap", function() {
  // $('.footer').toggleClass('close');
   fullpage_api.moveTo(5);
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
// ************** FULLPAGE ************** 
new fullpage('#fullpage', {
    navigation: true,
    animateAnchor: true,
    scrollingSpeed: 900,
    controlArrows: false,
    responsiveWidth: 768,
    afterResponsive: function(isResponsive){
        if(isResponsive){
            fullpage_api.setAllowScrolling(false);
        }else{
            fullpage_api.setAllowScrolling(true);
        }
    }
});
// ************** END FULLPAGE ************** 

