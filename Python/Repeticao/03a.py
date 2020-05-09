#Validar nome com mais que três caracteres

nome = ''

while (len(nome) <= 3):
    print("Nome deve ter no mínimo três caracteres")
    nome = input("Digite o seu nome: ")

if (len(nome) >= 3):
    print("Nome ok")
