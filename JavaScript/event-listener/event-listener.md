# Manipulando Eventos JavaScript

Dado o seguinte formulário em HTML:

`<form action="cadastro.php"> <label> Informe Seu nome: <input type="text" id="nameInput" /> <input type="submit" value="Registrar" /> </label> <br /> <br /> <span id="nameLength"></span> </form>`
Onde, quero que cada tecla digitada no input do tipo "text" apareça no contador a quantidade de teclas digitadas.

Em java Sript fica assim:

// Criando contador de caracteres em texto digitado por usuário.
``
window.addEventListener('load', start); // Esse comando define que o javaScript só vai rodar a função start quando todo html for carregado.

function start() {
// Função chamada depois do carregamento da página.
var nameInput = document.querySelector('#nameInput'); // Busca o conteudo do input com id="nameInput"
nameInput.addEventListener('keyup', countName);
}

function countName(event) {
var span = document.querySelector('#nameLength'); // Busca a tag <span> através do id="#nameLength"
var count = event.target.value;
span.textContent = count.length;
}

```

```
