const arr = ["Item", ["Item2", ["Item3"]]];
function buildList(arr, elementRoot) {
	const ul = document.createElement('ul')
	elementRoot.append(ul)
	arr.forEach(item => {
		if (typeof item === "string") {
			let li = document.createElement('li');
			ul.append(li)
			li.textContent = item;
		}
		if (Array.isArray(item)) {
			item.toString()
			buildList(item, ul)
		}
	});
}
const body = document.querySelector('body');
buildList(arr, body);