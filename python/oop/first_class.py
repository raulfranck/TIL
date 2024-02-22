
class Item:
    # If i want instancied the class without the params to my constructor
    # i can use = None to set default value in my constructor.
    def __init__(self, name, price, quantity):
        self.price = price
        self.quantity = quantity
        print(f"An instance created: {name} {price} {quantity}")
        
    def calculate_total_price(self):
        return self.price * self.quantity

item1 = Item(name="Phone", price=100, quantity=5)
# item1.name = "Phone"
# item1.price = 100
# item1.quantity = 5

item2 = Item("Laptop", 1000, 3)
# item2.name = "Laptop"
# item2.price = 1000
# item2.quantity = 3
