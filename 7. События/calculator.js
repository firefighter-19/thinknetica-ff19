function calculate() {
	let display = document.querySelector('.display');
	const calculator = document.querySelector('.calculator');
	display.style = `display:flex;
		 justify-content: flex-end;
		 align-items: center;
		 font-size: 24px;
		 font-weight: 600;`;

	let currentOperand = null;
	let secondOperand = null;
	let currentOperation = null;

	const doAction = () => {
		let result;
		switch (currentOperation) {
			case '/':
				result = +secondOperand / +currentOperand;
				break;
			case '*':
				result = +secondOperand * +currentOperand;
				break;
			case '-':
				result = +secondOperand - +currentOperand;
				break;
			case '+':
				result = +secondOperand + +currentOperand;
				break;
		}
		if (currentOperation === null) {
			display.innerHTML = currentOperand;
		} else {
			currentOperand = result;
			display.innerHTML = currentOperand;
			currentOperation = null;
			secondOperand = null;
		}
	}

	const rewrite = (button) => {
		secondOperand = currentOperand;
		currentOperand = null;
		currentOperation = button;
		display.innerHTML = '';
	}

	const showActions = (event) => {
		const button = event.target.textContent;
		switch (button) {
			case '/':
				rewrite(button);
				break;
			case '*':
				rewrite(button);
				break;
			case '-':
				rewrite(button);
				display.innerHTML = button;
				break;
			case '+':
				rewrite(button);
				break;
			case '=':
				doAction();
				break;
			case 'c':
				currentOperand = null;
				display.innerHTML = '';
				break;
			case 'Delete':
				currentOperand = currentOperand.slice(0, currentOperand.length - 1);
				display.innerHTML = currentOperand;
				break;
			default:
				currentOperand = currentOperand === null ? button : currentOperand + button;
				display.innerHTML = currentOperand;
				break;
		}
	};

	const performActions = (keyValue) => {
		switch (keyValue) {
			case '/':
				rewrite(keyValue);
				break;
			case '*':
				rewrite(keyValue);
				break;
			case '-':
				rewrite(keyValue);
				display.innerHTML = button;
				break;
			case '+':
				rewrite(keyValue);
				break;
			case '=':
				doAction();
				break;
			case 'c':
				currentOperand = null;
				display.innerHTML = '';
				break;
			case 'Delete':
				currentOperand = currentOperand.slice(0, currentOperand.length - 1);
				display.innerHTML = currentOperand;
				break;
			default:
				currentOperand = currentOperand === null ? keyValue : currentOperand + keyValue;
				display.innerHTML = currentOperand;
				break;
		}
	};


	calculator.addEventListener('click', showActions);
	document.addEventListener('keypress', (event) => {
		let keyValue = event.key;
		performActions(keyValue)
	});
	document.addEventListener('keydown', (event) => {
		let keyValue = event.key;
		if (keyValue === 'Delete') {
			performActions(keyValue)
		}
	})
}
calculate();

