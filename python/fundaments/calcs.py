import math

# Return the area of rectangle, given base and heitgh values
def rectangle_area(base, height):
    return base * height 

print(rectangle_area(10, 10))

# Return the perimeter of triangle given three values
def triangle_p(a1, a2, a3):
    return a1 + a2 + a3

print(triangle_p(10, 2, 4))

# Write a program in Python that calculates the volume of a cylinder, given the value of the radius and height
# V = π r² h

def cylinder_volume(radius, height):
    return math.pi * radius ** 2 * height

print(cylinder_volume(4, 10))

# Write a Python program that calculates the module of a number
def module_number(n1, n2):
    return n1 % n2

print(module_number(11, 3))