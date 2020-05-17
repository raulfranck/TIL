# Alert

 Abrir uma caixa de alerta para o usuário, caso ele confirme é redirecionado para outra página.
 
```
function moveon() {
    var pergunta = confirm("Podemos prosseguir?") // A váriavel recebe o comando confirm.
    if (pergunta) window.location = "http://google.com.br"; // Caso o usuário confirme a pergunta é redirecionado para o google.
}

setTimeout(moveon, 6000); // Executa a fução por um min.

```