# Modulos

 Se eu tenho uma varável do tipo:

```jsx
let funcaoSoma = function(a,b) {

return a + b;

}
```

 Posso exportar essa função para outro arquivo em qualquer pasta usando:

```jsx
module.exports = soma;
```

 No arquivo principal que vai receber essa função basta chamar esse modulo assim:

```jsx
var = require("./diretorio") // Que sera recebido pela variável
```

 Em seguida se eu chamar

```jsx
console.log(soma(5, 2));
```

*resultado: 7*