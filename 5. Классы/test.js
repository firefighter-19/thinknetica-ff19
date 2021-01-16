class A {
	constructor() {
		let name = 'a';
		this.name = name;
	}
}

class B {
	constructor() {
		let name = 'b';
		this.name = name;
	}
}

const array = [new A, new B];

// console.log(array)

console.log(Object.assign({}, new A))

// console.log(array2)