# Faça um programa que diga se o usuário é nube ou não em um game pedindo quanto tempo de jogo ele já jogou.
# sendo mais que 90 min um profissional e menos que 90 min um nube

tempoJogado = int(input("Quanto tempo já jogamos? "))

if tempoJogado >= 90:
    print("Você não é mais nube")

else:
    print("você ainda é nube")