// const array = ['item1', ['item2', ['item3',]]]

// function createList(arr) {
// 	const body = document.querySelector('body');
// 	let ul = document.createElement('ul');
// 	let li = document.createElement('li');
// 	let clonedLi = li.cloneNode();
// 	let clonedUl = ul.cloneNode();
// 	let trdCloneLi = li.cloneNode();
// 	let trdCloneUl = ul.cloneNode();

// 	li.textContent = arr[0];
// 	clonedLi.textContent = arr[1][0];
// 	trdCloneLi.textContent = arr[1][1];

// 	body.append(ul)
// 	ul.append(li)
// 	li.append(clonedUl)
// 	clonedUl.append(clonedLi);
// 	clonedLi.append(trdCloneUl);
// 	trdCloneUl.append(trdCloneLi);
// }

// createList(array)


const arr = ["Item", ["Item2", ["Item3"]]];
function buildList(arr, elementRoot) {
	//   создаем ul
	//  встраиваем только что созданный ul в наш elementRoot
	const ul = document.createElement('ul')
	body.append(ul)
	arr.forEach(item => {
		if (typeof item === "string") {
			let li = document.createElement('li');
			ul.append(li)
			li.textContent = item;
			// создаем li
			// встраиваем только что созданный li в наш ul (стр 2)
		}
		if (Array.isArray(item)) {
			// return buildList(arr, elementRoot)
			// вызываем функцию снова с новыми параметрами
		}
	});
}
const body = document.querySelector('body');
buildList(arr, body);