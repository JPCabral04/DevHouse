const menu = document.getElementById("menu");
const btnClose = document.getElementById("btn-close");
const btnOpen = document.getElementById("btn-open");

function closeMenu() {
  menu.classList.remove("flex");
  menu.classList.add("hidden");
}

function openMenu() {
  menu.classList.remove("hidden");
  menu.classList.add("flex");
}