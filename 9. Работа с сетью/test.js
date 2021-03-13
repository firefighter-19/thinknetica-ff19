// const debounce = (func, ms) => {
// 	let timeout;
// 	return function () {

// 		const fnCall = () => {
// 			func.apply(this, arguments)
// 		}
// 		clearTimeout();
// 		timeout = setTimeout(fnCall, ms)
// 	}
// }

// function onChange(e) {
// 	console.log(e.target.value)
// }

// onChange = debounce(onChange, 1500);

// document.querySelector('input').addEventListener('keyup', onChange);


// let throttle = (func, ms) => {
// 	let isThrottled = false;
// 	let savedThis;
// 	let savedArgs;

// 	const wrapper = () => {
// 		if (isThrottled) {
// 			savedThis = this;
// 			savedArgs = arguments;
// 			return;
// 		}
// 		func.apply(this, arguments);

// 		isThrottled = true;

// 		setTimeout(() => {
// 			isThrottled = false;
// 			if (savedArgs) {
// 				wrapper.apply(savedThis, savedArgs);
// 				savedThis = null;
// 				savedArgs = null;
// 			}
// 		}, ms)
// 	}
// 	return wrapper;
// }


