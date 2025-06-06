export default function modos() {
  const modosButtons = document.querySelectorAll("#modos [data-modo]");

  modosButtons.forEach((button) => {
    button.addEventListener("click", () => {
      modosButtons.forEach((button) => {
        button.classList.remove("active");
      });
      button.classList.add("active");
      document.body.classList.remove("modo-color-1", "modo-color-2");
      if (button.dataset.modo === "padrao") {
        return;
      } else if (button.dataset.modo === "escuro") {
        document.body.classList.add("modo-color-2");
      } else if (button.dataset.modo === "alternativo") {
        document.body.classList.add("modo-color-1");
      }
    });
  });
}
