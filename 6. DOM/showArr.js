const array = ['item1', ['item2', ['item3',]]]

function createList(arr) {
	const body = document.querySelector('body');
	let ul = document.createElement('ul');
	let li = document.createElement('li');
	let clonedLi = li.cloneNode();
	let clonedUl = ul.cloneNode();
	let trdCloneLi = li.cloneNode();
	let trdCloneUl = ul.cloneNode();

	li.textContent = arr[0];
	clonedLi.textContent = arr[1][0];
	trdCloneLi.textContent = arr[1][1];

	body.append(ul)
	ul.append(li)
	li.append(clonedUl)
	clonedUl.append(clonedLi);
	clonedLi.append(trdCloneUl);
	trdCloneUl.append(trdCloneLi);
}

createList(array)