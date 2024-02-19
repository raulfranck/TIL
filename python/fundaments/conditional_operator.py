'''
    Talk about principals operators to conditional logic with python
'''
n1 = n2 = 0.0

n1 = float(input('Digite a primeira nota: '))
n2 = float(input('Digite a segunda nota: '))

media = (n1 + n2) / 2

if media >= 7:
    print('Aprovado')
elif media >= 5:
    print('Recuperacao')
else:
    print('Reprovado')
    
print('Nota: ', media)