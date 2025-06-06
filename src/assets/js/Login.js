document
  .getElementById("togglePassword")
  .addEventListener("click", function () {
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

// Primeiramente verificamos o evento de submit do formulário de login, após isso, pegamos o email e a senha do usuário, e verificamos se o usuário existe no localStorage(cache do navegador) a partir de uma função "find()" do JS que verifica se existe algum usuário com o email informado, se existir, verificamos se a senha está correta, se estiver, redirecionamos para a página de home.
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const usuarios = JSON.parse(localStorage.getItem("usuarios"));
    const usuarioExiste = usuarios.find((usuario) => usuario.email === email);

    if (!usuarioExiste) {
      alert("Usuário não encontrado");
      return;
    }

    if (usuarioExiste.senha !== senha) {
      alert("Senha incorreta");
      return;
    }
    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioExiste));
    window.location.href = "/src/pages/home.html";
  });
