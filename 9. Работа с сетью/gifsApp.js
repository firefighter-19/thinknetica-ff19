let input = document.querySelector('.search__box');
let iframe = document.querySelector('iframe');

const getGif = () => {
	const apiGiphy = 'qjL5hFaEXiaEXz7atrAFipTLjqUwbllH';
	input.addEventListener('input', event => event.target.value)
	let name = input.value
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
	let gifsCache;
	return function (data) {
		for (let key of data) {
			return gifsCache = key.embed_url;
		}
	}
}
let cache = checkCache();

input.addEventListener('keydown', () => {
	setTimeout(() => {
		apiCall(getGif())
			.then(gifs => cache(gifs.data))
			.then(gifs => {
				iframe.setAttribute('src', gifs)
			})
	}, 5000);
})