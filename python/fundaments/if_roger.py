question1 = input('Qual lado e melhor?: ')

if question1 == 'esquerda'.lower():
    question2 = input('Em cima ou em baixo?:')
    if question2 == 'cima':
        question3 = input('Para tras ou para frente?:')
        if question3 == 'tras':
            print('you win')
        else:
            print('Game Over')
    else:
        print('Game Over')
else:
    print('Game Over')
    