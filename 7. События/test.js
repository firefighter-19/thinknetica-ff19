function Test() {
	this.test = null;

	this.testFunction = function () {
		console.log(this.test)
	}
}

let test = new Test()

console.log(test)