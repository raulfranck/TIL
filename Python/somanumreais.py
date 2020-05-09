print("Digite cinco numeros reais para obter a soma e a média deles")
total = 0
valores = 0
while valores <= 4:
    valores = valores + 1

    soma = float(input("Digite um numero: "))

    total = total + soma
    media = total / 5

print("A soma dos valores é: ", total)
print("A média dos valores é: ", media)