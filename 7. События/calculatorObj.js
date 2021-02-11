// function Calculator() {
// 	const display = document.querySelector('.display');
// 	this.calculator = document.querySelector('.calculator');
// 	display.style = `display:flex;
// 		 justify-content: flex-end;
// 		 align-items: center;
// 		 font-size: 24px;
// 		 font-weight: 600;`;

// 	let currentOperand = null;
// 	let secondOperand = null;
// 	let currentOperation = null;

// 	let doAction = function () {
// 		let result;
// 		switch (currentOperation) {
// 			case '/':
// 				result = +secondOperand / +currentOperand;
// 				break;
// 			case '*':
// 				result = +secondOperand * +currentOperand;
// 				break;
// 			case '-':
// 				result = +secondOperand - +currentOperand;
// 				break;
// 			case '+':
// 				result = +secondOperand + +currentOperand;
// 				break;
// 		}
// 		if (currentOperation === null) {
// 			display.innerHTML = currentOperand;
// 		} else {
// 			currentOperand = result;
// 			display.innerHTML = currentOperand;
// 			currentOperation = null;
// 			secondOperand = null;
// 		}
// 	};
// 	let rewrite = function (button) {
// 		secondOperand = currentOperand;
// 		currentOperand = null;
// 		currentOperation = button;
// 		display.innerHTML = '';
// 	};
// 	this.showActions = function (event) {
// 		this.button = event.target.textContent;
// 		switch (this.button) {
// 			case '/':
// 				rewrite(this.button);
// 				break;
// 			case '*':
// 				rewrite(this.button);
// 				break;
// 			case '-':
// 				rewrite(this.button);
// 				display.innerHTML = this.button;
// 				break;
// 			case '+':
// 				rewrite(this.button);
// 				break;
// 			case '=':
// 				doAction();
// 				break;
// 			case 'c':
// 				currentOperand = null;
// 				display.innerHTML = '';
// 				break;
// 			case 'Delete':
// 				if (currentOperand !== null) {
// 					currentOperand = currentOperand.slice(0, currentOperand.length - 1)
// 					display.innerHTML = currentOperand;
// 				}
// 				break;
// 			default:
// 				currentOperand = currentOperand === null ? this.button : currentOperand + this.button;
// 				display.innerHTML = currentOperand;
// 				break;
// 		}
// 	};
// 	this.performActions = function (keyValue) {
// 		switch (keyValue) {
// 			case '/':
// 				rewrite(keyValue);
// 				break;
// 			case '*':
// 				rewrite(keyValue);
// 				break;
// 			case '-':
// 				rewrite(keyValue);
// 				display.innerHTML = keyValue;
// 				break;
// 			case '+':
// 				rewrite(keyValue);
// 				break;
// 			case '=':
// 				doAction();
// 				break;
// 			case 'Enter':
// 				doAction();
// 				break;
// 			case 'c':
// 				currentOperand = null;
// 				display.innerHTML = '';
// 				break;
// 			case 'Backspace':
// 				if (currentOperand !== null) {
// 					currentOperand = currentOperand.slice(0, currentOperand.length - 1)
// 					display.innerHTML = currentOperand;
// 				}
// 				break;
// 			default:
// 				currentOperand = currentOperand === null ? keyValue : currentOperand + keyValue;
// 				display.innerHTML = currentOperand;
// 				break;
// 		}
// 	};

// 	this.calculator.addEventListener('click', this.showActions);
// 	document.addEventListener('keypress', (event) => {
// 		let keyValue = event.key;
// 		const allowedKeys = ['Enter', 'c'];
// 		if (allowedKeys.includes(keyValue)) {
// 			this.performActions(keyValue)
// 		}
// 	});
// 	document.addEventListener('keydown', (event) => {
// 		let keyValue = event.key;
// 		if (keyValue === 'Backspace') {
// 			this.performActions(keyValue)
// 		}
// 	})
// }

// let calc = new Calculator();

