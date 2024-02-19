gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText);

function animateText(selector, timeline) {
  // console.log("animateText");
  const mySplitText = new SplitText(selector, { type: "words,chars" });
  const chars = mySplitText.chars;

  timeline.from(chars, {
    duration: 1.2,
    opacity: 0,
    ease: "back",
    stagger: 0.0025,
  });
}

function amenagementAnimation() {
  // console.log("handleProposPageAnimations");
    ScrollTrigger.matchMedia({
      // large screens
      "(min-width: 1099px)": function () {
          const elementToModify = document.querySelectorAll(".nav-link");
          const sections = gsap.utils.toArray("[data-dark-header]");

          sections.forEach((section) => {
            ScrollTrigger.create({
              trigger: section,
              start: "top top-=-80",
              end: "bottom top-=-80",
              toggleClass: { targets: elementToModify, className: "blackco" },
            });
          });

          // ZOOM animation
          let flou = gsap.timeline({ scrollTrigger: {
            scrub: false,
            trigger: ".section-text",
            start: "top 60%",
            toggleActions: "restart none none reset",
          }});

          animateText(".section-text", flou);

          // APROPOS animation
          // let apropos = gsap.timeline({});
          // animateText(".section-principal", apropos);
        },

      // small screens
      "(max-width: 1100px)": function () {
        // Add responsive behavior for small screens if needed
      },

      // all screens
      all: function () {
        // Common behavior for all screens
      },
    });
}

function proposSplit() {
  // console.log("proposSplit");
  let flou = gsap.timeline( {  });
  mySplitText = new SplitText(".section-principal", { type: "words,chars" }),
  chars = mySplitText.chars; //an array of all the divs that wrap each character

  flou
  .from(chars, {
    duration: 1.2,
    opacity: 0,
    ease: "back",
    stagger: 0.0025
  });
}

function handleNavbarScroll() {
  // console.log("handleNavbarScroll");
  let lastScrollTop = window.scrollY || document.documentElement.scrollTop;
  function handleScroll() {
    const scrollTopPosition = window.scrollY || document.documentElement.scrollTop;
        if (scrollTopPosition > lastScrollTop) {
            $('.navbar').addClass('slideUp');
        } else if (scrollTopPosition < lastScrollTop) {
            $('.navbar').removeClass('slideUp');
        }
        lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
    }
    window.removeEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll, false);
}

