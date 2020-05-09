# Função
 Uma função é declarada por 'function'
seguida entre parênteses dos parâmetros
em seguidaas declarações entre chaves "{}"

*Exemplo:* Função que reseta a cor de uma
pagina específica.

```let colorSite = "azul" ```   

```function resetColor() {
    colorSite = "";     
};```

chamando a função resetColor criada
anteriormente ele ja redefine o valor

``` resetColor();

console.log(colorSite)
```

 Trabalhando com parâmetros:

 ```
let corSite = "azul";

function resetaCor(cor,tonalidade) {
    corSite = cor + ' ' + tonalidade;
};

console.log(corSite);
resetaCor("vermelho", "escuro");
console.log(corSite);

```