const p = document.querySelector('p');
p.oncopy = () => false;
p.addEventListener('click', event => {
	alert('not allowed to copy');
	event.preventDefault()
}, false)

p.addEventListener('contextmenu', event => {
	alert('not allowed to use context menu');
	event.preventDefault()
}, false)