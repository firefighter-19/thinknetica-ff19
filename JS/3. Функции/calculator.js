function Calc() {

    this.methods = {
    };

    let operations = [];

    this.history = function() {
        return operations;
    }

    this.clearHistory = function() {
        operations = [];
        return operations;
    }

    this.operation = function (str) {

        let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2]
        
    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        operations.push({operation: op, operands: a,b})
        return this.methods[op](a,b);

    };

    this.addOperation = function(name, func) {
        this.methods[name] = func;
    };
}

let calculator = new Calc();

calculator.addOperation('+', (a, b) => a + b)
calculator.addOperation('/', (a, b) => a / b)
console.log(calculator.operation('2 / 2'))
calculator.operation('1 + 2');

console.log(calculator.history())
console.log(calculator.clearHistory())

