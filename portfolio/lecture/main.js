"use strict";

const navbar = document.querySelector("#navbar");
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const skills = document.querySelector("#skills");
const work = document.querySelector("#work");
const testimonials = document.querySelector("#testimonials");
const contact = document.querySelector("#contact");

// navbar가 top에 올라가면 background-color = transparent
const navbarHeight = navbar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  if (navbarHeight < scrollY) {
    navbar.classList.add("color--dark");
  } else {
    navbar.classList.remove("color--dark");
  }
});

// handle scolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (e) => {
  const target = e.target;
  const dataLink = target.dataset.link;
  scrollIntoView(dataLink);
});

//  handle click on "contact me" button on home
const contactBtn = document.querySelector(".home__contact");
contactBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

// Make home slowly fad to transparent as the window scrolls down
const homeHeight = home.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const homeContainer = document.querySelector(".home__container");

  homeContainer.style.opacity = 1 - scrollY / homeHeight;
});

// Show "arrow up" buttonw when scrolling down
const arrowUp = document.querySelector(".arrow-up");
window.addEventListener("scroll", () => {
  if (scrollY + navbarHeight > homeHeight) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
