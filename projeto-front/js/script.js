let listaCarros = [];

function carregarCarros() {
  let dadosSalvos = localStorage.getItem("carrosGaragem");
  if (dadosSalvos !== null) {
    listaCarros = JSON.parse(dadosSalvos);
  } else {
    listaCarros = [
      { modelo: "Fusca 1300", marca: "Volkswagen", ano: "1968", cor: "Azul" },
      { modelo: "Opala SS", marca: "Chevrolet", ano: "1974", cor: "Laranja" },
      { modelo: "Mustang Fastback", marca: "Ford", ano: "1969", cor: "Vermelho" }
    ];
  }
  mostrarCarros();
}

function salvarCarros() {
  localStorage.setItem("carrosGaragem", JSON.stringify(listaCarros));
}

function mostrarCarros() {
  let corpoTabela = document.getElementById("tabela-corpo-carros");
  if (!corpoTabela) {
    return;
  }

  corpoTabela.innerHTML = "";

  for (let i = 0; i < listaCarros.length; i++) {
    let carro = listaCarros[i];
    let linha = document.createElement("tr");

    let celulaModelo = document.createElement("td");
    celulaModelo.textContent = carro.modelo;

    let celulaMarca = document.createElement("td");
    celulaMarca.textContent = carro.marca;

    let celulaAno = document.createElement("td");
    celulaAno.textContent = carro.ano;

    let celulaCor = document.createElement("td");
    celulaCor.textContent = carro.cor;

    let celulaAcao = document.createElement("td");
    let botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.className = "btn btn-danger btn-sm";
    botaoExcluir.onclick = function() {
      removerCarro(i);
    };

    celulaAcao.appendChild(botaoExcluir);

    linha.appendChild(celulaModelo);
    linha.appendChild(celulaMarca);
    linha.appendChild(celulaAno);
    linha.appendChild(celulaCor);
    linha.appendChild(celulaAcao);

    corpoTabela.appendChild(linha);
  }
}

function adicionarCarro(evento) {
  evento.preventDefault();

  let modelo = document.getElementById("cad-modelo").value;
  let marca = document.getElementById("cad-marca").value;
  let ano = document.getElementById("cad-ano").value;
  let cor = document.getElementById("cad-cor").value;

  if (modelo === "" || marca === "" || ano === "" || cor === "") {
    alert("Por favor, preencha todos os campos do carro!");
    return;
  }

  let novoCarro = {
    modelo: modelo,
    marca: marca,
    ano: ano,
    cor: cor
  };

  listaCarros.push(novoCarro);
  salvarCarros();
  mostrarCarros();

  document.getElementById("form-cadastro-carro").reset();
  alert("Carro antigo cadastrado com sucesso!");
}

function removerCarro(indice) {
  let confirmacao = confirm("Deseja realmente excluir este carro?");
  if (confirmacao === true) {
    listaCarros.splice(indice, 1);
    salvarCarros();
    mostrarCarros();
  }
}

document.addEventListener("DOMContentLoaded", function() {
  carregarCarros();

  let formulario = document.getElementById("form-cadastro-carro");
  if (formulario) {
    formulario.addEventListener("submit", adicionarCarro);
  }
});
