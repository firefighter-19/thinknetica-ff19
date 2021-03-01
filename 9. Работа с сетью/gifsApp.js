let input = document.querySelector('.search__box');
let iframe = document.querySelector('iframe');

const getGif = () => {
	const apiGiphy = 'qjL5hFaEXiaEXz7atrAFipTLjqUwbllH';
	input.addEventListener('input', event => event.target.value)
	let name = input.value;
	return `https://api.giphy.com/v1/gifs/search?q=${name}&api_key=${apiGiphy}&limit=1`
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

const checkCache = () => {
	let gifsCache = new Map();
	return function (name, data) {
		for (let key of data) {
			if (!gifsCache.has(name)) {
				gifsCache.set(search = name, link = key.embed_url);
				return gifsCache.get(name)
			} else {
				return gifsCache.get(name)
			}
		}
	}
}
let cache = checkCache();

input.addEventListener('keydown', () => {
	setTimeout(() => {
		apiCall(getGif())
			.then(gifs => cache(input.value, gifs.data))
			.then(gifs => {
				iframe.setAttribute('src', gifs)
			})
	}, 1500);
})