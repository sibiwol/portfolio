"use strict";

const navbar = document.querySelector("#navbar");
const home = document.querySelector("#home");
const about = document.querySelector("#about");

window.addEventListener("scroll", () => {
  let navbarHeight = navbar.getBoundingClientRect().height;

  if (navbarHeight < scrollY) {
    navbar.style.backgroundColor = "#fe907d";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});
