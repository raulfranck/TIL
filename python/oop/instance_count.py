'''
    Using class atribute to count instances of a class
'''

class Person:
    instances_count = 0
    
    def __init__(self, name):
        self.name = name
        Person.instances_count += 1
        
person_larissa = Person('Larissa')
person_raul = Person('Raul')
person_lorena = Person('Lorena')
person_selma = Person('Selma')

print(Person.instances_count) # return the number instances of the class