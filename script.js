const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

const categoriesDropdown = document.querySelector(".nav-links li:first-child");
categoriesDropdown.addEventListener("click", () => {
  categoriesDropdown.querySelector(".dropdown").classList.toggle("show");
});


