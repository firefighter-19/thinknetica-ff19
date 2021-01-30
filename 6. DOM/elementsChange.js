function parseTemplate(element, obj) {
	const div = element;
	if (!obj.hasOwnProperty('title') || !obj.hasOwnProperty('description')) {
		return console.log('error')
	}

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
