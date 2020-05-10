// Switch..case

// Imaginando um cenário de permissão onde:

let permissao; // podemos ter usuario, gerente e supervisor
permissao = 'supervis'


switch (permissao) {
    case 'usuario':
        console.log("Usuário Comum");
        break; // Quebra o case específico depois que já temos as condições 

    case 'gerente':
        console.log("Permissao para gerente");
        break;

    case 'supervisor':
        console.log("Permissao para supervisor");
        break;

        default: 
        console.log("Usuariod esconhecido");
}