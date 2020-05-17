// Função que lê dois valores e retorna o maior no cosonle.

let maxValor = max(11,5);
console.log(maxValor);

function max(n1, n2) {

    if (n1 > n2) 
        return n1;
    else return n2;
}     


// Ou simplificando o código: 

let maxValor1 = max1(10,15);
console.log(maxValor1)

function max1(n1, n2) {
    return n1 > n2 ? n1: n2;
}


// Visto que assim podemos retirar o looping e usar apenas o return.