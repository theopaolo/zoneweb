gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText);

function animateText(selector, timeline) {
  const mySplitText = new SplitText(selector, { type: "words,chars" });
  const chars = mySplitText.chars;

  timeline.from(chars, {
    duration: 1.2,
    opacity: 0,
    ease: "back",
    stagger: 0.0025,
  });
}

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
    let apropos = gsap.timeline({});
    animateText(".section-principal", apropos);
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
