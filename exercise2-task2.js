//Реализовать функцию, которая принимает текст, и возвращает массив объектов со структурой

let array = [
	1,
	2,
	3
]

let array2 = [
	11,
	22,
	33
]


const compareArrays = (arr, arr2) => {
	if (arr.forEach(el => el.length) < arr2.forEach(el => el.length)) {
		return true
	}
	return false
}

console.log(compareArrays(array, array2))