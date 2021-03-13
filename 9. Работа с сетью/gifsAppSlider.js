let input = document.querySelector('.search__box');
let iframe = document.querySelector('.iframe');
let paginationBox = document.querySelector('.pagination__box');

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

let pagination = (arr) => {
	let counter = 0;
	paginationBox.addEventListener('click', e => {
		if (e.target.classList.contains('seconds')) {
			let limit = counter + 1;
			for (counter; counter < limit && counter < arr.length; counter++) {
				iframe.setAttribute('src', arr[counter])
				console.log(counter)
			}
		}
		if (e.target.classList.contains('first')) {
			let limit = counter - 1;
			for (counter; counter > limit && counter >= 0; counter--) {
				iframe.setAttribute('src', arr[counter])
				console.log(counter)
			}
		}
	})
}

let onChange = event => {
	let name = event.target.value;
	apiCall(apiKey(name))
		.then(gifs => cache(name, gifs.data))
		.then(gifs => pagination(gifs))
}

onChange = debounce(onChange, 500);

input.addEventListener('keyup', onChange);