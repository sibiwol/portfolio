"use strict";
const currentPage = document.querySelector(".current__page");

let circle = document.querySelector("circle");
let radius = circle.r.baseVal.value;
let circumference = radius * 2 * Math.PI;

new fullpage("#fullpage", {
  //이동
  menu: "#menu",
  lockAnchors: false,
  anchors: ["firstPage", "secondPage"],
  navigation: false,
  navigationPosition: "right",
  navigationTooltips: ["firstSlide", "secondSlide"],
  showActiveTooltip: false,
  slidesNavigation: false,
  slidesNavPosition: "bottom",

  //스크롤
  css3: true,
  scrollingSpeed: 700,
  autoScrolling: true,
  fitToSection: true,
  fitToSectionDelay: 1000,
  scrollBar: false,
  easing: "easeInOutCubic",
  easingcss3: "ease",
  loopBottom: false,
  loopTop: false,
  loopHorizontal: true,
  continuousVertical: true,
  continuousHorizontal: false,
  scrollHorizontally: false,
  interlockedSlides: false,
  dragAndMove: false,
  offsetSections: false,
  resetSliders: false,
  fadingEffect: false,
  normalScrollElements: "#element1, .element2",
  scrollOverflow: false,
  scrollOverflowReset: false,
  scrollOverflowOptions: null,
  touchSensitivity: 15,
  bigSectionsDestination: null,

  //접근성
  keyboardScrolling: true,
  animateAnchor: true,
  recordHistory: true,

  //디자인
  controlArrows: true,
  verticalCentered: true,
  sectionsColor: ["#2ac1bc", "#2ac1bc", "#2ac1bc", "#2ac1bc", "#2ac1bc"],
  paddingTop: "3em",
  paddingBottom: "10px",
  fixedElements: "#header, .footer",
  responsiveWidth: 0,
  responsiveHeight: 0,
  responsiveSlides: false,
  parallax: false,
  parallaxOptions: { type: "reveal", percentage: 62, property: "translate" },
  dropEffect: false,
  dropEffectOptions: { speed: 2300, color: "#F82F4D", zIndex: 9999 },
  cards: false,
  cardsOptions: { perspective: 100, fadeContent: true, fadeBackground: true },

  //맞춤 선택자
  sectionSelector: ".section",
  slideSelector: ".slide",

  lazyLoading: true,

  //사건(이벤트)
  onLeave: function (origin, destination, direction) {
    console.log(destination.index);

    if (destination.index === 2) {
      console.log(circle.dataset.value);
      setProgress(circle.dataset.value);
    }

    if (destination.anchor != "firstPage")
      return (navbar.style.visibility = "visible");
    if (destination.anchor === "firstPage")
      return (navbar.style.visibility = "hidden");

    if (destination.index === 1) return (currentPage.textContent = "");
    // currentPage.textContent = "우선 인사!";
  },
  afterLoad: function (origin, destination, direction) {},
  afterRender: function () {},
  afterResize: function (width, height) {},
  afterReBuild: function () {},
  afterResponsive: function (isResponsive) {},
  afterSlideLoad: function (section, origin, destination, direction) {},
  onSlideLeave: function (section, origin, destination, direction) {},
});

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}
