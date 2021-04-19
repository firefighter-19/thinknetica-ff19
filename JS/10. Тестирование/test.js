let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newArray = array.map(el => {
	if (el > 0 && el <= 3) {
		console.log(el)
	}
})

console.log(newArray)