function setupTriggerClick() {
  $('.trigger').off("click").click(function() {
    console.log("trigger click");
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
}

function setupMobileMenu() {
  // console.log("setupMobileMenu");
  $(".btn-nav")
      .off("click tap")
      .on("click tap", function() {
          $(".st0").toggleClass("fill");
          $(".nav-content").toggleClass("showNav hideNav").removeClass("hidden");
          $(this).toggleClass("animated");
          $(".icon-bar").toggleClass("efr");
      });

      $('.mobile .trigger')
      .off("click tap")
      .on("click tap", function() {
          $(".nav-content").toggleClass("showNav hideNav").removeClass("hidden");
          $(".btn-nav").toggleClass("animated");
          $("html, body").animate(
            {
              scrollTop: $(".footer").offset().top,
            },
            2000
          );
    return false;
  });
}

function setupFullpage() {
  // console.log("setupFullpage !!!");
  new fullpage("#fullpage", {
    navigation: true,
    animateAnchor: true,
    scrollingSpeed: 900,
    controlArrows: false,
    responsiveWidth: 768,
    afterResponsive: function (isResponsive) {
      if (isResponsive) {
        fullpage_api.setAllowScrolling(false);
      } else {
        fullpage_api.setAllowScrolling(true);
      }
    },
  });
}

function fullPageDestroy() {
  // console.log("fullPageDestroy");
  if (typeof fullpage_api !== 'undefined') {
    fullpage_api.destroy('all');
  } else {
    // console.log("fullpage_api is not defined, skipping destroy");
  }
}

function initializeFullpage() {
  // console.log("initializing fullpage");
  new fullpage("#fullpage", {
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
}

function destroyLightGallery() {
  // console.log("Destroying LightGallery");
  $('.slider-project').each(function() {
    if ($(this).data('lightGallery')) {
      $(this).data('lightGallery').destroy(true);
    }
  });
}


function initializeLightGallery() {
  destroyLightGallery();
  // console.log("Initializing LightGallery");
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
}


function initializeSlickSlider() {
  // console.log("Initializing Slick Slider");
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

  $(document).off('keydown.slick').on('keydown.slick', function(e) {
    if(e.keyCode == 37) { // Left arrow key
      $('.slider-project').slick('slickPrev');
    }
    if(e.keyCode == 39) { // Right arrow key
      $('.slider-project').slick('slickNext');
    }
  });
}

function destroySlickSlider() {
  // console.log("Destroying Slick Slider");
  if ($('.slider-project').hasClass('slick-initialized')) {
    $('.slider-project').slick('unslick');
  }
}

function playAutoplayVideos() {
  console.log("Playing Autoplay Videos");
  let videos = document.querySelectorAll("video[autoplay]");
  if(videos.length > 0) {
    videos.forEach(video => {
      video.play()
        .catch(error => console.error("Error trying to autoplay video: ", error));
    });
  }
}

function bindEventHandlers() {
  // console.log("bindEventHandlers");

  if ($('.navbar').length) {
    handleNavbarScroll();
  }

  if ($('.trigger').length) {
    setupTriggerClick();
  }

  if ($(".btn-nav").length) {
    setupMobileMenu();
  }

  if ($("#fullpage").length) {
    initializeFullpage();
  } else {
    fullPageDestroy();
  }

  if ($(".section-text").length) {
    amenagementAnimation();
  }

  if ($(".section-principal").length) {
    proposSplit();
  }

  if ($('.slider-project').length) {
    initializeSlickSlider();
    initializeLightGallery();
  }

  $(".conta")
  .off("click tap")
  .on("click tap", function () {
    fullpage_api.moveTo(5);
  });
}

$(document).ready(bindEventHandlers);

  const swup = new Swup({
    linkSelector: 'a:not(.lightgallery)'
  });

  const pageOverlay = document.getElementById("page-transition-overlay");

  function allImagesLoadedPromise() {
    const images = Array.from(document.images);
    return Promise.all(images.map(img => {
      if (img.complete) {
        return Promise.resolve();
      } else {
        return new Promise(resolve => {
          img.onload = resolve;
          img.onerror = resolve; // In case an image fails to load
        });
      }
    }));
  }

  swup.hooks.replace("animation:out:await", () => {
    return allImagesLoadedPromise().then(() => {
      const tl = gsap.timeline();
      return tl.fromTo(
        pageOverlay,
        { height: 0, y: 0 },
        { height: "100%", y: 0, duration: 1, ease: "Power4.easeOut" }
      );
    });
  });

  swup.hooks.replace("animation:in:await", () => {
    return allImagesLoadedPromise().then(() => {
      const tl = gsap.timeline();
      return tl.to(pageOverlay, {
        height: "100%",
        y: "-100%",
        duration: 1,
        ease: "Power4.easeOut"
      }).to("main", { y: "0", duration: 1, ease: "Power4.easeOut" }, "<");
    });
  });

  let currentDynamicClass = '';

  const updateBodyClass = () => {
    const basePattern = /\/(?:new\/)?/;
    const folderAndFilePattern = /(?:([^\/]+)\/)?(?:([^\/]+))?\.html?\/?$/i;
    const fullPattern = new RegExp(`${basePattern.source}${folderAndFilePattern.source}`);

    const pathMatch = window.location.pathname.match(fullPattern);

    if (!pathMatch) {
      console.warn('No pathMatch found for the given URL.');
      return;
    }

    const folderName = pathMatch[1] || '';
    const pageName = pathMatch[2] || '';

    if (currentDynamicClass) {
      document.body.classList.remove(currentDynamicClass);
    }

    let newClass = '';
    if (folderName === "realisation" && pageName) {
      newClass = "projet";
    } else if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
      newClass = "home";
    } else {
      newClass = pageName || folderName;
    }

    if (newClass) {
      document.body.classList.add(newClass);
      currentDynamicClass = newClass;
    } else {
      console.warn('newClass is empty, not adding to classList.');
      currentDynamicClass = '';
    }
  };

  document.addEventListener('DOMContentLoaded', updateBodyClass);


function reloadScripts() {
  updateBodyClass();
  bindEventHandlers();
  playAutoplayVideos();

  if (!$("#fullpage").length) {
    fullPageDestroy();
  }

  destroyLightGallery();
  if ($('.slider-project').length) {
    initializeLightGallery();
  }
}

swup.hooks.on('content:replace', reloadScripts);