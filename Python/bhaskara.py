# Faça um programa que encontre as duas raizes de uma equação de segundo grau.


import math

a = float(input("Digite o valor de a: "))
b = float(input("Digite o valor de b: "))
c = float(input("Digite o valor de c: "))

d = b ** 2 - 4 * a * c

print(d)

if d > 0: 
    delta = math.sqrt(d)
    print(delta)
    
    x1 = (-b + delta) / (2 * a)
    x2 = (-b - delta) / (2 * a)

    print("A primeira raiz é: ", x1)
    print("A segunda raiz é: ", x2)

else: 
    print("Delta é negativo")

    if delta == 0:
         x1 = (-b + delta) / (2 * a)

         print(x1)
    