const menuBtn = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");
const navBar = document.querySelector(".navbar");
const overlay = document.querySelector(".overlay");
const navItems = document.querySelectorAll(".nav-links a");

function openMenu() {
  navLinks.classList.add("open");
  navBar.classList.add("open");
  overlay.classList.add("active");
  menuBtn.classList.add("open");
}

function closeMenu() {
  navLinks.classList.remove("open");
  navBar.classList.remove("open");
  overlay.classList.remove("active");
  menuBtn.classList.remove("open");
}

menuBtn.addEventListener("click", () => {
  navLinks.classList.contains("open") ? closeMenu() : openMenu();
});

navItems.forEach((item) => {
  item.addEventListener("click", closeMenu);
});

document.addEventListener("click", (e) => {
  if (!navLinks.classList.contains("open")) return;
  if (navLinks.contains(e.target) || menuBtn.contains(e.target)) return;
  closeMenu();
});