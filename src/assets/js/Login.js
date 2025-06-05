document.getElementById("togglePassword").addEventListener("click", function () {
  const senhaInput = document.getElementById("senha");
  const tipoAtual = senhaInput.getAttribute("type");

  if (tipoAtual === "password") {
    senhaInput.setAttribute("type", "text");
    this.textContent = "Ocultar";
  } else {
    senhaInput.setAttribute("type", "password");
    this.textContent = "Mostrar";
  }
});
