const calc = (expression) => {
	const [a, oper, b] = expression.split(' ');
	let result;
	switch (oper) {
		case '+':
			result = +a + +b;
			break;
		case '-':
			result = a - b;
			break;
		case '*':
			result = a * b;
			break;
		case '/':
			result = a / b;
			break;
	}
	return `${expression} = ${result}`;
};

console.log(calc('155 * 15'));
