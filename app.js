1.
var x = 6, y = 15, z = 4;
console.log(y /= x + 5 % z); //2.142857142857143
2.
var x = 6, y = 15, z = 4;
console.log(z = x++ + y * 5); // 81
3.
var x = 6, y = 15, z = 4;
console.log(x += y - x++ * z); // -3
4.
var x = 6, y = 15, z = 4;
console.log(z = --x - y * 5); // -70
5.
var a = 3;
var b = ++a + 1 + a++;
console.log(b); // 9



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

let accessAge = {
	minAge: 18,
	maxAge: 35,
	canAccess(person) {
		return person.age >= this.minAge && person.age < this.maxAge;
	}
}

let persons = [
	{ age: 16 },
	{ age: 20 },
	{ age: 23 },
	{ age: 30 }
];

let soldiers = persons.filter(accessAge.canAccess, accessAge);

// alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23

// let accessRules = {
// 	paid: true,
// 	blocked: false,
// 	badUsername: false,
// 	isAdmin: false,
// 	canAccess(person) {
// 		return person.paid === true, person.blocked === false, badUsername === false, isAdmin === false
// 	}
// }

