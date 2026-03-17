const themeToggle = document.querySelector(".theme-toggle");
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
/* =========================
   THEME TOGGLE
========================= */

if (themeToggle) {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.body.classList.add("light");
  }

  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.removeItem("theme");
    }
  });
}            

/* =========================
   PROJECT FILTER
========================= */

function filterProjects(filterValue) {
  projectCards.forEach(function (project) {
    const category = project.dataset.category;

    if (category === filterValue) {
      project.style.display = "flex";
    } else {
      project.style.display = "none";
    }
  });
}

if (filterButtons.length > 0 && projectCards.length > 0) {
  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const filterValue = button.dataset.filter;

      filterButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      button.classList.add("active");
      filterProjects(filterValue);
    });
  });

  const activeButton = document.querySelector(".filter-btn.active");

  if (activeButton) {
    filterProjects(activeButton.dataset.filter);
  }
}


const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");
const panelLinks = document.querySelectorAll(".mobile-panel a");
const menuBackdrop = document.querySelector(".menu-backdrop");

function openMenu() {
  navbar.classList.add("menu-open");
  document.body.classList.add("menu-open");
  menuToggle.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  navbar.classList.remove("menu-open");
  document.body.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", function () {
  const isOpen = navbar.classList.contains("menu-open");

  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

menuBackdrop.addEventListener("click", closeMenu);

panelLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    closeMenu();
  });
});



const siteHeader = document.querySelector(".site-header");

let lastScrollY = window.scrollY;
const scrollThreshold = 120;
const scrollTolerance = 6;

window.addEventListener("scroll", function () {
  const currentScrollY = window.scrollY;
  const scrollDifference = currentScrollY - lastScrollY;

  if (Math.abs(scrollDifference) < scrollTolerance) {
    return;
  }

  if (currentScrollY <= scrollThreshold) {
    siteHeader.classList.remove("is-hidden", "is-scrolled");
    lastScrollY = currentScrollY;
    return;
  }

  siteHeader.classList.add("is-scrolled");

  if (currentScrollY > lastScrollY) {
    siteHeader.classList.add("is-hidden");
  } else {
    siteHeader.classList.remove("is-hidden");
  }

  lastScrollY = currentScrollY;
});