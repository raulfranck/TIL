// If e Else

// Exemplificando:

// Se a hora for entre 06:00 e 12:00, exibir "Bom dia"
// Se for 12:00 até 18:00 exibir "Boa tarde"
// Se nao for nenhum, sera noite entao exibir "Boa noite"

let hora = 19;

if (hora <= 12 && hora >= 6) {
    console.log("Bom dia!");
}
else if (hora >= 12 && hora <= 18) {
    console.log("Boa tarde!")
}
else {
    console.log("Boa noite!")
}