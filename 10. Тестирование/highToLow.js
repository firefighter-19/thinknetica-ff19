//=================================================sort.items
const data = [-20, -10, 0, 10, 20, 30];

const fromHighToLow = arr => arr.sort((a, b) => a < b ? 1 : -1);

console.log(fromHighToLow(data))


//=================================================word.length

const fruits = ['orange', 'apple', 'banana', '']

const filterByLength = (array, minLength, maxLength) => array.filter(el => el.length <= maxLength || el.length === minLength)

console.log(filterByLength(fruits, 0, 5))

//=================================================caching

const cache = () => {
	let dataCache = {
		value: null,
		fromCache: false,
	};
	return function (a, b) {
		if (a ** b === dataCache.value) {
			return { value: dataCache.value, fromCache: true }
		}
		return { value: dataCache.value = a ** b, fromCache: dataCache.fromCache }
	}
}

let calculate = cache();

//=================================================moneyBox

function MoneyBox() {
	let amount = 0;
	this.addCoin = function () {
		return amount++
	};
	this.getAmount = function () {
		return amount;
	}
}

let moneyBox = new MoneyBox();

//=================================================calculator

class Calculator {
	constructor() {
		this.methods = {};
		this.history = [];
	}

	addOperation(command, func) {
		this.methods[command] = func;
	}

	performOperation(operation) {
		const [operator1, operand, operator2] = operation.split(' ');
		this.history.push(operation)
		return this.methods[operand](+operator1, +operator2);
	}

	showOperations() {
		return this.methods;
	}
	showHistory() {
		return this.history;
	}
}

const addition = (a, b) => a + b;
const substraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;

let calculator = new Calculator;

calculator.addOperation('+', addition)
calculator.addOperation('-', substraction)
console.log(calculator.performOperation('2 + 1'))
console.log(calculator.performOperation('2 + 4'))

console.log(calculator.showOperations())
console.log(calculator.showHistory())

