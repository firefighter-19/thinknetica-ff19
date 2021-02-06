function calculate() {
	let display = document.querySelector('.display');
	const actions = document.querySelectorAll('.calculator__line');

	let currentOperand = null;
	let secondOperand = null; //20
	let currentOperation = null;

	const doAction = () => {
		let result = null;
		switch (currentOperation) {
			case '/':
				result = +secondOperand / +currentOperand;
				display.innerHTML = result;
				break;
			case '*':
				if (result === null) {
					result = +secondOperand * +currentOperand;
					display.innerHTML = result;
					console.log(result)
					break;
				}
				else if (result !== null) {
					result = result * +currentOperand;
					display.innerHTML = result;
					break;
				}
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
		display.style = `display:flex;
		 justify-content: flex-end;
		 align-items: center;
		 font-size: 24px;
		 font-weight: 600;`;

		switch (button) {
			case '/':
				rewrite(button);
				break;
			case '*':
				rewrite(button);
				break;
			case '=':
				doAction();
				break;
			case 'C':
				currentOperand = null;
				display.innerHTML = '';
				break;
			case 'del':
				currentOperand = currentOperand.slice(0, currentOperand.length - 1);
				display.innerHTML = currentOperand;
				break;
			default:
				currentOperand = currentOperand === null ? button : currentOperand + button;
				display.textContent = currentOperand;

		}
	};

	actions.forEach(item => {
		item.addEventListener('click', showActions)
	})
}
calculate();

