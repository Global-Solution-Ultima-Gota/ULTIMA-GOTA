document
  .getElementById("cadastroForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const cpf = document.getElementById("cpf").value.replace(/\D/g, "");
    const nascimento = new Date(document.getElementById("nascimento").value);
    const senha = document.getElementById("senha").value;
    const errorNascimento = document.getElementById("errorNascimento");
    const errorCPF = document.getElementById("errorCPF");

    errorNascimento.innerText = "";
    if (calcularIdade(nascimento) < 16) {
      errorNascimento.innerText = "Mínimo de 16 anos para se cadastrar.";
      return;
    }

    errorCPF.innerText = "";
    if (!validarCPF(cpf)) {
      errorCPF.innerText = "CPF inválido";
      return;
    }

    // Aqui colocamos todas as informações do usuário em um objeto. Após isso verificamos se o a key "usuarios" já existe no localStorage, se existir, adicionamos o usuário ao array de usuários, se não existir, criamos um novo array com o usuário.

    const usuario = {
      cpf,
      nome,
      email,
      telefone,
      nascimento: nascimento.toISOString().split("T")[0],
      senha,
    };
    const usuarios = localStorage.getItem("usuarios");
    if (usuarios) {
      const usuariosArray = JSON.parse(usuarios);
      usuariosArray.push(usuario);
      localStorage.setItem("usuarios", JSON.stringify(usuariosArray));
    } else {
      localStorage.setItem("usuarios", JSON.stringify([usuario]));
    }

    alert(
      "Cadastro feito com sucesso! Necessário fazer login para continuar. "
    );
    // Após o cadastro, redirecionamos para a página de login.
    setTimeout(() => {
      window.location.href = "/src/pages/login.html";
    }, 1000);
  });

function validarCPF(cpf) {
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  let soma = 0;
  for (let i = 0; i < 9; i++) soma += parseInt(cpf[i]) * (10 - i);
  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto != parseInt(cpf[9])) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(cpf[i]) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  return resto == parseInt(cpf[10]);
}

function calcularIdade(data) {
  const hoje = new Date();
  let Idade = hoje.getFullYear() - data.getFullYear();
  const mes = hoje.getMonth() - data.getMonth();

  if (mes < 0 || (mes === 0 && hoje.getDate() < data.getDate())) {
    Idade--;
  }
  return Idade;
}
