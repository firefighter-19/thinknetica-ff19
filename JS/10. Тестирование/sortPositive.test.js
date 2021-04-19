describe('Return integers count and show its sum', () => {
	it('result should be an object', () => {
		assert.isObject(countNumbers([1,2,3,4,5]))
	})
	it('argument must be an array', () => {
			const testArgument = (array) => {
			if (Array.isArray(array) && array.length > 1) {
				assert.deepEqual(countNumbers(array), { count: 5, sum: 15 })
			} else if (array.length < 2){
				assert.isUndefined(array, `It can't be used`)
			}
			else {
				assert.isArray(array, 'Not an array')
			}
		}
		let array = [1,2,3,4,5];
		testArgument(array)

	})
	it('should show count and sum of the positive numbers', () => {
		assert.deepEqual(countNumbers(arr), { count: 5, sum: 357 })
	})
});