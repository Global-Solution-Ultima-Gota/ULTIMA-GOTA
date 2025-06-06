document.addEventListener("DOMContentLoaded", () => {
  const editarBtn = document.getElementById("editarPerfil");
  const inputs = document.querySelectorAll(".perfil_form input");

  let editando = false;

  editarBtn.addEventListener("click", () => {
    editando = !editando;

    inputs.forEach((input) => {
      input.disabled = !editando;
    });

    editarBtn.textContent = editando ? "Salvar" : "Editar";

    if (!editando) {
      alert("Dados salvos com sucesso!");
    }
  });

  // Seleção do Ratinho(Avatar)
  const avatares = document.querySelectorAll(".avatar");
  avatares.forEach((avatar) => {
    if (avatar.classList.contains("locked")) {
      return;
    }
    avatar.addEventListener("click", () => {
      avatares.forEach((a) => a.classList.remove("selecionado"));
      avatar.classList.add("selecionado");
    });
  });
});
