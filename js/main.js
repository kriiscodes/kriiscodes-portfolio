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