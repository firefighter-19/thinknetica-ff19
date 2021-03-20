//=================================================word.length

describe('Filter array from high to low', () => {
	it('Should return array as a result', () => assert.isArray(data));
	it('Should return from high to low', () => assert.deepEqual(fromHighToLow(data), [30, 20, 10, 0, -10, -20]));
})

describe('Filter array by word length', () => {
	it('Should return array as a result', () => assert.isArray(fruits));
	it('Show elements, which are smaller, than 5', () => {
		assert.deepEqual(filterByLength(fruits, 0, 5), ['apple', ''])
	});
})

//=================================================caching

describe('Cache', () => {
	it('Should return the same result twice', () => {
		assert.deepEqual(calculate(3, 3), { value: 27, fromCache: false })
		assert.deepEqual(calculate(3, 3), { value: 27, fromCache: true })
	});
	it('Returns object', () => {
		assert.isObject(calculate(3, 3), true)
	});
})

//=================================================moneyBox

describe('MoneyBox', () => {
	it('Should add coin', () => {
		assert.equal(moneyBox.getAmount(), 0)
		moneyBox.addCoin();
		assert.equal(moneyBox.getAmount(), 1)
	});
	it('Should return amount', () => {
		assert.equal(moneyBox.getAmount(), 1)
	});
})

//=================================================calculator

describe('Calculator', () => {
	it('Should add an operation', () => {
		const operation = () => { };
		assert.equal(calculator.methods['test'], undefined);
		calculator.addOperation('test', operation);
		assert.equal(calculator.methods['test'], operation);
	})
	it('Should show history', () => {
		assert.deepEqual(calculator.showHistory(), [])
	})
	it('Should clear history', () => {
		assert.equal(calculator.clearHistory(), 'history is clear')
	})
	describe('Math functions', () => {
		describe('Addition', () => {
			it('Should perform an operation', () => {
				assert.equal(addition(2, 2), 4)
			})
		});
		describe('Substraction', () => {
			it('Should perform an operation', () => {
				assert.equal(substraction(4, 2), 2)
			})
		});
		describe('Multiplication', () => {
			it('Should perform an operation', () => {
				assert.equal(multiplication(2, 3), 6)
			})
		});
		describe('Division', () => {
			it('Should perform an operation', () => {
				assert.equal(division(4, 2), 2)
			})
		});
	});
});

//=================================================ticketSales

describe('Ticket sales', () => {
	it('Should show the events', () => {
		assert.equal(ticketWindow.events['Saw'], undefined)
		ticketWindow.createEvent('Saw', 300);
		assert.equal(ticketWindow.events['Saw'], 300)
	})
	it('Should show money storage', () => {
		assert.equal(ticketWindow.storage, 0)
	})
	it('Should show the tickets', () => {
		assert.deepEqual(ticketWindow.tickets, { '123456': 300 })
	})
	it('Should create id for the tickets', () => {
		let result = ticketWindow.id;
		assert.isNumber(ticketWindow.id(), console.log(result))
	})
	it('Should return a ticket', () => {
		assert.deepEqual(ticketWindow.tickets, { '123456': 300 })
		ticketWindow.returnTicket('123456')
		assert.deepEqual(ticketWindow.showTickets(), {})
	})
	it('Should buy a ticket', () => {
		assert.deepEqual(ticketWindow.showTickets(), {})
		ticketWindow.buyTicket('Saw')
		ticketWindow.showTickets();
	})
})