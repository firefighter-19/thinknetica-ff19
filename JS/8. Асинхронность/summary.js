// коллбэки (пример асинхронности, использующий коллбэек функцию)

const callback = () => {
	console.log('hello world')
}
setTimeout(callback, 500);

// pizza cooking (callback vers.)

// const makeDough = nextStep => {
// 	const pizza = {};

// 	setTimeout(() => {
// 		nextStep(pizza);
// 	}, 500)
// };

// const makeSauce = (pizza, sauce, nextStep) => {
// 	setTimeout(() => {
// 		pizza.sauce = sauce;
// 		nextStep(pizza)
// 	}, 500)
// };

// const makeTopping = (pizza, topping, nextStep) => {
// 	setTimeout(() => {
// 		pizza.topping = topping;
// 		nextStep(pizza);
// 	}, 500)
// };

// const makePizza = (sauceType, toppingType, finalStep) => {
// 	makeDough(pizza => {
// 		makeSauce(pizza, sauceType, pizza => {
// 			makeTopping(pizza, toppingType, pizza => {
// 				finalStep(`${pizza.sauce} and ${pizza.topping}`)
// 			})
// 		})
// 	})
// }

// makePizza('tomato', 'Salami', pizza => {
// 	console.log('Pizza is ready with', pizza)
// })


//pizza cooking (promise vers.)

const makePizza = (sauce, topping) => {
	const makeDough = () => {
		const pizza = {};

		return new Promise((resolve, reject) =>
			setTimeout(() => resolve(pizza), 500)
		)
	};

	const makeSauce = pizza => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				pizza.sauce = sauce;
				resolve(pizza)
			}, 500)
		})
	};

	const makeTopping = pizza => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				pizza.topping = topping;
				resolve(pizza)
			}, 500)
		})
	};
	return makeDough()
		.then(makeSauce)
		.then(makeTopping)
}

makePizza('tomato', 'Salami').then(pizza => {
	console.log(pizza)
});