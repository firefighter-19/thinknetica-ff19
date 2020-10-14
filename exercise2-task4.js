//Реализовать функцию для фильтрации массива чисел по убыванию

const sortDesc = (a, b) => {
	if (a < b) return 1;
	if (a === b) return 0;
	if (a > b) return -1
}

const numbers = [-20, -10, 0, 10, 20, 30]

console.log(numbers.sort(sortDesc));

