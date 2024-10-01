// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "Manipulando o DOM - Victória I C Monte";
});

// Função para modificar as frases
function modificarFrases() {
  
  const frases = document.getElementsByClassName("mensagem2");

  // Define as novas frases
  const novasFrases = [
    "Modificando a frase 1",
    "Modificando a frase 2 ",
    "Modificando frase 3"
  ];

  // Usa um loop para modificar o texto de cada elemento da classe "mensagem2"
  for (let i = 0; i < frases.length; i++) {
    frases[i].textContent = novasFrases[i];
  }
}

// Adiciona um evento de clique para o botão que irá alterar as frases
document.getElementById("botao-alterar-frases").addEventListener("click", modificarFrases);
