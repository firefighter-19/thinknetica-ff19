//С помощью прототипа реализовать структуру "Квадрат" которая будет расширять структуру "Прямоугольник", должна быть возможность задавать размеры обеим фигурам и получать их площадь и периметр
function Calculate() {
    this.getArea = function() {
        return this.width * this.length;
    },
    this.getPerimeter = function() {
        return (this.width + this.length) * 2;
    }
}

function Square(item) {
    this.width = item;
    this.length = item;
}

function Rectangle(width, length) {
    this.width = width;
    this.length = length;
}

Square.prototype = new Calculate();

const square = new Square(2);

console.log(square.getArea())
console.log(square.getPerimeter())

Rectangle.prototype = new Square();

const rectangle = new Rectangle(2,3);

console.log(rectangle.getArea())
console.log(rectangle.getPerimeter())
