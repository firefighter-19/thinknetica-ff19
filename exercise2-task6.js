//Реализовать функцию для случайной сортировки элементов массива


function shuffle(array) {
	array.sort(() => Math.random() - 0.5);
}

let arr = ['1', '2', '3', '4'];
shuffle(arr);
console.log(arr);

// Тасование Фишера — Йетса

function shuffleFisherYates(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

let array = ['1', '2', '3', '4'];
shuffleFisherYates(array);
console.log(array);