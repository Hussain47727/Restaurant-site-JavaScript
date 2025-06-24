class Shape():
    def method(self):
        print('Area of shape')
class Circle(Shape):
    def __init__(self, radius):
       self.radius = radius
    def area(self):
        print("Circle area", 3.15 * self.radius * self.radius)

class Rectangle(Shape):
    def __init__(self, length, width):
        self.length = length
        self.width = width
    def area(self):
        print('Area of Rectangle :', self.length * self.width)

class Traingle(Shape):
    def __init__(self, base, height):
        self.base = base
        self.height = height
    def area(self):
        print("Area of Traingle :", 0.5 * self.base * self.height)

Shapes = [Circle(5), Rectangle(3 ,4), Traingle(3,5)]
for shape in Shapes:
    shape.area()
       