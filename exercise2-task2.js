//Реализовать функцию, которая принимает текст, и возвращает массив объектов со структурой

let array = [
	11,
	2,
	3]

let array2 = [
	11,
	22,
	33,
	
]

const compareArrays = (array, array2) => {
	if (array.length !== array2.length) {
		console.log ("Arrays aren't matched")
    }
	for (let key in array) {
		if (!array.includes(array2[key])) {
		return true;
		}
		return false;
	}
	
}

console.log (compareArrays(array, array2))