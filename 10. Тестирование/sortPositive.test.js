//Тестирование функции вывода количества положительных элементов массива и их суммы

describe('Return integers count and show its sum', () => {
	it('result should be an object', () => {
		assert.isObject(countNumbers(arr))
	})
	it('argument must be an array', () => {
		assert.isArray(arr);
	})
	it('should show count and sum of the positive numbers', () => {
		assert.deepEqual(countNumbers(arr), { count: 5, sum: 357 })
	})

})