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






// *************** AMENAGEMENT




// $(window).scroll(function(e) {
//     var
//     s1 = $('.black');
//     s2 = $('.black').next();
//     diff1 = s1[0].offsetTop - 40;
//     diff2 = s2[0].offsetTop - 60;
//     scrollPos = $(document).scrollTop();
//     if (scrollPos <  diff1) {
//         $(".nav-link").removeClass("blackco");
//         $(".nav-link").addClass("whiteco");
//     }
//     if (scrollPos >= diff1 && scrollPos < diff2) {
//         $(".nav-link").addClass("blackco");
//         $(".nav-link").removeClass("whiteco");
//     }
//     if (scrollPos >=  diff2) {
//         $(".nav-link").removeClass("blackco");
//         $(".nav-link").addClass("whiteco");
//     }
// });


// ************* GSAP

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin,SplitText);


ScrollTrigger.matchMedia({
  // large
  "(min-width: 1099px)": function() {
  // "(min-width: 0px)": function() {



// ************* Menu color
var elementToModify = document.querySelectorAll('.nav-link');

// all good - it works
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





// ************* ZOOOM
    var flou = gsap.timeline( { 
        scrollTrigger: {
            scrub: false,
            trigger:".section-text",
            start:"top 60%",
            toggleActions:'restart none none reset',
          },
    });
    mySplitText = new SplitText(".section-text", { type: "words,chars" }),
    chars = mySplitText.chars; //an array of all the divs that wrap each character

    flou
    .from(chars, {
      duration: 1.2,
      opacity: 0,
      ease: "back",
      stagger: 0.0025
    });


// ************* APROPOS
    var apropos = gsap.timeline( { 
       
    });
    mySplitText = new SplitText(".section-principal", { type: "words,chars" }),
    chars = mySplitText.chars; //an array of all the divs that wrap each character

    apropos
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

