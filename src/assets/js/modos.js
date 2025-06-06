export default function modos() {
  const modosButtons = document.querySelectorAll("#modos [data-modo]");
  const modoAtual = localStorage.getItem("modo");
  document.body.classList.remove("escuro", "alternativo");
  if (modoAtual) {
    document.body.classList.add(modoAtual);
  }
  modosButtons.forEach((button) => {
    button.classList.remove("active");

    if (button.dataset.modo === modoAtual) {
      button.classList.add("active");
    }

    if (!modoAtual && button.dataset.modo === "padrao") {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      modosButtons.forEach((button) => {
        button.classList.remove("active");
      });
      button.classList.add("active");
      document.body.classList.remove("escuro", "alternativo");
      if (button.dataset.modo === "padrao") {
        localStorage.removeItem("modo");
        return;
      } else if (button.dataset.modo === "escuro") {
        document.body.classList.add("escuro");
        localStorage.setItem("modo", "escuro");
      } else if (button.dataset.modo === "alternativo") {
        document.body.classList.add("alternativo");
        localStorage.setItem("modo", "alternativo");
      }
    });
  });
}
