function parseTemplate(element, obj) {
	const div = element;
	let elementsArr = Array.from(div.children)
	elementsArr.forEach(item => {
		if (item.dataset.field === 'title') {
			item.textContent = obj.title;
		}
		if (item.dataset.field === 'description') {
			item.textContent = obj.description;
		}
	})
}

parseTemplate(
	document.getElementById('item1'),
	{
		title: 'Hello world',
		description: 'The first program',
	}
);
