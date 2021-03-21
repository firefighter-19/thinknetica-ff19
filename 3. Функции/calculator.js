function Calc() {

	this.methods = {
	};

	let operations = [];

	this.history = function () {
		return operations;
	}

	this.clearHistory = function () {
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
		operations.push({ operation: op, operands: a, b })
		return this.methods[op](a, b);

	};

	this.addOperation = function (name, func) {
		this.methods[name] = func;
	};
}

const addition = (a, b) => a + b;
const substraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;

let calculator = new Calc();


calculator.addOperation('+', addition)
calculator.addOperation('-', substraction)
calculator.addOperation('*', multiplication)
console.log(calculator.operation('2 + 2'))
console.log(calculator.methods)
console.log(calculator.history())
console.log(calculator.clearHistory())

