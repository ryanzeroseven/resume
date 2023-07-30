const allLinks = document.querySelectorAll("a[href^='#']");
console.log(allLinks);
// "a[href^='#']" so that external links like emailto and tel still work

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    // console.log(href);

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile navigation

    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

// SCROLL TO TOP BUTTON

// Get the side nav:
let sidenav = document.getElementById("side-nav");

// When the user scrolls down 400px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    sidenav.style.display = "block";
  } else {
    sidenav.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Hide side nav when reaching footer
const hideSidenav = document.querySelectorAll(".footer");
const scrollObserverFooter = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("z-index-top");
    } else {
      entry.target.classList.remove("z-index-top");
    }
  });
});
hideSidenav.forEach((el) => scrollObserverFooter.observe(el));

/* SCROLL ANIMATION FOR PROJECT SECTION */
// AURORA PROJECT
const projectCardIcs = document.querySelectorAll(".portfolio-item--ics");
const scrollObserverIcs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-div-ics");
    } else {
      entry.target.classList.remove("animate-div-ics");
    }
  });
});

projectCardIcs.forEach((el) => scrollObserverIcs.observe(el));

// OMNIFOOD PROJECT

const projectCardOmni = document.querySelectorAll(".portfolio-item--omnifood");
const scrollObserverOmni = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-div-omni");
    } else {
      entry.target.classList.remove("animate-div-omni");
    }
  });
});

projectCardOmni.forEach((el) => scrollObserverOmni.observe(el));

// CERTIFICATES

const certRapid = document.querySelectorAll(".cert-link");
const scrollObserverRapid = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-roll-cert");
    } else {
      entry.target.classList.remove("animate-roll-cert");
    }
  });
});

certRapid.forEach((el) => scrollObserverRapid.observe(el));

// Set current year

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent = currentYear;

// Sticky navigaation

const sectionHeroEl = document.querySelector(".section-hero");

const obsSticky = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-1px",
  }
);
obsSticky.observe(sectionHeroEl);

// Mobile menu

const headerEl = document.querySelector(".header");
const btnNavEl = document.querySelector(".btn-mobile-nav");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// ACCORDION

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
