function Calc() {
    this.methods = {
      };
    
    this.operation = function (str) {

        let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2]

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return this.methods[op](a, b);
    };

    this.addOperation = function(name, func) {
        this.methods[name] = func;
      };
}

let calculator = new Calc();

calculator.addOperation('+', (a, b) => a + b)
console.log(calculator.operation('1 + 2'))
calculator.addOperation('/', (a, b) => a / b)
console.log(calculator.operation('2 / 2'))