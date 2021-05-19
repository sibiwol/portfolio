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
  // if (dataLink == null) {
  //   return;
  // }
  navbarMenu.classList.remove("open");
  scrollIntoView(dataLink);
  selectNavItem(target);
});

// Navbar toogle button for small screen
const toogleBtn = document.querySelector(".navbar__toggle-btn");
toogleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
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

  navbarMenu.classList.remove("open");
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

// Handle click on the "arrow up" button
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

// Sort projects
const workBtnContainer = document.querySelector(".work__categories");
const projectsContiner = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

workBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;

  // Remove selection from the previous item and select the news
  const active = document.querySelector(".category__btn.selected");
  const target =
    e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;

  active.classList.remove("selected");
  target.classList.add("selected");

  projectsContiner.classList.add("animation-out");
  setTimeout(() => {
    projects.forEach((project) => {
      const type = project.dataset.type;

      if (filter === "*" || filter === type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });

    projectsContiner.classList.remove("animation-out");
  }, 300);
});

// 1. 모든 섹션 요소들과 메뉴 아이템을 가지고 온다.
// 2. IntersectionObserver를 이용해서 머든 섹션들을 관찰한다.
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.

const sectionIds = [
  "#home",
  "#about",
  "#skills",
  "#work",
  "#testimonials",
  "#contact",
];
const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) =>
  document.querySelector(`[data-link="${id}"]`)
);

let selectedNavIndex;
let selectedNavItem = navItems[0];

function selectNavItem(selected) {
  selectedNavItem.classList.remove("active");
  selectedNavItem = selected;
  selectedNavItem.classList.add("active");
}

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
  selectNavItem(navItems[sectionIds.indexOf(selector)]);
}

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.4,
};
const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting && entry.intersectionRatio > 0) {
      const index = sectionIds.indexOf(`#${entry.target.id}`);

      // 스크롤링이 아래로 되어 페이지가 올라옴
      if (entry.boundingClientRect.y < 0) {
        selectedNavIndex = index + 1;
      } else {
        selectedNavIndex = index - 1;
      }
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach((section) => observer.observe(section));

window.addEventListener("wheel", () => {
  if (window.scrollY === 0) {
    selectedNavIndex = 0;
  } else if (
    Math.round(window.scrollY + window.innerHeight) >=
    document.body.scrollHeight
  ) {
    selectedNavIndex = navItems.length - 1;
  }
  selectNavItem(navItems[selectedNavIndex]);
});
