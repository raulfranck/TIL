
class Item:
    def __init__(self, name, price, quantity):
        # Run validations to the received arguments
        assert price >= 0, f"Price {price} is not greater than or equal to zero"
        assert price >= 0
        
        # Assign to self object
        self.name = name
        self.price = price
        self.quantity = quantity
        print(f"An instance created: {name} {price} {quantity}")
        
    def calculate_total_price(self):
        return self.price * self.quantity
        # return x * y

item1 = Item(name="Phone", price=10, quantity=5)
# item1.name = "Phone"
# item1.price = 100
# item1.quantity = 5

item2 = Item("Laptop", 1000, 3) 
# item2.name = "Laptop"
# item2.price = 1000
# item2.quantity = 3

print(item1.calculate_total_price())
print(item2.calculate_total_price())

# print(item1.calculate_total_price(item1.price, item1.quantity)) As passing params
# print(item2.calculate_total_price(item2.price, item2.quantity)) As passing params

