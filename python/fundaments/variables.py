'''
    Variables:
'''

# Primitive types
var_name = "value" # string
number_name = 1 # int
number_name_float = 1.0 # float
state = True # bool
var = [1, 2, 3] # list


# Pass value to multiple variables
var_name, number_name, number_name_float = "value", 1, 1.0

# or pass the same value to multiple variables
var1 = var2 = var3 = "same_value"

# Type() function: Verify the type of variables
print(type(var_name))
print(type(number_name_float))
print(type(number_name))
print(type(state))
print(type(var1))
print(type(1+2j)) # Complex. Used to calculate complex numbers

# isInstance() function: Verify if a variable is an instance of a class

a = 10
b = 'string'

print('Instance verify', isinstance(a, int))
print('Instance verify', isinstance(b, int)) # false

print('Multiple type', isinstance(a, (int, float)))

a = 40
b = 3
result = a * b

print(result)

