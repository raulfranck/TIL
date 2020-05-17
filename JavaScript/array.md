# Array

 Array é um conjunto de dados dentro de uma variável

```
let familia = ['Raul', 'Larissa', 'Talita', 'Wesley', 'Luiz'];

console.log(familia)
```

 Cada objeto dentro do array tem uma posição específica partido do 0.
    Para acessar basta

```
console.log(familia[4]);
```

 Obter a quantidade de objetos dentro do aerray

```
console.log(familia.length);
```

 Os objetos do array podem ser de qualquer tipo(Boolean, string, numbert)
    exemplo:

```
let arrayUsuario = ['Raul', 26, true, ];
```

 Para acessar um item do array:

```
let nome = arrayUsuario[0]
let idade = arrayUsuario[1]
let aprovadoOuNao = arrayUsuario[arrayUsuario.length-1]

console.log(nome)
console.log(idade)
console.log(aprovadoOuNao)
```

 Adicionar um item ao final do arrayUsuario

```
let altura = arrayUsuario.push(1.80)
```

 Remover item do final do arrayUsuario

```
let ultimo = arrayUsuario.pop()

console.log(arrayUsuario)
```

```
let vazio = [] // Cria  um array vazio

vazio.push(1,2,3); // Adiciona valores ao array vazio
vazio.reverse(); // Inverte a posição dos objetos dentro do array
```