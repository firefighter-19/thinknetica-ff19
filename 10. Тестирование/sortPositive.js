const countNumbers = arr => {
	if (Array.isArray(arr) && arr.length > 0) {
		let positiveNum = arr.map(el => el > 0 ? el : false).map(el => Math.round(el) !== el ? false : el).sort();
		if (positiveNum.includes(false)) {
			positiveNum = positiveNum.slice(0, positiveNum.indexOf(false));
		}
		let sumOfNum = positiveNum.reduce((a, b) => a + b);
		return {
			count: positiveNum.length,
			sum: sumOfNum
		}
	}
}

const arr = [-91, -93, -45, 67, 96, 40, -34, 96, -42, 58];


