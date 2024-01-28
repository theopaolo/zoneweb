
// $(window).on('load', function () {
//   $("#preloader").fadeOut('slow');
// });

// ************** Avant après **************

$(document).ready(function() {
    var $myDiv = $('.cocoen');
    var $myDiv2 = $('.cocoen-2');
    if ( $myDiv.length){
        Cocoen.create(
            document.querySelector('.cocoen')
        );
    }
    if ( $myDiv2.length){
        Cocoen.create(
            document.querySelector('.cocoen-2')
        );
    }
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

// ************** CONTACT **************
$('.trigger').click(function() {
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


// ************** SLICK **************
$(function() {
  // Initialize Slick Slider
  $('.slider-project').slick({
      draggable: false,
      useTransform: false,
      infinite: false,
      swipeToSlide: true,
      speed: 600,
      centerMode: true,
      variableWidth: true,
      prevArrow: $('.prev-arrow'),
      nextArrow: $('.next-arrow')
  });

  // Keyboard Navigation for Slick Slider
  var $carousel = $('.slider-project');
  $(document).on('keydown', function(e) {
      if (e.keyCode === 37) { // Left arrow key
          $carousel.slick('slickPrev');
      } else if (e.keyCode === 39) { // Right arrow key
          $carousel.slick('slickNext');
      }
  });

  // Initialize LightGallery
  $(window).on('load', function() {
      $('.slider-project').each(function() {
          lightGallery(this, {
              selector: '.lightgallery',
              licenseKey: 'c7a99837-f764-4e02-b3e0-db68dd17f191',
              counter: true,
              download: false,
              speed: 300,
              plugins: [lgZoom],
              showZoomInOutIcons: true,
              thumbnail: true,
              actualSize: false
          });
      });
  });
});




// ************* GSAP

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin,SplitText);

ScrollTrigger.matchMedia({
  // large
  "(min-width: 1099px)": function() {
  // "(min-width: 0px)": function() {

// ************* Menu color
var elementToModify = document.querySelectorAll('.nav-link');

const sections = gsap.utils.toArray('[data-dark-header]');
 sections.forEach(section => {

   ScrollTrigger.create({
     trigger: section,
     start: 'top top-=-80',
     end: 'bottom top-=-80',
     toggleClass: {
       targets: elementToModify,
       className: 'blackco'
     },
   })

 });





// ************* START
    // var tl0 = gsap.timeline( {
    //     scrollTrigger: {
    //         scrub: true,
    //         trigger:"body",
    //         start:"top top",
    //         end:"+=50%"
    //       },
    // });
    // tl0
    // .to('#scroll', { opacity:0, duration:2,display:"none"},2)
    // .to('#menu', { opacity:1, duration:2},2)
    // .to('#dl', { opacity:1, duration:2},2)






// ************* ZOOOM
    var flou = gsap.timeline( {
        scrollTrigger: {
            scrub: false,
            trigger:".section-text",
            start:"top 60%",
            toggleActions:'restart none none reset',
          },
    });
    mySplitText = new SplitText(".section-text", { type: "chars,words" }),
    chars = mySplitText.chars; //an array of all the divs that wrap each character

    flou
    .from(chars, {
      duration: 1.2,
      opacity: 0,
      ease: "back",
      stagger: 0.0025
    });


// ************* MENU
    // var color = gsap.timeline( {
    //     scrollTrigger: {
    //         scrub: true,
    //         trigger:"#section5",
    //         start:"top 30px",
    //         end:"+=10px",
    //       },
    // });
    // color
    // .to('#menu li', { color:"#000"})



  },
  // small
  "(max-width: 1100px)": function() {


  },
  // all
  "all": function() {

  }
});