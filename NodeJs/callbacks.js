// Obter usuario
// Obter o numero de telefone do usuario atraves do id
// Obter o endereço do usuario através do id


// Primeiro criar as funções separadamente....

function obterUsuario() {
  setTimeout(function () {
    return {
      id: 1,
      nome: 'Frederico',
      dataDeNascimento: new Date()  // Cria uma data.
    }
  }, 1000)

}

function obterTelefone(idUsuario) {
  setTimeout(() => {
    return {
      telefone: '1199002',
      ddd: 11
    }
  }, 2000);
}

function obterEndereco(idUsuario) {

}


const usuario = obterUsuario()
const telefone = obterTelefone(usuario.id)

console.log('usuario', usuario)
console.log('telefone', telefone)