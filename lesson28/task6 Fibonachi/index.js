const a = [0, 1];
const maxFibonacci = (initValue) => {
	if (initValue <= 0) {
		return;
	}
	if (a[a.length - 1] >= initValue) {
		// eslint-disable-next-line consistent-return
		return a.reverse().find((elem) => elem <= initValue);
	}

	a.push(a[a.length - 1] + a[a.length - 2]);

	// eslint-disable-next-line consistent-return
	return maxFibonacci(initValue);
};

maxFibonacci(15);
