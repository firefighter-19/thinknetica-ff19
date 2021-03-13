let input = document.querySelector('.search__box');
let iframe = document.querySelector('.iframe');

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
	let gifsCache = [];
	return function (args) {
		for (let key of args) {
			let result = key.images.original.url;
			if (!gifsCache.includes(result)) {
				gifsCache.push(result);
			}
		}
		return gifsCache;
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

let onChange = event => {
	let name = event.target.value;
	apiCall(apiKey(name))
		.then(gifs => cache(name, gifs.data))
		.then(gifs => console.log(gifs))
	// .then(gifs => iframe.setAttribute('src', gifs))
}

onChange = debounce(onChange, 500);

input.addEventListener('keyup', onChange);