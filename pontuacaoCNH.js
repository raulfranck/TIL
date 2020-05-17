// Velocidade maxima de 70 km/h
// A cada 5 km acima do limite acrescentar 1 ponto.
// Math.floor para arrednodar a numeração
// Caso ultrapassar 12 pontos suspeção da carteira.


const velocidade = verificarVelocidade(92);
console.log(velocidade)

function verificarVelocidade(vel) {
    if (vel <= 70) {
        console.log('Ok');
    }
    
    else {
        const points = Math.floor(((vel - 70) / 5));
            if (points >= 12) {
                console.log('Carteira suspensa')
            }
            else {
                console.log('Pontos: ', points)
            }
    }

}
