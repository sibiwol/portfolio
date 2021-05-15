"use strict";

const navbar = document.querySelector("#navbar");
const home = document.querySelector("#home");
const about = document.querySelector("#about");

// navbar가 top에 올라가면 background-color = transparent
window.addEventListener("scroll", () => {
  const navbarHeight = navbar.getBoundingClientRect().height;

  if (navbarHeight < scrollY) {
    navbar.classList.add("color--dark");
  } else {
    navbar.classList.remove("color--dark");
  }
});
