
#Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o 
# valor seja inválido e continue pedindo até que o usuário informe um valor válido.

nota = 1

while (nota <= 10) and (nota >= 0):
    nota = int(input("Digite a nota de zero a dez: "))

else:
    print("Esta nota não existe")