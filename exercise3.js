// Написать функцию для реверсии слова не используя встроенные методы

const wordReverse = (word) => {
	let newString = '';
	for (let i = word.length - 1; i >= 0; i--) {
		newString += word.charAt(i);
	}
	return newString;
}

console.log(wordReverse('Васян'));