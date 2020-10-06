1.
var x = 6, y = 15, z = 4;
console.log(y /= x + 5 % z); //2.142857142857143
// '/=' - 3; '+' - 13; '%' - 14; 
// 1. 5/4 = 1.25;
// 2. 6 + 1.25;
// 3. 15 / 7.25

2.
var x = 6, y = 15, z = 4;
console.log(z = x++ + y * 5); // 81
// '..++' - 17; '+' - 13; '*' - 14;
// 1. x++ = 6;
// 2. 15 * 5 = 75
// 3. 6 + 75 

3.
var x = 6, y = 15, z = 4;
console.log(x += y - x++ * z); // -3
// 1. 6 * 4
// 2. 15-24
// 3. -9 + 6

4.
var x = 6, y = 15, z = 4;
console.log(z = --x - y * 5); // -70

// 1. --x = 5;
// 2. 15 * 5;
// 3. 5 - 75

5.
var a = 3;
var b = ++a + 1 + a++;
console.log(b); // 9

// 4 + 4 + 1


// Написать функцию для подсчета количества букв в слове
const calcLetterWord = (word) => {
	console.log(word.length);
};

calcLetterWord('Worddddd');

// Написать функцию для реверсии слова не используя встроенные методы

const wordReverse = (word) => {
	let newString = '';
	for (let i = word.length - 1; i >= 0; i--) {
		newString += word.charAt(i);
	}
	return newString;
}

console.log(wordReverse('Васян'));

// Реализовать цикл перебирающий числа от одного до 20 и выводящий каждое четное значение на экран, реализация должна использовать все 3 вида циклов (отдельная реализация на каждый цикл)

//1

let i = 0;
do {
	if (i % 2 === 0) {
		console.log(i);
	}
	i++;
} while (i <= 20);

//2 

let j = 0;

while (j <= 20) {
	if (j % 2 === 0) {
		console.log(j);
	}
	j++;
}


//3 
for (let i = 0; i <= 20; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}


// Реализовать if для проверки доступа

let accessAllowed;
if ((this.age >= 18 && this.age <= 35) && (this.paid === true && this.blocked === false && this.badUsername === false || this.isAdmin === true)) {
	console.log('Access allowed');
}
console.log('Access denied');

//Реализовать if для проверки доступа (через тернарный оператор)

let accessAllowed2 = ((this.age >= 18 && this.age <= 35) && (this.paid === true && this.blocked === false && this.badUsername === false || this.isAdmin === true)) ? console.log('Access allowed') : console.log('Access denied');