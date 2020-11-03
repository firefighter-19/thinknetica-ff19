//С помощью прототипа реализовать структуру "Квадрат" которая будет расширять структуру "Прямоугольник", должна быть возможность задавать размеры обеим фигурам и получать их площадь и периметр
function Calculate() {
    this.square = function(a,b) {
        return a * b;
    },
    this.perimeter = function(a,b) {
        return (a + b) * 2
    }
}

function Square() {
    //something
}

function Rectangle() {
    //something
}

Square.prototype = new Calculate();
Rectangle.prototype = new Calculate();

let mathCalc = new Square();


console.log (mathCalc.perimeter(2,2))
console.log (mathCalc.square(2,2))