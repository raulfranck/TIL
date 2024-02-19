'''
    How to use the syntax print()
'''

# Position args
message = 'print'
type = 'function'
print('how to use ', message, '-', type)

#concat
name = input("What is your name ? ")
print('Hello ' + name + ' Welcome to course.')

#How to continue in the same lign of print the terminal
# in this case, if you use end properties, the text 'same line' should be render
# in the same line of the text 'seccond line used'
print('One line used')
print('Seccond line used', end=' ')
print('same line')

name = 'Raul'
years = 30
weight = 75.00
number = 1.23456678

# Interpolation string with python
formatted_message = 'His name is {0} and he has {1} years old'.format(name, years)
print(formatted_message)


# use F string, formatted literal string
print(f'Hello, my name is {name}, and my weight is {weight}')

#Format float number
print(f'Format this number: {number:.2f}')

# Print table
print(f'name: {name}\tIdade: {years}')