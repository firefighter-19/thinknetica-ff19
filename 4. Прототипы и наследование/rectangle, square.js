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
    this.squared = function (a,b) {
        if (a === b) {
            return `${a} is length, ${b} is width`
        }
        return `It's not a squad`
    }
}

function Rectangle() {
    this.rectangle = function (a,b) {
        if (a !== b) {
            return `${a} is length, ${b} is width`
        }
        return `It's not a rectangle`
    }
}

Square.prototype = new Calculate();
Rectangle.prototype = new Square();

let mathCalc = new Rectangle();

console.log (mathCalc.perimeter(2,2))
console.log (mathCalc.squared(2,2))
console.log (mathCalc.square(2,2))
console.log (mathCalc.rectangle(2,3))
