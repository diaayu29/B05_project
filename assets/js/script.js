const menuToggle = document.querySelector(".menu-icon");
const showNav = document.querySelector(".header-menu");
const closeNav = document.querySelector(".fa-times")

menuToggle.addEventListener("click", () => {
  showNav.classList.add("active");
  closeNav.classList.add("active");
});

closeNav.addEventListener("click", () => {
  showNav.classList.remove("active");
  closeNav.classList.remove("active");
})