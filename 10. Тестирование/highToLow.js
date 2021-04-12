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
		let [operator1, operand, operator2] = operation.split(' ');
		const possibleOperands = ['+', '-', '*', '**', '%', '/'];
		if (possibleOperands.includes(operand)) {
			if (!this.methods[operand] || isNaN(operator1) || isNaN(operator2)) {
				return NaN
			} else {
				this.history.push(operation)
				return this.methods[operand](+operator1, +operator2);
			}
		} else {
			console.log (`${operand} operand`)
		}
	}
	showOperations() {
		return this.methods;
	}
	showHistory() {
		return this.history;
	}
	clearHistory() {
		this.history = [];
		return 'history is clear'
	}
}

let calculator = new Calculator;

const addition = (a, b) => a + b;
const substraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;

calculator.addOperation('+', addition)
calculator.addOperation('-', substraction)
calculator.addOperation('*', multiplication)
calculator.addOperation('/', division)

console.log(calculator.performOperation('2 + null'))

//=================================================ticketSales

class TicketSales {
	constructor() {
		this.events = {
			'Movie42': 300
		};
		this.storage = 0;
		this.tickets = {
			'123456': 300,
		};
		this.id = (min = 500000, max = 999999) => {
			min = Math.ceil(min);
			max = Math.floor(max);
			let generatedID = Math.floor(Math.random() * (max - min)) + min;
			return generatedID;
		};
	};
	getEvents() {
		return this.events;
	};
	getMoneyStorage() {
		return this.storage;
	};
	showTickets() {
		return this.tickets;
	};
	createEvent(name, cost) {
		if (typeof (name) !== 'string') {
			return 'Something went wrong'
		}
		this.events[name] = cost;
		return `You've created event ${name} which costs ${cost} `
	};
	buyTicket(name) {
		if (this.events.hasOwnProperty(name)) {
			this.storage += this.events[name];
			let id = this.id();
			this.tickets[id] = this.events[name];
			return `You've bought a ticket id ${id}`
		} else {
			return `There is no such event`
		}
	};
	returnTicket(id) {
		this.storage -= this.tickets[id];
		delete this.tickets[id];
		return `You've returned a ticket for ${id}`;
	}
}

let ticketWindow = new TicketSales;

// console.log(ticketWindow.createEvent('Mad', 300));
// console.log(ticketWindow.createEvent('Good', 300));
// console.log(ticketWindow.buyTicket('Mad'));
// console.log(ticketWindow.buyTicket('Good'));
// console.log(ticketWindow.getEvents());
// console.log(ticketWindow.getMoneyStorage());
// console.log(ticketWindow.showTickets());
// console.log(ticketWindow.returnTicket('123456'));
// console.log(ticketWindow.getMoneyStorage());
// console.log(ticketWindow.showTickets());