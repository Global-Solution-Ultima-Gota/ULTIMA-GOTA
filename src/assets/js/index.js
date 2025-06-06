// importando o menu mobile de outro arquivo
import carousel from "./carousel.js";
import menuMobile from "./menuMobile.js";
import modos from "./modos.js";
import scrollToTop from "./scrollToTop.js";
const headerButtons = document.querySelector("#headerNav .buttons");
const perfilContainer = document.querySelector("#headerNav .usuario-logado");
const nomeUsuario = document.querySelector("#nomeUsuario");
const avatarUsuario = document.querySelector("#headerNav #avatarUsuario");
const usuarioLogadoMenu = document.querySelector(
  "#headerNav .usuario-logado-menu"
);
const sair = document.querySelector("#sair");

// chamando a função do menu mobile
menuMobile();

// Chamando o carousel
carousel();

// Modos
modos();

const buttonUpPage = document.getElementById("buttonUpPage");

buttonUpPage.addEventListener("click", scrollToTop);

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    buttonUpPage.style.bottom = "1rem";
  } else {
    buttonUpPage.style.bottom = "-100%";
  }
});

if (localStorage.getItem("usuarioLogado")) {
  perfilContainer.classList.add("show");
  headerButtons.classList.add("hidden");
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

  nomeUsuario.textContent = usuarioLogado.nome;
  avatarUsuario.src = `/src/assets/imgs/avatar/${usuarioLogado.avatar}`;
} else {
  headerButtons.classList.remove("hidden");
  perfilContainer.classList.remove("show");
}

nomeUsuario.addEventListener("click", () => {
  usuarioLogadoMenu.classList.toggle("show");
});

sair.addEventListener("click", () => {
  localStorage.removeItem("usuarioLogado");
  window.location.href = "/index.html";
});
