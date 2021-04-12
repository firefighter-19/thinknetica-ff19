const input = document.querySelector('.search__box');
const paginationBox = document.querySelector('.pagination__box');
const divImg = document.querySelector('.img')

const apiKey = (name) => {
	const apiKey = 'qjL5hFaEXiaEXz7atrAFipTLjqUwbllH';
	return `https://api.giphy.com/v1/gifs/search?q=${name}&api_key=${apiKey}&limit=10`
}

const apiCall = (url) => {
	return new Promise((resolve, reject) => {
		const request = new XMLHttpRequest();

		request.addEventListener('load', (event) => {
			const response = event.target;
			if (response.status === 200) {
				try {
					const parsedResult = JSON.parse(response.response);
					resolve(parsedResult)
				}
				catch (event) {
					reject(event)
				}
			} else {
				reject(
					new Error(
						`Finished with an error ${response.status} ${response.statusText}`
					)
				);
			}
		})
		request.open('get', url);
		request.send()
	})
}

let cache = () => {
	let gifsCache = {};
	return function (name, args) {
		if (!gifsCache.hasOwnProperty(name)) {
			let url = [];
			for (let key of args) {
				let result = key.images.original.url;
				url.push(result);
			}
			gifsCache[name] = url;
		}
		return gifsCache[name];
	}
}
cache = cache();

const debounce = (func, ms) => {
	let timeout;
	return function () {
		const fnCall = () => func.apply(this, arguments);
		clearTimeout(timeout);
		timeout = setTimeout(fnCall, ms)
	}
}

const slider = (arr) => {
	liItems = [];

	const gif = document.createElement('img');
	divImg.append(gif)

	const ul = document.createElement('ul');
	ul.classList.add('pagination__list');
	paginationBox.append(ul);

	if (ul.hasChildNodes()) {
		while (ul.firstChild) {
			ul.removeChild(ul.firstChild);
		}
	}
	for (let i = 1; i <= arr.length; i++) {
		let li = document.createElement('li');
		li.classList.add('pagination__items');
		ul.append(li);
		liItems.push(li);
	}

	liItems[0].classList.add('active');
	gif.setAttribute('src', arr[0]);

	const counter = () => {
		let i = 0;
		paginationBox.addEventListener('click', e => {
			if (e.target.classList.contains('seconds')) {
				if (i < 9) {
					i++;
					liItems[i - 1].classList.remove('active');
					liItems[i].classList.add('active');
					gif.setAttribute('src', arr[i]);
				}
			} else if (e.target.classList.contains('first')) {
				if (i > 0) {
					i--;
					liItems[i + 1].classList.remove('active');
					liItems[i].classList.add('active');
					gif.setAttribute('src', arr[i]);
				}
			}
		})
	}
	counter();
}

let onChange = event => {
	let name = event.target.value;
	apiCall(apiKey(name))
		.then(gifs => cache(name, gifs.data))
		.catch(gifs => new Error('Something wenth wrong'))
		.then(gifs => slider(gifs))
}

onChange = debounce(onChange, 500);

input.addEventListener('keyup', onChange);