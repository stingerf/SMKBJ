'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

const sr = ScrollReveal({
  distance: '50px',
  duration: 1500,
  easing: 'ease-in-out',
  reset: true, // Animasi akan diulang saat scrolling
});

// Tambahkan animasi untuk elemen
sr.reveal('#hero-content', {
  origin: 'left',
  interval: 200,
});

sr.reveal('#hero-banner', {
  origin: 'left',
  delay: 400,
});

ScrollReveal().reveal('[data-sr="fade"]', { 
  duration: 1500, 
  opacity: 0 
});

ScrollReveal().reveal('[data-sr="slide-left"]', { 
  duration: 1500, 
  distance: '50px', 
  origin: 'left', 
  opacity: 0 
});

ScrollReveal().reveal('[data-sr="slide-right"]', { 
  duration: 1500, 
  distance: '50px', 
  origin: 'top', 
  opacity: 0 
});

ScrollReveal().reveal('[data-sr="slide-up"]', { 
  duration: 1500, 
  distance: '50px', 
  origin: 'bottom', 
  opacity: 0 
});

ScrollReveal().reveal('[data-sr="zoom-in"]', { 
  duration: 1500, 
  scale: 0.85, 
  opacity: 0 
});

ScrollReveal().reveal('[data-sr="fade-up"]', { 
  duration: 1500, 
  distance: '20px', 
  origin: 'bottom', 
  opacity: 0 
});

ScrollReveal().reveal('[data-sr="slide-up"]', {
  duration: 1500,
  distance: '50px',
  origin: 'bottom',
  opacity: 0
});

ScrollReveal().reveal('[data-sr="slide-left"]', {
  duration: 1500,
  distance: '50px',
  origin: 'left',
  opacity: 0
});

ScrollReveal().reveal('[data-sr="slide-right"]', {
  duration: 1500,
  distance: '50px',
  origin: 'bottom',
  opacity: 0
});

ScrollReveal().reveal('[data-sr="fade"]', {
  duration: 1500,
  opacity: 0
});

ScrollReveal().reveal('[data-sr="zoom-in"]', {
  duration: 1500,
  scale: 0.8,
  opacity: 0
});