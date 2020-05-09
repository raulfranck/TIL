#Escreva um programa que converta temperatura Fahrenheit em Celsius, dada a informação do usuário.

tf = input("Digite uma temperatura em Fahrenheit: ")

tc = (float(tf) - 32) * 5 / 9
#float é utilizado para converter a variável de str para float.

print("A temperatura em Celsius é: ", tc)
