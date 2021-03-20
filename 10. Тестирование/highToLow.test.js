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

describe('Cache', () => {
	it('Should return the same result twice', () => {
		assert.deepEqual(calculate(3, 3), { value: 27, fromCache: false })
		assert.deepEqual(calculate(3, 3), { value: 27, fromCache: true })
	});
	it('Returns object', () => {
		assert.isObject(calculate(3, 3), true)
	});
})

describe('MoneyBox', () => {
	it('Should add coin', () => {
		assert.equal(moneyBox.addCoin())
	});
	it('Should return amount', () => {
		assert.equal(moneyBox.getAmount(), 1)
	});
})

describe('MoneyBox', () => {
	it('Should add coin', () => {
		assert.equal(moneyBox.addCoin())
	});
	it('Should return amount', () => {
		assert.equal(moneyBox.getAmount(), 1)
	});
})