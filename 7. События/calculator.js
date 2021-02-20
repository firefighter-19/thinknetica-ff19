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

	const countPercent = () => {
		let result;
		switch (currentOperation) {
			case '/':
				result = +secondOperand / (+secondOperand * (currentOperand / 100));
				break;
			case '*':
				result = +secondOperand * (+secondOperand * (currentOperand / 100));
				break;
			case '-':
				result = +secondOperand - +secondOperand * (currentOperand / 100);
				break;
			case '+':
				result = +secondOperand + +secondOperand * (currentOperand / 100);
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
			case '%':
				countPercent();
				break;
			case 'Delete':
				if (currentOperand !== null) {
					currentOperand = currentOperand.slice(0, currentOperand.length - 1)
					display.innerHTML = currentOperand;
				}
				break;
			default:
				currentOperand = currentOperand === null ? button : currentOperand + button;
				if (currentOperand.includes('..')) {
					display.innerHTML = `Don't use two dots`
				} else {
					display.innerHTML = currentOperand;
				}
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
				display.innerHTML = keyValue;
				break;
			case '+':
				rewrite(keyValue);
				break;
			case '=':
				doAction();
				break;
			case 'Enter':
				doAction();
				break;
			case 'c':
				currentOperand = null;
				display.innerHTML = '';
				break;
			case 'Backspace':
				if (currentOperand !== null) {
					currentOperand = currentOperand.slice(0, currentOperand.length - 1)
					display.innerHTML = currentOperand;
				}
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
		const allowedKeys = ['Enter', 'c'];
		if (allowedKeys.includes(keyValue)) {
			performActions(keyValue)
		}
	});
	document.addEventListener('keydown', (event) => {
		let keyValue = event.key;
		if (keyValue === 'Backspace') {
			performActions(keyValue)
		}
	})
}
calculate();

function addOperation() {
	const input = document.querySelector('.field');
	const input2 = document.querySelector('.field2')
	const columnList = document.querySelector('tr');
	const tr = document.createElement('tr');
	tr.classList.add('calculator__column');
	input2.addEventListener('click', () => {
		if (input.value !== '' && input.value === '%') {
			columnList.before(tr)
			let td = document.createElement('td');
			td.classList.add('calculator__line')
			tr.append(td);
			td.innerHTML = input.value;
			input.innerHTML = '';
			input.disabled = true;
		}
	})
}
addOperation();
