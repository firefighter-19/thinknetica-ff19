function divisiors(int) {
	let result = [];
	for (let i = 1; i <= int; i++) {
		if (int % i === 0 && i !== int && i !== 1) {
			result.push(i);
		}
		if (i === int && int % i === 0 && result.length === 0) {
			console.log(`${int} is prime`)
		}
	}
	console.log(result)
}
divisiors(5)