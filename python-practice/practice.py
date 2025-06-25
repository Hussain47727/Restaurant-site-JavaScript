class Calculator:
    def add(self, a, b):
        return a + b

    def subtract(self, a, b):
        return a - b

# Creating object of Calculator
calc = Calculator()

# Using the methods
print("Addition:", calc.add(10, 5))       # Output: 15
print("Subtraction:", calc.subtract(10, 5))  # Output: 5
