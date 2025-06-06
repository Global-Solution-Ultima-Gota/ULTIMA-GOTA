export default function menuMobile() {
  const menuMobile = document.querySelector("#toggleMenu");
  const menu = document.querySelector("#headerNav");
  const closeMenu = document.querySelector("#closeMenu");
  const links = document.querySelectorAll(".header_menu_item");

  menuMobile.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  closeMenu.addEventListener("click", () => {
    menu.classList.remove("active");
  });

  document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !menuMobile.contains(event.target)) {
      menu.classList.remove("active");
    }
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
}
