gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText);

function animateText(selector, timeline) {
  console.log("animateText");
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
  console.log("handleProposPageAnimations");
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
  console.log("proposSplit");
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
  console.log("handleNavbarScroll");
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
  console.log("setupTriggerClick");
  $('.trigger').off("click").click(function() {
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
  console.log("setupMobileMenu");
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
  console.log("setupFullpage !!!");
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
  console.log("fullPageDestroy");
  fullpage_api.destroy('all');
}

function initializeFullpage() {
  console.log("initializing fullpage");
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

function bindEventHandlers() {
  console.log("bindEventHandlers");

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

  $(".conta")
  .off("click tap")
  .on("click tap", function () {
    fullpage_api.moveTo(5);
  });
}

$(document).ready(bindEventHandlers);

  const swup = new Swup();

  const pageOverlay = document.getElementById("page-transition-overlay");
  const loader = document.getElementById("loader");

  const heartbeat = gsap.timeline({ repeat: -1, yoyo: true });
  heartbeat
    .to(loader, { scale: 1.2, duration: 0.5, ease: "Power1.easeInOut" })
    .to(loader, { scale: 1, duration: 0.5, ease: "Power1.easeInOut" });

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


const bodyClasses = ["home", "rea", "propos", "projets", "amenagement"];

function updateBodyClass() {
  bodyClasses.forEach(cls => document.body.classList.remove(cls));
  const pageName = window.location.pathname.replace(/\/|\.html/gi, "");

  if(pageName === "index") {
    document.body.classList.add("home");
  } else {
    document.body.classList.add(pageName);
  }
}

function reloadScripts() {
  updateBodyClass();
  bindEventHandlers();
}

swup.hooks.on('content:replace', reloadScripts);