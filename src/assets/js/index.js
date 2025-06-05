// importando o menu mobile de outro arquivo
import carousel from "./carousel.js";
import menuMobile from "./menuMobile.js";

// chamando a função do menu mobile
menuMobile();

// Chamando o carousel
carousel();

const buttonUpPage = document.getElementById("buttonUpPage");

buttonUpPage.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    buttonUpPage.style.bottom = "1rem";
  } else {
    buttonUpPage.style.bottom = "-100%";
  }
});
