# Faça um programa que leia um nome de usuário e a sua senha e não aceite a 
# senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

usuario = str(input("Digite seu usuário: "))
senha = input("Digite a sua senha: ")

while (usuario == senha):
    print("Sua senha não pode ser igual ao usuário, digite outra senha")
    senha = input("Digite a sua senha: ")

else:
    print("Senha cadastrada com sucesso")
