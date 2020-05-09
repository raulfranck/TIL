print("Digite uma sequência de valores e digite zero para parar: ")
soma = 0

valor = 1
while valor != 0:
    valor = int(input("Digite um valor para ser somado: "))

    soma = soma + valor
    
print("A soma dos valores digitados é: ", soma)
    