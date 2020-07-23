// Dclarando globalmente uma função ou objeto

const pi = 3.14

console.log(global.pi) // Não é possível acessar o global dessa forma

global.pi = 3.1

global.obj = {
  nome: "Olaa tudo bem ?",
  email: "raul.franck"
}