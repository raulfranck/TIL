
class Item:
    pay_rate = 0.8
    
    def __init__(self, name, price, quantity):
        # Run validations to the received arguments
        assert price >= 0, f"Price {price} is not greater than or equal to zero"
        assert price >= 0
        
        # Assign to self object
        self.name = name
        self.price = price
        self.quantity = quantity
        # print(f"An instance created: {name} {price} {quantity}")
        
    def calculate_total_price(self):
        return self.price * self.quantity
        
    def apply_discount(self):
         self.price = self.price * self.pay_rate
         return self.price

item1 = Item(name="Phone", price=1000, quantity=5)
item2 = Item(name="Laptop", price=1000, quantity=2)
item3 = Item(name="AirFryer", price=1000, quantity=10)

# Apply different discount to each item
item2.pay_rate = 0.7
item3.pay_rate = 0.6

print(item1.apply_discount())
print(item2.apply_discount())
print(item3.apply_discount())



