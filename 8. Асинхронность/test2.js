function delay(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			return resolve()
		}, ms)
	})
}

delay(3000)
	.then(() => console.log(('выполнилось через 3 секунды')));