function parseTemplate(element, obj) {
	const childOne = element.firstElementChild;
	const childTwo = element.lastElementChild;

	if (childOne.getAttribute('data-field')) {
		childOne.textContent = obj.title;
	}
	if (childTwo.getAttribute('data-field')) {
		childTwo.textContent = obj.description;
	} else {
		return 'There is no "data-field"';
	}
}

console.log(parseTemplate(
	document.getElementById('item1'),
	{
		title: 'Hello world',
		description: 'The first program',
	}
));