const apiGiphy = 'qjL5hFaEXiaEXz7atrAFipTLjqUwbllH';

let input = document.querySelector('.input__box');
let imgBox = document.querySelector('.img__box');
let img = document.createElement('img');
imgBox.append(img);

const getGif = name => {
	return `https://api.giphy.com/v1/gifs/search?q=${name}&api_key=${apiGiphy}&limit=25`
}

//xhr

// const getGifList = (name, cb) => {
// 	const request = new XMLHttpRequest();
// 	request.addEventListener('load', (event) => {
// 		const response = event.target;
// 		if (response.status === 200) {
// 			try {
// 				const parsedResult = JSON.parse(response.response);
// 				cb(parsedResult)
// 			}
// 			catch (event) {
// 				console.log(new Error(`Finished with error`))
// 			}
// 		}
// 		const data = JSON.parse(response.response);
// 	})

// 	request.open('get', getGif(name));
// 	request.send();
// }

// getGifList('cat', (gifs) => {
// 	console.log(gifs, 'gotcha')
// })

//fetch

fetch(getGif('cat'))
	.then(gifs => {
		return gifs.json()
	})
	.then(gifs => {
		// img.setAttribute('src')
		console.log(gifs)
	})
