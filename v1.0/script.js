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
  });
});
/* SCROLL SIDE NAV BAR */
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

// SCROLL TO SECTION BUTTONS
const about = document.getElementById("about");
function aboutFunction() {
  about.scrollIntoView();
}
const experience = document.getElementById("experience");
function expFunction() {
  experience.scrollIntoView();
}

const portfolio = document.getElementById("portfolio");
function portfolioFunction() {
  portfolio.scrollIntoView();
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
  entries.forEach(
    (entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-div-omni");
      } else {
        entry.target.classList.remove("animate-div-omni");
      }
    }
    // {
    //   // in the viewport
    //   root: document.querySelector("#portfolio"),
    //   threshold: 1.0,
    //   rootMargin: "0px",
    // }
  );
});

projectCardOmni.forEach((el) => scrollObserverOmni.observe(el));

// ACHIEVEMENTS

const achievement = document.querySelectorAll(".achievements");
const scrollObserverAcchievement = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-div-achievement");
    } else {
      entry.target.classList.remove("animate-div-achievement");
    }
  });
});

achievement.forEach((el) => scrollObserverAcchievement.observe(el));

// Set current year

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent = currentYear;
