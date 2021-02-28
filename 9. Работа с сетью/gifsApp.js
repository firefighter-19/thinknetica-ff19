let input = document.querySelector('.search__box');
let imgBox = document.querySelector('.img__box');
let img = document.createElement('img');
imgBox.append(img);

const getGif = () => {
	const apiGiphy = 'qjL5hFaEXiaEXz7atrAFipTLjqUwbllH';
	input.addEventListener('input', event => event.target.value)
	let name = input.value
	return `https://api.giphy.com/v1/gifs/search?q=${name}&api_key=${apiGiphy}&limit=25`
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

input.addEventListener('change', () => {
	apiCall(getGif())
		.then(gifs => {
			console.log(gifs, 'data recieved')
		})
})