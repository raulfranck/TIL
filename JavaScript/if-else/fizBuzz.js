// Programa que 
// Divisivel por 3 => Fizz
// Divisivel por 5 => Buzz
// Divisivel por 3 e 5 => FizzBuzz
// Não é divisivel por 3 e 5 => entrada 
// Não é número => 'Não é numero'

const resultado = fizzBuzz(20);
console.log(resultado);

function fizzBuzz(entrada) {
    if ( typeof entrada !== 'number')
        return 'Não é um número';
    if ((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'FizzBuzz';
    if ( entrada % 3 === 0)
        return 'Fizz';
    if ( entrada % 5 === 0)
        return 'Buzz';
    
    return entrada;
}